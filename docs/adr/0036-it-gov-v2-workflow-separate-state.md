# Separate persisted state for IT Gov v2 from statuses exposed in the GraphQL API

**User Story:** [EASI-2535](https://jiraent.cms.gov/browse/EASI-2535)

When working on the IT Gov v2 workflow, we found that intake requests have several different representations of their status that need to be represented in the UI. These statuses overlap, but can't all be represented by a single enum. Examples:
* The overall status of the request, as viewed by the requester. ([Example in Figma](https://www.figma.com/file/ChzAP34A2DVvQUNQwD7lCt/IT-Governance-Next?type=design&node-id=475-111693&mode=design&t=wzZqAvTP42NxOzkl-0))
* The overall status of the request, as viewed by the admins. ([Example in Figma](https://www.figma.com/file/ChzAP34A2DVvQUNQwD7lCt/IT-Governance-Next?type=design&node-id=475-111865&mode=design&t=wzZqAvTP42NxOzkl-0) - note that this is a _different_ status than what the requester sees in the link above, even though the intake is at the same point in the workflow)
* The statuses of the different tasks on the task list. ([Example in Figma](https://www.figma.com/file/ChzAP34A2DVvQUNQwD7lCt/IT-Governance-Next?type=design&node-id=477-112982&mode=design&t=wzZqAvTP42NxOzkl-0))

What the UI displays, including which task in the task list has a call to action for the requester, is based on where the intake is in the workflow and what work's already been done.

The code for the current workflow primarily stores the status of a system intake in a single field, [`SystemIntake`'s Status field](https://github.com/CMSgov/easi-app/blob/ecc33b8bd44a4c4ae26f3ef39788df1c8c42f7dd/pkg/models/system_intake.go#L107). Our frontend code has to use that along with other fields and some calculations to reconstruct the full status of an intake; see [the frontend task list code for calculating what to display for meeting dates](https://github.com/CMSgov/easi-app/blob/ecc33b8bd44a4c4ae26f3ef39788df1c8c42f7dd/src/views/GovernanceTaskListV1/index.tsx#L127) as an example. Representing an intake's full status will get more complicated with the more flexible IT Gov v2 workflow, especially since the new workflow allows skipping over steps on the task list. The backend engineers would like to have a simpler, cleaner representation of an intake's status, as well as simplifying the calculation required by the frontend.

## Considered Alternatives

* Continue explicitly storing status like we do now; handling skipped-over steps would probably involve querying the `actions` table for the history of actions taken on the intake.
* Add several new fields to `SystemIntake` that form a minimal but complete representation of an intake's current state; calculate the necessary statuses for the frontend to use based on the added fields.

## Decision Outcome

* Chosen Alternative: We decided to add additional state fields and calculate the different statuses for the frontend.

We've added the `State`, `Step`, `RequestFormState`, `DraftBusinessCaseState`, `FinalBusinessCaseState`, and `DecisionState` fields to `SystemIntake`. This allows us to fully capture an intake's state without redundancy, including the state of previous tasks. Our [GraphQL schema](https://github.com/CMSgov/easi-app/blob/ecc33b8bd44a4c4ae26f3ef39788df1c8c42f7dd/pkg/graph/schema.graphql#L977) for `SystemIntake` has the `statusRequester` and `statusAdmin` fields for the overall statuses displayed in tables and in the header of the admin view; the `itGovTaskStatuses` field contains the status of each individual task. These statuses are calculated in functions called from the resolvers, based on the state fields of the intake; these functions can easily be thoroughly unit tested to make sure they return the correct values. The frontend just needs to translate the GraphQL enums into the appropriate text, without needing to do any calculations.
