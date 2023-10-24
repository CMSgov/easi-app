
/*
1. Make a function that returns a table, perhaps make it take an array of UUIDs and return a row for each intake?

Inside
1. Deterministically calculate the step, and the state of each  part
	a. Should the function call separate functions to calculate state and step for each piece? Or should it just be one giant function?
2. This should not affect data that has been run through the v2 workflow, or alternatively the data should be the same for all intakes and checking isn't required
    a. note, some states are not easily inferred, such as edits requested.
3. If desired, 
3. The table that is returned can be updated based on the response


*/

SELECT si.status,
si.request_form_state,
CASE
	WHEN si.submitted_at IS NULL
		THEN 
		CASE 
			WHEN si.project_name IS NOT NULL
				THEN 'IN_PROGRESS' -- Project Name indicates the form has started to be filled out
			ELSE'NOT_STARTED' -- Default to not started if not submitted and there is no name (this is simplified logic)
		END
	ELSE 'SUBMITTED' --Submitted date means it was submitted (can't handle edits requested)
		

END
 as request_form_state_update,
si.draft_business_case_state,
bc.id as bizCaseID,
CASE
	WHEN bc.id IS NOT null
	THEN  'IN_PROGRESS'
	ELSE	'NOT_STARTED'
END
as draft_business_case_state_update,
si.final_business_case_state,
si.decision_state,
si.state,
si.step,
CASE -- TODO
WHEN si.step = 'INITIAL_REQUEST_FORM' AND si.status NOT IN ('INTAKE_DRAFT', 'INTAKE_SUBMITTED') -- These are fine and don't need to be updated.
THEN
	CASE
		WHEN si.status IN ('LCID_ISSUED','NOT_IT_REQUEST') --This should be expanded
			THEN 'DECISION_ISSUED'
		WHEN si.status in ('NEED_BIZ_CASE','BIZ_CASE_DRAFT')
			THEN 'DRAFT_BUSINESS_CASE'
		WHEN si.status in ('READY_FOR_GRB')
			THEN 'GRB_MEETING'
		WHEN si.status in ('READY_FOR_GRT')
			THEN 'GRT_MEETING'
			--- TODO, handle other cases as well
	END
ELSE 'NO_UPDATE' --TODO update to just be existing step
	
	
END AS step_update,
* FROM system_intakes as si
LEFT JOIN business_cases as bc on bc.system_intake = si.id


/*
Remaining considerations
1. If returning a table, these string values should be cast as the appropriate enum type. MINT has examples of functions doing this with checking if an operational need is needed
2. This function can be run once now on all tables, and run again when IT Gov V2 goes live
*/
