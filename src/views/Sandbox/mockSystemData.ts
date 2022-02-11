import { GetCedarSystems_cedarSystems as CedarSystemProps } from 'queries/types/GetCedarSystems';

// Temporary extension of CEDAR types under BE integration complete
export type tempLocationProp = {
  id: string;
  environment:
    | 'Production environment'
    | 'Development environment'
    | 'Code Repository';
  url?: string;
  tags: string[];
  location: string;
  cloudProvider: string;
  firewall: boolean;
};

// Temporary extension of CEDAR types under BE integration complete
export type tempBudgetProp = {
  id: string;
  title: string;
  comment: string;
};

// Temporary extension of CEDAR types under BE integration complete
export type tempATOProp = {
  id: string;
  title: string;
  status: 'Completed' | 'In progress' | 'Not started';
  activityOwner: string;
  dueDate: string;
};

// Temporary extension of CEDAR types under BE integration complete
export interface tempCedarSystemProps extends CedarSystemProps {
  locations?: tempLocationProp[];
  developmentTags?: string[];
  budgets?: tempBudgetProp[];
  activities?: tempATOProp[];
  atoStatus?: string;
}

export const activities: tempATOProp[] = [
  {
    id: '1',
    title: 'ATO Activity 1',
    status: 'Completed',
    activityOwner: 'Jane Doe',
    dueDate: '11/2/2021'
  },
  {
    id: '2',
    title: 'ATO Activity 2',
    status: 'Completed',
    activityOwner: 'Jane Doe',
    dueDate: '11/23/2021'
  },
  {
    id: '3',
    title: 'ATO Activity 3',
    status: 'In progress',
    activityOwner: 'Jane Doe',
    dueDate: '12/2/2021'
  },
  {
    id: '4',
    title: 'ATO Activity 4',
    status: 'Not started',
    activityOwner: 'Jane Doe',
    dueDate: '2/2/2022'
  },
  {
    id: '5',
    title: 'ATO Activity 5',
    status: 'Not started',
    activityOwner: 'Jane Doe',
    dueDate: '2/22/2022'
  }
];

export const budgetsInfo: tempBudgetProp[] = [
  {
    id: '1234567',
    title: 'HAM Project funding',
    comment: 'Most of this funding is directly and only for this system (80%)'
  }
];

export const developmentTags: string[] = [
  'Agile Methodology',
  'AI Technologies'
];

export const locationsInfo: tempLocationProp[] = [
  {
    id: '1',
    environment: 'Production environment',
    url: 'ham.cms.gov',
    tags: ['API endpoint', 'URL endpoint'],
    location: 'AWS East',
    cloudProvider: 'Amazon Web Services',
    firewall: true
  },
  {
    id: '2',
    environment: 'Development environment',
    url: 'dev.ham.cms.gov',
    tags: [],
    location: 'AWS East',
    cloudProvider: 'Amazon Web Services',
    firewall: true
  },
  {
    id: '3',
    environment: 'Code Repository',
    url: 'github.com/ham',
    tags: ['Versioned code repository'],
    location: 'AWS East',
    cloudProvider: 'Amazon Web Services',
    firewall: true
  }
];

export const mockSystemInfo: CedarSystemProps[] = [
  {
    __typename: 'CedarSystem',
    id: '1',
    acronym: 'HAM',
    status: 'Approved',
    name: 'Happiness Achievement Module',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta. Faucibus quam egestas
    feugiat laoreet quis. Sapien, sagittis, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta.`,
    businessOwnerOrg: 'CMMI',
    businessOwnerOrgComp: 'Good to go!',
    systemMaintainerOrg: 'success',
    systemMaintainerOrgComp: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta. Faucibus quam egestas
    feugiat laoreet quis. Sapien, sagittis, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta.`
  },
  {
    __typename: 'CedarSystem',
    id: '326-1-0',
    acronym: 'ASD',
    status: null,
    name: 'Systems',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta. Faucibus quam egestas
    feugiat laoreet quis. Sapien, sagittis, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta.`,
    businessOwnerOrg: 'CMMI',
    businessOwnerOrgComp: 'Good to go!',
    systemMaintainerOrg: 'success',
    systemMaintainerOrgComp: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta. Faucibus quam egestas
    feugiat laoreet quis. Sapien, sagittis, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta.`
  },
  {
    __typename: 'CedarSystem',
    id: '3',
    acronym: 'ZXC',
    status: 'Draft',
    name: 'Government',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta. Faucibus quam egestas
    feugiat laoreet quis. Sapien, sagittis, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta.`,
    businessOwnerOrg: 'CMMI',
    businessOwnerOrgComp: 'Good to go!',
    systemMaintainerOrg: 'success',
    systemMaintainerOrgComp: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta. Faucibus quam egestas
    feugiat laoreet quis. Sapien, sagittis, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta.`
  },
  {
    __typename: 'CedarSystem',
    id: '326-9-0',
    acronym: 'BBC',
    status: 'Approved',
    name: 'Medicare Beneficiary Contact Center',
    description: `The Beneficiary Contact Center (BCC) provides an unbiased 
    central point of contact for Medicare Beneficiaries and their caregivers with 
    scripted responses on coverage information, health care choices, claims, and 
    preventive services.The Balanced Budget Act of 1997 mandated a toll free 
    line for beneficiaries. CMS created a 1-800-Medicare`,
    businessOwnerOrg: 'Division of Call Center Systems',
    businessOwnerOrgComp: 'Geraldine Hobbs',
    systemMaintainerOrg: 'Jan 6 2022',
    systemMaintainerOrgComp: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta. Faucibus quam egestas
    feugiat laoreet quis. Sapien, sagittis, consectetur adipiscing elit.
    Sollicitudin donec aliquam dui sed odio porta.`
  }
];

export interface CedarSystemBookmark {
  euaUserId: string;
  cedarSystemId: string;
}

export const mockBookmarkInfo: CedarSystemBookmark[] = [
  {
    euaUserId: 'A',
    cedarSystemId: '326-7-0'
  },
  {
    euaUserId: 'A',
    cedarSystemId: '326-74-0'
  },
  {
    euaUserId: 'A',
    cedarSystemId: '326-99-0'
  }
];
