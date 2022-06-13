import { threatLevelGrades } from 'constants/systemProfile';
import {
  GetSystemProfile,
  /* eslint-disable camelcase */
  GetSystemProfile_cedarAuthorityToOperate,
  GetSystemProfile_cedarSystemDetails_cedarSystem,
  GetSystemProfile_cedarSystemDetails_deployments,
  GetSystemProfile_cedarSystemDetails_deployments_dataCenter,
  GetSystemProfile_cedarSystemDetails_urls
  /* eslint-enable camelcase */
} from 'queries/types/GetSystemProfile';
import {
  tempATOProp,
  tempBudgetProp,
  tempProductsProp,
  tempSubSystemProp,
  tempSystemDataProp
} from 'views/Sandbox/mockSystemData';

// ATO

export type AtoStatus =
  | 'Active'
  | 'Due Soon'
  | 'In Progress'
  | 'Expired'
  | 'No ATO';

export type ThreatLevel = typeof threatLevelGrades[number];

export type SecurityFindings = Partial<Record<ThreatLevel | 'total', number>>;

// Development Tags

export type DevelopmentTag = 'Agile Methodology';
// | 'AI Technologies'
// | 'Healthcare Quality'
// | 'Health Insurance Program';

// Urls and Locations

export type UrlLocationTag = 'API endpoint' | 'Versioned code respository';

// eslint-disable-next-line camelcase
export interface UrlLocation extends GetSystemProfile_cedarSystemDetails_urls {
  // eslint-disable-next-line camelcase
  environment: GetSystemProfile_cedarSystemDetails_deployments['deploymentType'];
  tags: UrlLocationTag[];
  // eslint-disable-next-line camelcase
  provider?: GetSystemProfile_cedarSystemDetails_deployments_dataCenter['name'];
}

export interface SystemProfileData extends GetSystemProfile {
  // The original id type can be null, in which case this object is not created
  id: string;
  // eslint-disable-next-line camelcase
  ato?: GetSystemProfile_cedarAuthorityToOperate;
  atoStatus?: AtoStatus;
  locations?: UrlLocation[];
  numberOfContractorFte?: number;
  numberOfFederalFte?: number;
  numberOfFte?: number;
  // eslint-disable-next-line camelcase
  status: GetSystemProfile_cedarSystemDetails_cedarSystem['status'];

  // Remaining mock data stubs
  activities?: tempATOProp[];
  budgets?: tempBudgetProp[];
  developmentTags?: DevelopmentTag[];
  products?: tempProductsProp[];
  subSystems?: tempSubSystemProp[];
  systemData?: tempSystemDataProp[];
}

export interface SystemProfileSubviewProps {
  system: SystemProfileData;
}
