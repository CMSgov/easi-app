-- everything will be handled in a single transaction
DO
$do$
BEGIN
	-- add column to system_intakes that we'll use as FK, then fill it with UUIDs that we'll use as PKs for LCIDs that will be migrated
    -- we want to add this column first so we have the LCID ids to insert into the lcids table,
    -- but we can't create a FK relationship until the lcid table's been populated; we'll do that later in this code
	ALTER TABLE system_intakes
    ADD COLUMN lcid_assignment_id uuid;

	-- generate PKs for LCIDs that will be migrated
    UPDATE system_intakes
    SET lcid_assignment_id = uuid_generate_v4()
    WHERE lcid IS NOT NULL;

    CREATE TABLE lcid_assignments (
        -- PK
        id UUID PRIMARY KEY NOT NULL, -- surrogate key

        -- fields (from system_intakes table)
        lcid TEXT NOT NULL, -- corresponds to current system_intakes.lcid, the user-visible LCID

        -- required to be present by input form for issuing LCID, but some records from Sharepoint don't have these, so columns are nullable
        expires_at TIMESTAMP WITH TIME ZONE,
        scope TEXT,

        -- optional fields
        cost_baseline TEXT,
        expiration_alert_ts TIMESTAMP WITH TIME ZONE,

        -- general metadata
        created_by TEXT NOT NULL CHECK (created_by ~ '^[A-Z0-9]{4}$'),
        created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
        modified_by TEXT CHECK (modified_by ~ '^[A-Z0-9]{4}$'),
        modified_at TIMESTAMP WITH TIME ZONE
    );

    -- copy data into new table from system_intakes, with a placeholder for created_by
    INSERT INTO lcid_assignments (id, lcid, expires_at, scope, cost_baseline, expiration_alert_ts, created_by)
    SELECT lcid_assignment_id, lcid, lcid_expires_at, lcid_scope, lcid_cost_baseline, lcid_expiration_alert_ts, 'TEMP'
    FROM system_intakes
    WHERE lcid IS NOT NULL;

    -- TODO - insert metadata, probably from actions table

    -- now that lcids table exists and is populated, we can set up FK relationship between system_intakes and lcids
    ALTER TABLE system_intakes
    ADD CONSTRAINT system_intakes_lcid_assignment_id_fkey
        FOREIGN KEY (lcid_assignment_id) REFERENCES lcid_assignments(id);


    -- this sanity check *probably* doesn't need to exist; when checking Prod, there's only two older intakes, imported from Sharepoint,
    -- that have lcid_scope data but a NULL lcid
    -- from EASi team meeting on 6/7/23, it's *probably* ok to just drop these columns and lose that data, but we're verifying with CMS

    -- sanity check to make sure we're not deleting any data we missed in the INSERT INTO query;
    -- if any of the columns to be deleted have a non-NULL in any of the rows that haven't been copied to LCID table, rollback everything
    /*
    IF EXISTS (
        SELECT -- intentionally empty
        FROM system_intakes
        WHERE lcid IS NULL
        AND (
            lcid_expires_at IS NOT NULL
            OR lcid_scope IS NOT NULL
            OR lcid_cost_baseline IS NOT NULL
            OR lcid_expiration_alert_ts IS NOT NULL
        )
    ) THEN
		RAISE EXCEPTION 'LCID data found in system_intakes that was not migrated, rolling back';
    END IF;
    */

    -- delete migrated columns
    ALTER TABLE system_intakes
        DROP COLUMN lcid,
        DROP COLUMN lcid_expires_at,
        DROP COLUMN lcid_scope,
        DROP COLUMN lcid_cost_baseline,
        DROP COLUMN lcid_expiration_alert_ts;

END
$do$;
