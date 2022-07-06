import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  Grid,
  GridContainer,
  IconMailOutline,
  Link
} from '@trussworks/react-uswds';
import { useFlags } from 'launchdarkly-react-client-sdk';

import {
  DescriptionDefinition,
  DescriptionTerm
} from 'components/shared/DescriptionGroup';
import Divider from 'components/shared/Divider';
import SectionWrapper from 'components/shared/SectionWrapper';
import Tag from 'components/shared/Tag';
import { teamSectionKeys } from 'constants/systemProfile';
import {
  RoleTypeId,
  SystemProfileSubviewProps,
  UsernameWithRoles
} from 'types/systemProfile';
import formatNumber from 'utils/formatNumber';
import { mockVendors } from 'views/Sandbox/mockSystemData';
import { getPersonFullName, showVal } from 'views/SystemProfile';

import './index.scss';

/**
 * Get team members in sections of Cedar Role Types:
 * Business Owners, Project Leads, Additional.
 */
export function getTeam(usernamesWithRoles: UsernameWithRoles[]) {
  // Team list in sections
  const businessOwners: UsernameWithRoles[] = [];
  const projectLeads: UsernameWithRoles[] = [];
  const additional: UsernameWithRoles[] = [];

  // Match person roles to sections
  // eslint-disable-next-line no-restricted-syntax
  for (const person of usernamesWithRoles) {
    const { roles } = person;

    // Members in Business Owner and Project Lead roles appear in both sections
    if (
      roles.some(({ roleTypeID }) => roleTypeID === RoleTypeId.BUSINESS_OWNER)
    ) {
      businessOwners.push(person);
    }

    if (
      roles.some(({ roleTypeID }) => roleTypeID === RoleTypeId.PROJECT_LEAD)
    ) {
      projectLeads.push(person);
    }

    // Additional Points of Contact
    // Anyone else not a business owner or project lead appears here
    if (
      roles.every(
        ({ roleTypeID }) =>
          roleTypeID !== RoleTypeId.BUSINESS_OWNER &&
          roleTypeID !== RoleTypeId.PROJECT_LEAD
      )
    ) {
      additional.push(person);
    }
  }

  return {
    businessOwners,
    projectLeads,
    additional
  };
}

const TeamContactCard = ({ user }: { user: UsernameWithRoles }) => {
  const { roles } = user;
  if (roles.length === 0) return null;

  const person = roles[0]; // Get assignee info from the first role

  return (
    <Card key={person.roleID} className="grid-col-12 margin-bottom-2">
      <CardHeader className="padding-2 padding-bottom-0">
        <h3 className="margin-y-0">{getPersonFullName(person)}</h3>
        {person.assigneeEmail !== null && (
          <div>
            <Link
              className="line-height-body-5"
              href={`mailto:${person.assigneeEmail}`}
              target="_blank"
            >
              {person.assigneeEmail}
              <IconMailOutline className="margin-left-05 margin-bottom-2px text-tbottom" />
            </Link>
          </div>
        )}
      </CardHeader>
      <CardBody className="padding-x-2 padding-top-0">
        {roles.map(role => (
          <h5
            key={role.roleTypeID}
            className="margin-y-0 font-sans-2xs text-normal"
          >
            {role.roleTypeName}
          </h5>
        ))}
      </CardBody>
    </Card>
  );
};

const Team = ({ system }: SystemProfileSubviewProps) => {
  const { t } = useTranslation('systemProfile');
  const flags = useFlags();
  const team = useMemo(() => getTeam(system.usernamesWithRoles), [system]);
  return (
    <>
      <SectionWrapper className="padding-bottom-4">
        <h2 className="margin-top-0 margin-bottom-4">
          {t('singleSystem.team.header.team')}
        </h2>
        <GridContainer className="padding-x-0">
          <Grid row>
            <Grid tablet={{ col: true }}>
              <DescriptionTerm
                term={t('singleSystem.team.federalFullTimeEmployees')}
              />
              <DescriptionDefinition
                className="font-body-md line-height-body-3"
                definition={showVal(system.numberOfFederalFte, {
                  format: formatNumber
                })}
              />
            </Grid>
            <Grid tablet={{ col: true }}>
              <DescriptionTerm
                term={t('singleSystem.team.contractorFullTimeEmployees')}
              />
              <DescriptionDefinition
                className="font-body-md line-height-body-3"
                definition={showVal(system.numberOfContractorFte, {
                  format: formatNumber
                })}
              />
            </Grid>
          </Grid>
        </GridContainer>
      </SectionWrapper>
      {flags.systemProfileHiddenFields && (
        <SectionWrapper borderBottom className="padding-bottom-5">
          <h2 className="margin-top-5 margin-top-4">
            {t('singleSystem.team.header.contractInformation')}
          </h2>
          <CardGroup className="margin-0">
            {mockVendors.map(vendor => {
              return (
                <Card className="grid-col-12 margin-bottom-2">
                  <CardHeader className="padding-2 padding-bottom-0">
                    <h5 className="margin-y-0 font-sans-2xs text-normal">
                      {t('singleSystem.team.vendors')}
                    </h5>
                    <h3 className="margin-y-0 line-height-body-3">
                      {vendor.vendors.map(name => (
                        <div>{name}</div>
                      ))}
                    </h3>
                    <DescriptionTerm
                      className="padding-top-2"
                      term={t('singleSystem.team.contractAwardDate')}
                    />
                    <DescriptionDefinition
                      className="font-body-md line-height-body-3"
                      definition={vendor.contractAwardDate}
                    />
                    <Divider className="margin-y-2" />
                  </CardHeader>
                  <CardBody className="padding-2 padding-top-0">
                    <h5 className="margin-top-2 margin-bottom-1 font-sans-2xs text-normal">
                      {t('singleSystem.team.periodOfPerformance')}
                    </h5>
                    <GridContainer className="padding-x-0">
                      <Grid row>
                        <Grid col>
                          <DescriptionTerm
                            term={t('singleSystem.team.startDate')}
                          />
                          <DescriptionDefinition
                            className="font-body-md line-height-body-3"
                            definition={vendor.popStartDate}
                          />
                        </Grid>
                        <Grid col>
                          <DescriptionTerm
                            term={t('singleSystem.team.endDate')}
                          />
                          <DescriptionDefinition
                            className="font-body-md line-height-body-3"
                            definition={vendor.popEndDate}
                          />
                        </Grid>
                      </Grid>
                    </GridContainer>
                    <Divider className="margin-y-2" />
                    <h5 className="margin-y-0 font-sans-2xs text-normal">
                      {t('singleSystem.team.contractNumber')}
                    </h5>
                    <h3 className="margin-y-0">{vendor.contractNumber}</h3>
                    <h5 className="margin-bottom-0 margin-top-2 font-sans-2xs text-normal">
                      {t('singleSystem.team.technologyFunctions')}
                    </h5>
                    <div>
                      {vendor.technologyFunctions.map(name => (
                        <Tag
                          key={name}
                          className="system-profile__tag text-base-darker bg-base-lighter margin-bottom-1"
                        >
                          {name}
                        </Tag>
                      ))}
                    </div>
                    <h5 className="margin-bottom-0 margin-top-2 font-sans-2xs text-normal">
                      {t('singleSystem.team.assetsOrServices')}
                    </h5>
                    <div>
                      {vendor.assetsOrServices.map(name => (
                        <Tag
                          key={name}
                          className="system-profile__tag text-base-darker bg-base-lighter margin-bottom-1"
                        >
                          {name}
                        </Tag>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </CardGroup>
        </SectionWrapper>
      )}
      {teamSectionKeys.map(section => {
        const people = team[section];

        if (!people.length) return null;

        return (
          <SectionWrapper key={section} borderTop>
            <h2 className="margin-y-4">
              {t(`singleSystem.team.header.${section}`)}
            </h2>
            <CardGroup className="margin-x-0 margin-bottom-4">
              {people.map(pr => (
                <TeamContactCard key={pr.assigneeUsername} user={pr} />
              ))}
            </CardGroup>
          </SectionWrapper>
        );
      })}
    </>
  );
};

export default Team;
