INSERT INTO system_intake_contract_numbers (
		id,
		intake_id,
		contract_number,
		created_by,
		modified_by
	)
	VALUES (
		:id,
		:intake_id,
		:contract_number,
		:created_by,
		:modified_by
	) ON CONFLICT DO NOTHING
