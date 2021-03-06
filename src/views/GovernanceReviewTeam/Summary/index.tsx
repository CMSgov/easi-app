import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@trussworks/react-uswds';
import classnames from 'classnames';
import { DateTime } from 'luxon';

import BreadcrumbNav from 'components/BreadcrumbNav';
import Modal from 'components/Modal';
import { RadioField, RadioGroup } from 'components/shared/RadioField';
import cmsDivisionsAndOffices from 'constants/enums/cmsDivisionsAndOffices';
import { saveSystemIntake } from 'types/routines';
import { SystemIntakeForm } from 'types/systemIntake';
import {
  isIntakeClosed,
  isIntakeOpen,
  translateRequestType
} from 'utils/systemIntake';

const RequestSummary = ({ intake }: { intake: SystemIntakeForm }) => {
  const { t } = useTranslation('governanceReviewTeam');
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [newAdminLead, setAdminLead] = useState('');

  const component = cmsDivisionsAndOffices.find(
    c => c.name === intake.requester.component
  );

  const requesterNameAndComponent = component
    ? `${intake.requester.name}, ${component.acronym}`
    : intake.requester.name;

  // Get admin lead assigned to intake
  const getAdminLead = () => {
    if (intake.adminLead) {
      return intake.adminLead;
    }
    return (
      <>
        <i className="fa fa-exclamation-circle text-secondary margin-right-05" />
        {t('governanceReviewTeam:adminLeads.notAssigned')}
      </>
    );
  };

  // Resets newAdminLead to what is in intake currently. This is used to
  // reset state of modal upon exit without saving
  const resetNewAdminLead = () => {
    setAdminLead(intake.adminLead);
  };

  // Send newly selected admin lead to database
  const saveAdminLead = () => {
    const data = {
      ...intake,
      adminLead: newAdminLead
    };
    dispatch(saveSystemIntake({ ...data }));
  };

  // List of current GRT admin team members
  const grtMembers: string[] = t('governanceReviewTeam:adminLeads.members', {
    returnObjects: true
  });

  // Admin lead modal radio button
  type AdminLeadRadioOptionProps = {
    checked: boolean;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

  const AdminLeadRadioOption = ({
    checked,
    label,
    onChange
  }: AdminLeadRadioOptionProps) => {
    const radioFieldClassName = 'margin-y-3';

    return (
      <RadioField
        checked={checked}
        id={label}
        label={label}
        name={label}
        value={label}
        onChange={onChange}
        className={radioFieldClassName}
      />
    );
  };

  return (
    <section className="easi-grt__request-summary">
      <div className="grid-container padding-y-2">
        <BreadcrumbNav>
          <li>
            <Link className="text-white" to="/">
              Home
            </Link>
            <i className="fa fa-angle-right margin-x-05" aria-hidden />
          </li>
          <li>{intake.requestName}</li>
        </BreadcrumbNav>
        <dl className="easi-grt__request-info">
          <div>
            <dt>{t('intake:fields.projectName')}</dt>
            <dd>{intake.requestName}</dd>
          </div>
          <div className="easi-grt__request-info-col">
            <div className="easi-grt__description-group">
              <dt>{t('intake:fields.requester')}</dt>
              <dd>{requesterNameAndComponent}</dd>
            </div>
            <div className="easi-grt__description-group">
              <dt>{t('intake:fields.submissionDate')}</dt>
              <dd>
                {intake.submittedAt
                  ? intake.submittedAt.toLocaleString(DateTime.DATE_FULL)
                  : 'N/A'}
              </dd>
            </div>
            <div className="easi-grt__description-group">
              <dt>{t('intake:fields.requestFor')}</dt>
              <dd>{translateRequestType(intake.requestType)}</dd>
            </div>
          </div>
        </dl>
      </div>

      <div
        className={classnames({
          'bg-base-lightest': isIntakeClosed(intake.status),
          'easi-grt__status--open': isIntakeOpen(intake.status)
        })}
      >
        <div className="grid-container overflow-auto">
          <dl className="easi-grt__status-group">
            <div className="easi-grt__status-info text-gray-90">
              <dt className="text-bold">{t('status.label')}</dt>
              &nbsp;
              <dd
                className="text-uppercase text-white bg-base-dark padding-05 font-body-3xs"
                data-testid="grt-status"
              >
                {isIntakeClosed(intake.status)
                  ? t('status.closed')
                  : t('status.open')}
              </dd>
              {intake.lcid && (
                <>
                  <dt>{t('intake:lifecycleId')}:&nbsp;</dt>
                  <dd data-testid="grt-lcid">{intake.lcid}</dd>
                </>
              )}
            </div>
            <div className="text-gray-90">
              <dt className="text-bold">{t('intake:fields.adminLead')}</dt>
              <dt className="padding-1">{getAdminLead()}</dt>
              <dt>
                <Button
                  type="button"
                  unstyled
                  onClick={() => {
                    // Reset newAdminLead to value in intake
                    resetNewAdminLead();
                    setModalOpen(true);
                  }}
                >
                  {t('governanceReviewTeam:adminLeads.changeLead')}
                </Button>
                <Modal
                  title={t('governanceReviewTeam:adminLeads:assignModal.title')}
                  isOpen={isModalOpen}
                  closeModal={() => {
                    setModalOpen(false);
                  }}
                >
                  <h1 className="margin-top-0 font-heading-2xl line-height-heading-2">
                    {t('governanceReviewTeam:adminLeads:assignModal.header', {
                      requestName: intake.requestName
                    })}
                  </h1>
                  <RadioGroup>
                    {grtMembers.map(k => (
                      <AdminLeadRadioOption
                        key={k}
                        checked={k === newAdminLead}
                        label={k}
                        onChange={() => {
                          setAdminLead(k);
                        }}
                      />
                    ))}
                  </RadioGroup>
                  <Button
                    type="button"
                    className="margin-right-4"
                    onClick={() => {
                      // Set admin lead as newAdminLead in the intake
                      saveAdminLead();
                      setModalOpen(false);
                    }}
                  >
                    {t('governanceReviewTeam:adminLeads:assignModal.save')}
                  </Button>
                  <Button
                    type="button"
                    unstyled
                    onClick={() => {
                      setModalOpen(false);
                    }}
                  >
                    {t('governanceReviewTeam:adminLeads:assignModal.noChanges')}
                  </Button>
                </Modal>
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default RequestSummary;
