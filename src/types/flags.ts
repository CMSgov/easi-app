export type Flags = {
  atoProcessList: boolean;
  downgradeGovTeam: boolean;
  downgradeTrbAdmin: boolean;
  systemIntakeRelatedRequests: boolean;
  systemProfileHiddenFields: boolean;
  systemWorkspace: boolean;
  systemWorkspaceRequestsCard: boolean;
  grbReviewTab: boolean;
  showAtoColumn: boolean;
};

export type FlagsState = {
  flags: Flags;
  isLoaded: boolean;
  error?: string;
};
