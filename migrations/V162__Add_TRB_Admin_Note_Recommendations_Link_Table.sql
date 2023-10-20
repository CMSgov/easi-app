CREATE TABLE trb_admin_notes_trb_admin_note_recommendations_links (
    id UUID PRIMARY KEY NOT NULL,
    trb_admin_note_id uuid NOT NULL REFERENCES trb_admin_notes(id),
    trb_advice_letter_recommendation_id uuid NOT NULL REFERENCES trb_advice_letter_recommendations(id),
    
    created_by TEXT NOT NULL CHECK (created_by ~ '^[A-Z0-9]{4}$'),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modified_by TEXT CHECK (modified_by ~ '^[A-Z0-9]{4}$'),
    modified_at TIMESTAMP WITH TIME ZONE,

    UNIQUE(trb_admin_note_id, trb_advice_letter_recommendation_id)
);
