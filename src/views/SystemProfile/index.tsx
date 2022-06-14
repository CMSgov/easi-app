import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, NavLink, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  Breadcrumb,
  BreadcrumbBar,
  BreadcrumbLink,
  Button,
  Grid,
  GridContainer,
  IconBookmark,
  IconExpandMore,
  Link,
  SideNav,
  SummaryBox
} from '@trussworks/react-uswds';
import classnames from 'classnames';
import { useFlags } from 'launchdarkly-react-client-sdk';
import { startCase } from 'lodash';
import { DateTime } from 'luxon';

import UswdsReactLink from 'components/LinkWrapper';
import MainContent from 'components/MainContent';
import PageHeading from 'components/PageHeading';
import PageLoading from 'components/PageLoading';
import CollapsableLink from 'components/shared/CollapsableLink';
import {
  DescriptionDefinition,
  DescriptionTerm
} from 'components/shared/DescriptionGroup';
import SectionWrapper from 'components/shared/SectionWrapper';
import {
  ATO_STATUS_DUE_SOON_DAYS,
  BUSINESS_OWNER_ROLE_ID
} from 'constants/systemProfile';
import useCheckResponsiveScreen from 'hooks/checkMobile';
import GetSystemProfileQuery from 'queries/GetSystemProfileQuery';
import {
  GetSystemProfile,
  /* eslint-disable camelcase */
  GetSystemProfile_cedarAuthorityToOperate,
  GetSystemProfile_cedarSystemDetails,
  GetSystemProfile_cedarSystemDetails_roles,
  /* eslint-enable camelcase */
  GetSystemProfileVariables
} from 'queries/types/GetSystemProfile';
// eslint-disable-next-line camelcase
import { CedarAssigneeType } from 'types/graphql-global-types';
import {
  AtoStatus,
  DevelopmentTag,
  SystemProfileData,
  UrlLocation,
  UrlLocationTag
} from 'types/systemProfile';
import NotFound from 'views/NotFound';
import {
  activities as mockActivies,
  budgetsInfo as mockBudgets,
  products as mockProducts,
  subSystems as mockSubSystems,
  systemData as mockSystemData
} from 'views/Sandbox/mockSystemData';

// components/index contains all the sideNavItems components, routes, labels and translations
// The sideNavItems object keys are mapped to the url param - 'subinfo'
import sideNavItems from './components/index';
import SystemSubNav from './components/SystemSubNav/index';

import './index.scss';

export function formatDate(v: string) {
  return DateTime.fromISO(v).toLocaleString(DateTime.DATE_FULL);
}

function httpsUrl(url: string): string {
  if (/^https?/.test(url)) {
    return url;
  }
  return `https://${url}`;
}

/**
 * Get the ATO Status from certain date properties and flags.
 */
function getAtoStatus(
  // eslint-disable-next-line camelcase
  cedarAuthorityToOperate?: GetSystemProfile_cedarAuthorityToOperate
): AtoStatus {
  // `ato.dateAuthorizationMemoExpires` will be null if tlcPhase is Initiate|Develop

  // No ato if it doesn't exist
  if (!cedarAuthorityToOperate) return 'No ATO';

  // return 'In Progress'; // tbd

  const { dateAuthorizationMemoExpires } = cedarAuthorityToOperate;

  if (!dateAuthorizationMemoExpires) return 'No ATO';

  const expiry = DateTime.fromISO(dateAuthorizationMemoExpires)
    .toUTC()
    .toString();

  const date = new Date().toISOString();

  if (date >= expiry) return 'Expired';

  const soon = DateTime.fromISO(expiry)
    .minus({ days: ATO_STATUS_DUE_SOON_DAYS })
    .toString();
  if (date >= soon) return 'Due Soon';

  return 'Active';
}

/**
 * Get Development Tags which are derived from various other properties.
 */
export function getDevelopmentTags(
  // eslint-disable-next-line camelcase
  cedarSystemDetails: GetSystemProfile_cedarSystemDetails
): DevelopmentTag[] {
  const tags: DevelopmentTag[] = [];
  if (cedarSystemDetails.systemMaintainerInformation.agileUsed === true) {
    tags.push('Agile Methodology');
  }
  return tags;
}

/**
 * Get a list of UrlLocations found from Cedar system Urls and Deployments.
 * A `UrlLocation` is extended from a Cedar Url with some additional parsing
 * and Deployment assignments.
 */
function getLocations(
  // eslint-disable-next-line camelcase
  cedarSystemDetails: GetSystemProfile_cedarSystemDetails
): UrlLocation[] {
  return cedarSystemDetails.urls.map(url => {
    // Find a deployment from matching its type with the url host env
    const hostenv = url.urlHostingEnv;
    const deployment = cedarSystemDetails.deployments.filter(
      dpl => dpl.deploymentType === hostenv
    );
    // eslint-disable-next-line no-console
    /*
    console.debug(
      'location',
      'hostenv:',
      hostenv,
      'url:',
      url,
      'deployment match:',
      deployment
    );
    */

    // Location tags derived from certain properties
    const tags: UrlLocationTag[] = [];
    if (url.isAPIEndpoint) tags.push('API endpoint');
    if (url.isVersionCodeRepository) tags.push('Versioned code respository');

    const provider: UrlLocation['provider'] = deployment[0]?.dataCenter?.name;
    // eslint-disable-next-line no-console
    // console.debug('provider:', provider);

    // Fix address urls without a protocol
    // and reassign it to the original address property
    const address = url.address && httpsUrl(url.address);

    return {
      ...url,
      address,
      environment: deployment[0]?.deploymentType,
      provider,
      tags
    };
  });
}

/**
 * Get a person's full name from a Cedar Role.
 * Format the name in title case if the full name is in all caps.
 */
export function getPersonFullName(
  // eslint-disable-next-line camelcase
  role: GetSystemProfile_cedarSystemDetails_roles
): string {
  const fullname = `${role.assigneeFirstName} ${role.assigneeLastName}`;
  return fullname === fullname.toUpperCase()
    ? startCase(fullname.toLowerCase())
    : fullname;
}

export function showAtoExpirationDate(
  // eslint-disable-next-line camelcase
  systemProfileAto?: GetSystemProfile_cedarAuthorityToOperate
): React.ReactNode {
  return showVal(
    systemProfileAto?.dateAuthorizationMemoExpires &&
      formatDate(systemProfileAto.dateAuthorizationMemoExpires)
  );
}

/**
 * Show the value if it's not `null`, `undefined`, or `''`,
 * otherwise render `defaultVal`.
 */
export function showVal(
  val: string | number | null | undefined,
  defaultVal: string = 'No information to display',
  classNames?: string
): React.ReactNode {
  if (val === null || val === undefined || val === '') {
    return <span className="text-italic">{defaultVal}</span>;
  }
  return val;
}

const SystemProfile = () => {
  const { t } = useTranslation('systemProfile');
  const isMobile = useCheckResponsiveScreen('tablet');
  const flags = useFlags();

  const { systemId, subinfo, top } = useParams<{
    subinfo: string;
    systemId: string;
    top: string;
  }>();

  // Scroll to top if redirect
  useLayoutEffect(() => {
    if (top) {
      window.scrollTo(0, 0);
    }
  }, [top]);

  const { loading, error, data } = useQuery<
    GetSystemProfile,
    GetSystemProfileVariables
  >(GetSystemProfileQuery, {
    variables: {
      cedarSystemId: systemId
    }
  });

  // Header description expand toggle
  const descriptionRef = React.createRef<HTMLElement>();
  const [
    isDescriptionExpandable,
    setIsDescriptionExpandable
  ] = useState<boolean>(false);
  const [descriptionExpanded, setDescriptionExpanded] = useState<boolean>(
    false
  );

  // Enable the description toggle if it overflows
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const { current: el } = descriptionRef;
    if (!el) return;
    if (el.scrollHeight > el.offsetHeight) {
      setIsDescriptionExpandable(true);
    }
  });

  const fields = useMemo(() => {
    if (!data) return {};

    const { cedarSystemDetails } = data!;

    // Business Owner
    // Select the first found Business Owner
    const businessOwner = cedarSystemDetails?.roles.find(
      role =>
        role.assigneeType === CedarAssigneeType.PERSON &&
        role.roleTypeID === BUSINESS_OWNER_ROLE_ID
    );

    // Point of Contact is the business owner for now
    // Contextualized poc will be determined later
    const pointOfContact = businessOwner;

    return {
      cmsComponent: data!.cedarSystemDetails?.cedarSystem.businessOwnerOrg,
      businessOwner,
      pointOfContact
    };
  }, [data]);

  const { cmsComponent, businessOwner, pointOfContact } = fields;

  /**
   * SystemProfile data is a merge of request data and parsed data
   * required by SystemHome and at least one other subpage.
   * It is passed to all SystemProfile subpage components.
   */
  const systemProfileData: SystemProfileData | undefined = useMemo(() => {
    if (!data) return undefined;

    const { cedarSystemDetails } = data;

    // Data is generally unavailable if `cedarSystemDetails` is empty
    if (!cedarSystemDetails) return undefined;

    const cedarAuthorityToOperate = data.cedarAuthorityToOperate[0];
    const { cedarSystem } = cedarSystemDetails;

    const numberOfContractorFte = parseInt(
      cedarSystemDetails.businessOwnerInformation?.numberOfContractorFte ?? '0',
      10
    );

    const numberOfFederalFte = parseInt(
      cedarSystemDetails.businessOwnerInformation?.numberOfFederalFte ?? '0',
      10
    );

    const numberOfFte = numberOfContractorFte + numberOfFederalFte;

    return {
      ...data,
      id: cedarSystem.id,
      ato: cedarAuthorityToOperate,
      atoStatus: getAtoStatus(cedarAuthorityToOperate),
      developmentTags: getDevelopmentTags(cedarSystemDetails),
      locations: getLocations(cedarSystemDetails),
      numberOfContractorFte,
      numberOfFederalFte,
      numberOfFte,
      status: cedarSystem.status,

      // Remaining mock data stubs
      activities: mockActivies,
      budgets: mockBudgets,
      products: mockProducts,
      subSystems: mockSubSystems,
      systemData: mockSystemData
    };
  }, [data]);

  if (loading) {
    return <PageLoading />;
  }

  if (error || !systemProfileData) {
    return <NotFound />;
  }

  const subComponents = sideNavItems(
    systemProfileData,
    flags.systemProfileHiddenFields
  );

  // Mapping of all sub navigation links
  const subNavigationLinks: React.ReactNode[] = Object.keys(subComponents).map(
    (key: string) => (
      <NavLink
        to={subComponents[key].route}
        key={key}
        activeClassName="usa-current"
        className={classnames({
          'nav-group-border': subComponents[key].groupEnd
        })}
      >
        {t(`navigation.${key}`)}
      </NavLink>
    )
  );

  const subComponent = subComponents[subinfo || 'home'];

  return (
    <MainContent>
      <div id="system-profile">
        <SummaryBox
          heading=""
          className="padding-0 border-0 bg-primary-lighter"
        >
          <div className="padding-top-3 padding-bottom-3 margin-top-neg-1 height-full">
            <Grid className="grid-container">
              <BreadcrumbBar
                variant="wrap"
                className="bg-transparent padding-0"
              >
                <Breadcrumb>
                  <span>&larr; </span>
                  <BreadcrumbLink asCustom={RouterLink} to="/systems">
                    <span>{t('singleSystem.summary.back')}</span>
                  </BreadcrumbLink>
                </Breadcrumb>
              </BreadcrumbBar>

              <PageHeading className="margin-top-2">
                <IconBookmark size={4} className="text-primary" />{' '}
                <span>{data!.cedarSystemDetails!.cedarSystem.name} </span>
                <span className="text-normal font-body-sm">
                  ({data!.cedarSystemDetails!.cedarSystem.acronym})
                </span>
                <div className="text-normal font-body-md">
                  <CollapsableLink
                    className="margin-top-3"
                    eyeIcon
                    startOpen
                    labelPosition="bottom"
                    closeLabel={t('singleSystem.summary.hide')}
                    styleLeftBar={false}
                    id={t('singleSystem.id')}
                    label={t('singleSystem.summary.expand')}
                  >
                    <div
                      className={classnames(
                        'description-truncated',
                        'margin-bottom-2',
                        {
                          expanded: descriptionExpanded
                        }
                      )}
                    >
                      <DescriptionDefinition
                        definition={
                          data!.cedarSystemDetails!.cedarSystem.description
                        }
                        ref={descriptionRef}
                        className="font-body-lg line-height-body-5 text-light"
                      />
                      {isDescriptionExpandable && (
                        <div>
                          <Button
                            unstyled
                            type="button"
                            className="margin-top-1"
                            onClick={() => {
                              setDescriptionExpanded(!descriptionExpanded);
                            }}
                          >
                            {t(
                              descriptionExpanded
                                ? 'singleSystem.description.less'
                                : 'singleSystem.description.more'
                            )}
                            <IconExpandMore className="expand-icon margin-left-05 margin-bottom-2px text-tbottom" />
                          </Button>
                        </div>
                      )}
                    </div>
                    <UswdsReactLink
                      aria-label={t('singleSystem.summary.label')}
                      className="line-height-body-5"
                      to="/" // TODO: Get link from CEDAR?
                      variant="external"
                      target="_blank"
                    >
                      {t('singleSystem.summary.view')}{' '}
                      {data!.cedarSystemDetails!.cedarSystem.name}
                      <span aria-hidden>&nbsp;</span>
                    </UswdsReactLink>
                    <Grid row className="margin-top-3">
                      {cmsComponent && (
                        <Grid desktop={{ col: 6 }} className="margin-bottom-2">
                          <DescriptionDefinition
                            definition={t('singleSystem.summary.subheader1')}
                          />
                          <DescriptionTerm
                            className="font-body-md"
                            term={cmsComponent}
                          />
                        </Grid>
                      )}
                      {businessOwner && (
                        <Grid desktop={{ col: 6 }} className="margin-bottom-2">
                          <DescriptionDefinition
                            definition={t('singleSystem.summary.subheader2')}
                          />
                          <DescriptionTerm
                            className="font-body-md"
                            term={getPersonFullName(businessOwner)}
                          />
                        </Grid>
                      )}
                      {flags.systemProfileHiddenFields && (
                        <>
                          {/* Go live date */}
                          <Grid
                            desktop={{ col: 6 }}
                            className="margin-bottom-2"
                          >
                            <DescriptionDefinition
                              definition={t('singleSystem.summary.subheader3')}
                            />
                            <DescriptionTerm
                              className="font-body-md"
                              term="July 27, 2015"
                            />
                          </Grid>
                          {/* Most recent major change */}
                          <Grid
                            desktop={{ col: 6 }}
                            className="margin-bottom-2"
                          >
                            <DescriptionDefinition
                              definition={t('singleSystem.summary.subheader4')}
                            />
                            <DescriptionTerm
                              className="font-body-md"
                              term="December 4, 2021"
                            />
                          </Grid>
                        </>
                      )}
                    </Grid>
                  </CollapsableLink>
                </div>
              </PageHeading>
            </Grid>
          </div>
        </SummaryBox>

        <SystemSubNav
          subinfo={subinfo}
          system={systemProfileData}
          systemProfileHiddenFields={flags.systemProfileHiddenFields}
        />

        <SectionWrapper className="margin-top-5 margin-bottom-5">
          <GridContainer>
            <Grid row gap>
              {!isMobile && (
                <Grid
                  desktop={{ col: 3 }}
                  className="padding-right-4 sticky-nav"
                >
                  {/* Side navigation for single system */}
                  <SideNav items={subNavigationLinks} />
                </Grid>
              )}

              <Grid desktop={{ col: 9 }}>
                <div id={subComponent.componentId ?? ''}>
                  <GridContainer className="padding-left-0 padding-right-0">
                    <Grid row gap>
                      {/* Central component */}
                      <Grid desktop={{ col: 8 }}>{subComponent.component}</Grid>

                      {/* Contact info sidebar */}
                      <Grid
                        desktop={{ col: 4 }}
                        className={classnames({
                          'sticky-nav': !isMobile
                        })}
                      >
                        {/* Setting a ref here to reference the grid width for the fixed side nav */}
                        {pointOfContact && (
                          <div className="side-divider">
                            <div className="top-divider" />
                            <p className="font-body-xs margin-top-1 margin-bottom-3">
                              {t('singleSystem.pointOfContact')}
                            </p>
                            <h3 className="system-profile__subheader margin-bottom-1">
                              {getPersonFullName(pointOfContact)}
                            </h3>
                            {pointOfContact.roleTypeName && (
                              <DescriptionDefinition
                                definition={pointOfContact.roleTypeName}
                              />
                            )}
                            {pointOfContact.assigneeEmail && (
                              <p>
                                <Link
                                  aria-label={t('singleSystem.sendEmail')}
                                  className="line-height-body-5"
                                  href={pointOfContact.assigneeEmail}
                                  variant="external"
                                  target="_blank"
                                >
                                  {t('singleSystem.sendEmail')}
                                  <span aria-hidden>&nbsp;</span>
                                </Link>
                              </p>
                            )}
                            <p>
                              <UswdsReactLink
                                aria-label={t('singleSystem.moreContact')}
                                className="line-height-body-5"
                                to={`/systems/${systemId}/team-and-contract`}
                                target="_blank"
                              >
                                {t('singleSystem.moreContact')}
                                <span aria-hidden>&nbsp;</span>
                                <span aria-hidden>&rarr; </span>
                              </UswdsReactLink>
                            </p>
                          </div>
                        )}
                      </Grid>
                    </Grid>
                  </GridContainer>
                </div>
              </Grid>
            </Grid>
          </GridContainer>
        </SectionWrapper>
      </div>
    </MainContent>
  );
};

export default SystemProfile;
