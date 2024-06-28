SELECT tr.*, trs.system_id
FROM trb_request tr
       LEFT JOIN trb_request_systems trs ON trs.trb_request_id = tr.id
WHERE
  (trs.system_id, tr.state) = ANY (SELECT UNNEST(CAST(:cedar_system_ids AS TEXT[])), UNNEST(CAST(:states AS TEXT[])));
