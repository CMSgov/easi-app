CREATE TYPE system_intake_step AS ENUM (
  'INITIAL_REQUEST_FORM',
  'DRAFT_BUSINESS_CASE',
  'GRT_MEETING',
  'GRB_MEETING',
  'FINAL_BUSINESS_CASE',
  'DECISION_AND_NEXT_STEPS'
);

CREATE TYPE system_intake_state AS ENUM (
  'OPEN',
  'CLOSED'
);

ALTER TABLE system_intakes
  ADD COLUMN step system_intake_step NOT NULL DEFAULT 'INITIAL_REQUEST_FORM',
  ADD COLUMN state system_intake_state NOT NULL DEFAULT 'OPEN';
