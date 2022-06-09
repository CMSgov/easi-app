import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardBody,
  CardFooter,
  CardGroup,
  CardHeader,
  Grid,
  IconBookmark,
  IconCheckCircleOutline,
  IconFileDownload
} from '@trussworks/react-uswds';
import classnames from 'classnames';
import { useFlags } from 'launchdarkly-react-client-sdk';

import UswdsReactLink from 'components/LinkWrapper';
import {
  DescriptionDefinition,
  DescriptionTerm
} from 'components/shared/DescriptionGroup';
import Divider from 'components/shared/Divider';
import SectionWrapper from 'components/shared/SectionWrapper';
import Tag from 'components/shared/Tag';
import useCheckResponsiveScreen from 'hooks/checkMobile';
import { showAtoExpirationDate } from 'views/SystemProfile';
import RequestCardTestScore from 'views/SystemProfile/RequestCardTestScore';
import RequestStatusTag from 'views/SystemProfile/RequestStatusTag';

import { showVal, SystemProfileSubComponentProps } from '..';

// import { GetCedarSystems_cedarSystems as CedarSystemProps } from 'queries/types/GetCedarSystems';

const SystemHome = ({ system }: SystemProfileSubComponentProps) => {
  const { t } = useTranslation('systemProfile');
  const isMobile = useCheckResponsiveScreen('tablet');
  const [toggleTags, setToggleTags] = useState(false);
  const [toggleSystemData, setToggleSystemData] = useState(false);
  const [toggleSubSystems, setToggleSubSystems] = useState(false);
  const flags = useFlags();

  const { ato, locations } = system;

  const urlLocationCard = useMemo(() => {
    const productionLocation = locations?.find(
      location => location.environment === 'Production'
    );
    if (!productionLocation) return undefined;
    return {
      ...productionLocation,
      count: locations?.length
    };
  }, [locations]);

  return (
    <SectionWrapper
      borderBottom={isMobile}
      className="padding-bottom-4 margin-bottom-4"
    >
      <CardGroup className="margin-0">
        {urlLocationCard && (
          <Card className="grid-col-12">
            <CardHeader className="easi-header__basic padding-2 padding-bottom-0 text-top">
              <Grid row>
                <Grid desktop={{ col: 12 }} className="padding-0">
                  <dt>
                    {urlLocationCard.environment}{' '}
                    {t('singleSystem.systemDetails.environment')}
                  </dt>
                </Grid>
              </Grid>
            </CardHeader>
            <CardBody className="padding-x-2 padding-y-0">
              <Grid row>
                <Grid desktop={{ col: 12 }} className="padding-0">
                  <h3 className="link-header margin-top-0 margin-bottom-2">
                    <UswdsReactLink
                      className="link-header"
                      variant="external"
                      to={urlLocationCard.address!}
                    >
                      {urlLocationCard.address}
                    </UswdsReactLink>
                  </h3>
                  <div className="margin-bottom-2">
                    <UswdsReactLink
                      className="link-header"
                      to={`/systems/${system.id}/details`}
                    >
                      {t('singleSystem.systemDetails.view')}{' '}
                      {urlLocationCard.count}{' '}
                      {t('singleSystem.systemDetails.moreURLs')}
                      <span aria-hidden>&nbsp;</span>
                      <span aria-hidden>&rarr; </span>
                    </UswdsReactLink>
                  </div>
                </Grid>
              </Grid>
              <Divider />
            </CardBody>
            <CardFooter className="padding-0">
              <Grid row>
                <Grid className="padding-2">
                  <DescriptionTerm
                    term={t('singleSystem.systemDetails.provider')}
                  />
                  <DescriptionDefinition
                    className="line-height-body-3"
                    definition={urlLocationCard.provider}
                  />
                </Grid>
              </Grid>
            </CardFooter>
          </Card>
        )}
        <Card className="grid-col-12">
          <CardHeader className="easi-header__basic padding-2 padding-bottom-0 text-top">
            <dt>{t('singleSystem.ato.atoExpiration')}</dt>
            <div className="text-right margin-bottom-0">
              <Tag
                className={classnames('grid-col-12', {
                  'bg-success-dark': system.atoStatus === 'Active',
                  'bg-warning':
                    system.atoStatus === 'Due Soon' ||
                    system.atoStatus === 'In Progress',
                  'bg-error-dark': system.atoStatus === 'Expired',
                  'bg-base-lighter': system.atoStatus === 'No ATO',
                  'text-white':
                    system.atoStatus === 'Active' ||
                    system.atoStatus === 'Expired'
                })}
              >
                {system.atoStatus}
              </Tag>
            </div>
          </CardHeader>

          <CardBody className="padding-x-2 padding-y-0">
            <Grid row>
              <Grid desktop={{ col: 12 }} className="padding-0">
                <h3 className="link-header margin-top-0 margin-bottom-2">
                  {showAtoExpirationDate(ato)}
                </h3>
                <div className="margin-bottom-2">
                  <UswdsReactLink
                    className="link-header"
                    to={`/systems/${system.id}/ato`}
                  >
                    {/* TODO: Get from CEDAR */}
                    {t('singleSystem.ato.viewATOInfo')}
                    <span aria-hidden>&nbsp;</span>
                    <span aria-hidden>&rarr; </span>
                  </UswdsReactLink>
                </div>
              </Grid>
            </Grid>
            <Divider />
          </CardBody>
          <CardFooter className="padding-0">
            <Grid row>
              <Grid desktop={{ col: 6 }} className="padding-2">
                <DescriptionTerm term={t('singleSystem.ato.totalPOAM')} />
                <DescriptionDefinition
                  className="line-height-body-3"
                  definition={showVal(ato?.countOfOpenPoams)}
                />
              </Grid>
            </Grid>
          </CardFooter>
        </Card>
        {flags.systemProfileHiddenFields && (
          <Card className="grid-col-12">
            <CardHeader className="easi-header__basic padding-2 padding-bottom-0 text-top">
              <dt>{t('singleSystem.section508.section508RequestName')}</dt>
              <div className="text-right margin-bottom-0">
                <RequestStatusTag status="Open" className="margin-right-0" />
              </div>
            </CardHeader>
            <CardBody className="padding-x-2 padding-y-0">
              <Grid row>
                <Grid desktop={{ col: 12 }} className="padding-0">
                  <h3 className="link-header margin-top-0 margin-bottom-2">
                    My Test for HAM
                  </h3>
                  <div className="margin-bottom-2">
                    <UswdsReactLink
                      className="link-header"
                      to={`/systems/${system.id}/section-508`}
                    >
                      {t('singleSystem.section508.viewMoreRequestInformation')}
                      <span aria-hidden>&nbsp;</span>
                      <span aria-hidden>&rarr; </span>
                    </UswdsReactLink>
                  </div>
                </Grid>
              </Grid>
              <Divider />
            </CardBody>
            <CardFooter className="padding-0">
              <Grid row>
                <Grid className="padding-2">
                  <div className="margin-bottom-1">
                    <strong>{t('singleSystem.section508.latestTest')}</strong>
                  </div>
                  <RequestCardTestScore scorePct={98} date="mm/dd/yyyy" />
                </Grid>
              </Grid>
            </CardFooter>
          </Card>
        )}
        {flags.systemProfileHiddenFields && (
          <Card className="grid-col-12">
            <CardHeader className="easi-header__basic padding-2 padding-bottom-0 text-top">
              <Grid row>
                <Grid desktop={{ col: 12 }} className="padding-0">
                  <dt>{t('singleSystem.systemData.apiStatus')}</dt>
                </Grid>
              </Grid>
            </CardHeader>

            <CardBody className="padding-x-2 padding-y-0">
              <Grid row>
                <Grid desktop={{ col: 12 }} className="padding-0">
                  <h3 className="link-header margin-top-0 margin-bottom-2">
                    API developed and launched {/* TODO: Get from CEDAR */}
                  </h3>
                  <div className="margin-bottom-2">
                    <UswdsReactLink
                      className="link-header"
                      to={`/systems/${system.id}/system-data`}
                    >
                      {/* TODO: Get from CEDAR */}
                      {t('singleSystem.systemData.viewAPIInfo')}
                      <span aria-hidden>&nbsp;</span>
                      <span aria-hidden>&rarr; </span>
                    </UswdsReactLink>
                  </div>
                </Grid>
              </Grid>
              <Divider />
            </CardBody>
            <CardFooter className="padding-0">
              <Grid row>
                <Grid desktop={{ col: 12 }} className="padding-2">
                  <DescriptionTerm
                    term={t('singleSystem.systemData.dataCategories')}
                  />
                  {system?.developmentTags?.map(
                    (tag: string, index: number) =>
                      (index < 2 || toggleTags) && (
                        <Tag
                          key={tag}
                          className="system-profile__tag text-base-darker bg-base-lighter margin-bottom-1"
                        >
                          {tag}{' '}
                          {/* TODO: Map defined CEDAR variable once availabe */}
                        </Tag>
                      )
                  )}
                  {system?.developmentTags &&
                    system.developmentTags.length > 2 && (
                      <Tag
                        key="expand-tags"
                        className="system-profile__tag bg-base-lighter margin-bottom-1 pointer bg-primary text-white"
                        onClick={() => setToggleTags(!toggleTags)}
                      >
                        {toggleTags ? '-' : '+'}
                        {system.developmentTags.length - 2}
                      </Tag>
                    )}
                </Grid>
              </Grid>
            </CardFooter>
          </Card>
        )}
        {/* 508 request name todo? */}

        {flags.systemProfileHiddenFields && (
          <>
            <Card className="grid-col-12">
              <CardBody className="padding-2">
                <Grid row>
                  <Grid desktop={{ col: 12 }} className="padding-0">
                    <dt>
                      {t('singleSystem.fundingAndBudget.systemFiscalYear')}
                    </dt>
                    <h3 className="link-header margin-top-0 margin-bottom-2">
                      $4,500,000 {/* TODO: Get from CEDAR */}
                    </h3>
                    <UswdsReactLink
                      className="link-header"
                      to={`/systems/${system.id}/funding-and-budget`}
                    >
                      {/* TODO: Get from CEDAR */}
                      {t('singleSystem.fundingAndBudget.viewMoreFunding')}
                      <span aria-hidden>&nbsp;</span>
                      <span aria-hidden>&rarr; </span>
                    </UswdsReactLink>
                  </Grid>
                </Grid>
              </CardBody>
            </Card>
            <Card className="grid-col-12">
              <CardHeader className="easi-header__basic padding-2 padding-bottom-0 text-top margin-bottom-2">
                <Grid row>
                  <Grid desktop={{ col: 12 }} className="padding-0">
                    <dt>{t('singleSystem.systemData.dataExchanges')}</dt>
                  </Grid>
                </Grid>
              </CardHeader>

              <CardBody className="padding-x-2 padding-y-0">
                <Grid row>
                  <Grid desktop={{ col: 12 }} className="padding-0">
                    {system?.systemData?.map(
                      (data, index) =>
                        (index < 2 || toggleSystemData) && (
                          <div
                            className="margin-bottom-1 text-bold"
                            key={data.id}
                          >
                            <IconCheckCircleOutline className="text-success" />{' '}
                            <span className="text-tbottom line-height-body-3">
                              {data.title}{' '}
                            </span>
                            <IconFileDownload className="text-base" />
                          </div>
                        )
                    )}

                    {system?.systemData && system.systemData.length > 2 && (
                      <div
                        role="button"
                        tabIndex={0}
                        className="text-underline link-header text-primary pointer"
                        onClick={() => setToggleSystemData(!toggleSystemData)}
                        onKeyDown={() => setToggleSystemData(!toggleSystemData)}
                      >
                        {toggleSystemData ? '- ' : '+ '}
                        {system.systemData.length - 2}{' '}
                        {t('singleSystem.systemData.more')}
                      </div>
                    )}
                  </Grid>
                </Grid>
                <Divider className="margin-top-2" />
              </CardBody>
              <CardFooter className="padding-0">
                <Grid row>
                  <Grid desktop={{ col: 12 }} className="padding-2">
                    <UswdsReactLink
                      className="link-header"
                      to={`/systems/${system.id}/system-data`}
                    >
                      {/* TODO: Get from CEDAR */}
                      {t('singleSystem.systemData.viewDataExchange')}
                      <span aria-hidden>&nbsp;</span>
                      <span aria-hidden>&rarr; </span>
                    </UswdsReactLink>
                  </Grid>
                </Grid>
              </CardFooter>
            </Card>
            <Card className="grid-col-12">
              <CardHeader className="easi-header__basic padding-2 padding-bottom-0 text-top margin-bottom-2">
                <Grid row>
                  <Grid desktop={{ col: 12 }} className="padding-0">
                    <dt>{t('singleSystem.subSystems.header')}</dt>
                  </Grid>
                </Grid>
              </CardHeader>

              <CardBody className="padding-x-2 padding-y-0">
                <Grid row>
                  <Grid desktop={{ col: 12 }} className="padding-0">
                    {system?.subSystems?.map(
                      (subSystem, index) =>
                        (index < 2 || toggleSubSystems) && (
                          <div className="margin-bottom-1" key={subSystem.id}>
                            <IconBookmark className="text-base-lighter margin-right-1" />
                            <UswdsReactLink
                              className="link-header margin-bottom-1 text-bold"
                              to={`/systems/${system.id}/sub-systems`}
                              key={subSystem.id}
                            >
                              <span className="text-tbottom line-height-body-3">
                                {subSystem.name}{' '}
                              </span>
                            </UswdsReactLink>
                          </div>
                        )
                    )}

                    {system?.subSystems && system.subSystems.length > 2 && (
                      <div
                        role="button"
                        tabIndex={0}
                        className="text-underline link-header text-primary pointer margin-top-2"
                        onClick={() => setToggleSubSystems(!toggleSubSystems)}
                        onKeyDown={() => setToggleSubSystems(!toggleSubSystems)}
                      >
                        {toggleSubSystems ? '- ' : '+ '}
                        {system.subSystems.length - 2}{' '}
                        {t('singleSystem.systemData.more')}
                      </div>
                    )}
                  </Grid>
                </Grid>
                <Divider className="margin-top-2" />
              </CardBody>
              <CardFooter className="padding-0">
                <Grid row>
                  <Grid desktop={{ col: 12 }} className="padding-2">
                    <UswdsReactLink
                      className="link-header"
                      to={`/systems/${system.id}/sub-systems`}
                    >
                      {/* TODO: Get from CEDAR */}
                      {t('singleSystem.subSystems.viewInfo')}
                      <span aria-hidden>&nbsp;</span>
                      <span aria-hidden>&rarr; </span>
                    </UswdsReactLink>
                  </Grid>
                </Grid>
              </CardFooter>
            </Card>
          </>
        )}
        <Card className="grid-col-12">
          <CardHeader className="easi-header__basic padding-2 padding-bottom-0 text-top">
            <Grid row>
              <Grid desktop={{ col: 12 }} className="padding-0">
                <dt>{t('singleSystem.teamAndContract.totalEmployees')}</dt>
              </Grid>
            </Grid>
          </CardHeader>

          <CardBody className="padding-x-2 padding-y-0">
            <Grid row>
              <Grid desktop={{ col: 12 }} className="padding-0">
                <h3 className="link-header margin-top-0 margin-bottom-2">
                  {system.numberOfFte}
                </h3>
                <UswdsReactLink
                  className="link-header"
                  to={`/systems/${system.id}/team-and-contract`}
                >
                  {t('singleSystem.teamAndContract.viewMoreInfo')}
                  <span aria-hidden>&nbsp;</span>
                  <span aria-hidden>&rarr; </span>
                </UswdsReactLink>
              </Grid>
            </Grid>
            <Divider className="margin-top-2" />
          </CardBody>
          <CardFooter className="padding-0">
            <Grid row>
              <Grid desktop={{ col: 6 }} className="padding-2">
                <DescriptionTerm
                  term={t('singleSystem.teamAndContract.federalFTE')}
                />
                <DescriptionDefinition
                  className="line-height-body-3"
                  definition={system.numberOfFederalFte}
                />
              </Grid>
              <Grid desktop={{ col: 6 }} className="padding-2">
                <DescriptionTerm
                  term={t('singleSystem.teamAndContract.contractorFTE')}
                />
                <DescriptionDefinition
                  className="line-height-body-3"
                  definition={system.numberOfContractorFte}
                />
              </Grid>
            </Grid>
          </CardFooter>
        </Card>
      </CardGroup>
    </SectionWrapper>
  );
};

export default SystemHome;
