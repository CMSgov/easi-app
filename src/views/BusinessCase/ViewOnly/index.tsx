import React from 'react';
import { GetGRTFeedback_grtFeedbacks as GRTFeedback } from 'queries/types/GetGRTFeedback';

import BusinessCaseReview from 'components/BusinessCaseReview';
import PageHeading from 'components/PageHeading';
import { BusinessCaseModel } from 'types/businessCase';

type BusinessCaseViewOnlyProps = {
  businessCase: BusinessCaseModel;
  grtFeedbacks?: GRTFeedback[] | null;
};

const BusinessCaseView = ({
  businessCase,
  grtFeedbacks
}: BusinessCaseViewOnlyProps) => (
  <>
    <div className="grid-container">
      <PageHeading>Review your Business Case</PageHeading>
    </div>
    <div className="business-case-review">
      <BusinessCaseReview values={businessCase} grtFeedbacks={grtFeedbacks} />
    </div>
  </>
);

export default BusinessCaseView;
