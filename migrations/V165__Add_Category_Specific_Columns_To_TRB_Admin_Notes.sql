ALTER TABLE trb_admin_notes
  -- columns for Initial Request Form category
  ADD COLUMN applies_to_basic_request_details BOOLEAN,
  ADD COLUMN applies_to_subject_areas BOOLEAN,
  ADD COLUMN applies_to_attendees BOOLEAN,

  -- columns for Advice Letter category
  ADD COLUMN applies_to_meeting_summary BOOLEAN,
  ADD COLUMN applies_to_next_steps BOOLEAN;

-- populate columns for existing admin notes
UPDATE trb_admin_notes
SET
  applies_to_basic_request_details = FALSE,
  applies_to_subject_areas = FALSE,
  applies_to_attendees = FALSE
WHERE category = 'INITIAL_REQUEST_FORM';

UPDATE trb_admin_notes
SET
  applies_to_meeting_summary = FALSE,
  applies_to_next_steps = FALSE
WHERE category = 'ADVICE_LETTER';

-- add constraints so that only notes of the correct category can set category-specific columns

ALTER TABLE trb_admin_notes
  ADD CONSTRAINT only_initial_request_notes_set_columns
  CHECK (
    category = 'INITIAL_REQUEST_FORM' OR
    (
      applies_to_basic_request_details IS NULL AND
      applies_to_subject_areas IS NULL AND
      applies_to_attendees IS NULL
    )
  );

ALTER TABLE trb_admin_notes
  ADD CONSTRAINT initial_request_notes_set_all_columns
  CHECK (
    category != 'INITIAL_REQUEST_FORM' OR
    (
      applies_to_basic_request_details IS NOT NULL AND
      applies_to_subject_areas IS NOT NULL AND
      applies_to_attendees IS NOT NULL
    )
  );

ALTER TABLE trb_admin_notes
  ADD CONSTRAINT only_advice_letter_notes_set_columns
  CHECK (
    category = 'ADVICE_LETTER' OR
    (
      applies_to_meeting_summary IS NULL AND
      applies_to_next_steps IS NULL
    )
  );

ALTER TABLE trb_admin_notes
  ADD CONSTRAINT advice_letter_notes_set_all_columns
  CHECK (
    category != 'ADVICE_LETTER' OR
    (
      applies_to_meeting_summary IS NOT NULL AND
      applies_to_next_steps IS NOT NULL
    )
  );
