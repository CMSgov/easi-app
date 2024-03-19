export type Flags = {
  sandbox: boolean;
  downgradeGovTeam: boolean;
  downgrade508User: boolean;
  downgrade508Tester: boolean;
  downgradeTrbAdmin: boolean;
  itGovV2Enabled: boolean;
  systemProfile: boolean;
  systemProfileHiddenFields: boolean;
  cedar508Requests: boolean;
  technicalAssistance: boolean;
  hide508Workflow: boolean;
  portfolioUpdateReport: boolean;
  itgovLinkRequestsRequester: boolean;
  itgovLinkRequestsAdmin: boolean;
  trbLinkRequestsRequester: boolean;
  trbLinkRequestsAdmin: boolean;
  systemWorkspace: boolean;
};

export type FlagsState = {
  flags: Flags;
  isLoaded: boolean;
  error?: string;
};
