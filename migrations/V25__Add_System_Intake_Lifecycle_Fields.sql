ALTER TABLE system_intake ADD COLUMN lcid text;
ALTER TABLE system_intake
  ADD CONSTRAINT lcid_check CHECK (lcid ~ '^[0-9]{6}$');
CREATE INDEX lcid_idx ON system_intake (lcid) WHERE LENGTH(lcid)>0;

ALTER TABLE system_intake ADD COLUMN expires_at timestamp with time zone;
ALTER TABLE system_intake ADD COLUMN lifecycle_scope text;
ALTER TABLE system_intake ADD COLUMN next_steps text;
