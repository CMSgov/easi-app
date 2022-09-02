CREATE TYPE TRB_REQUEST_TYPE AS ENUM (
    'NEED_HELP',
    'BRAINSTORM',
    'FOLLOWUP',
    'FORMAL_REVIEW'
);

CREATE TYPE TRB_REQUEST_STATUS AS ENUM (
    'OPEN',
    'CLOSED'
);

CREATE TABLE trb_request (
    id UUID PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    archived BOOL NOT NULL DEFAULT FALSE,
    type TRB_REQUEST_TYPE NOT NULL, 
    status TRB_REQUEST_STATUS NOT NULL DEFAULT 'OPEN',
    created_by TEXT NOT NULL CHECK (created_by ~ '^[A-Z0-9]{4}$'),
    created_dts TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modified_by TEXT CHECK (modified_by ~ '^[A-Z0-9]{4}$'),
    modified_dts TIMESTAMP WITH TIME ZONE
);
