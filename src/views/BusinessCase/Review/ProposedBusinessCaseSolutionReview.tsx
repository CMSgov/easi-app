import React from 'react';
import EstimatedLifecycleCostReview from 'components/EstimatedLifecycleCost/Review';
import ReviewRow from 'components/ReviewRow';
import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDefinition
} from 'components/shared/DescriptionGroup';
import { ProposedBidnessCaseSolution } from 'types/bidnessCase';

/**
 * Title
 * Summary
 * Acquisition Approach
 * Pros
 * Cons
 * Estimated Lifecycle
 * Cost Savings
 */

type ReviewProps = {
  name: string;
  solution: ProposedBidnessCaseSolution;
};

const PropsedBidnessCaseSolutionReview = ({ name, solution }: ReviewProps) => (
  <DescriptionList title={name}>
    <ReviewRow>
      <div className="line-height-body-3">
        <DescriptionTerm term={`${name}: Title`} />
        <DescriptionDefinition definition={solution.title} />
      </div>
    </ReviewRow>
    <ReviewRow>
      <div className="line-height-body-3">
        <DescriptionTerm term={`${name}: Summary`} />
        <DescriptionDefinition definition={solution.summary} />
      </div>
    </ReviewRow>
    <ReviewRow>
      <div className="line-height-body-3">
        <DescriptionTerm term={`${name}: Acquisition approach`} />
        <DescriptionDefinition definition={solution.acquisitionApproach} />
      </div>
    </ReviewRow>
    <ReviewRow>
      <div className="line-height-body-3">
        <DescriptionTerm term={`${name}: Pros`} />
        <DescriptionDefinition definition={solution.pros} />
      </div>
    </ReviewRow>
    <ReviewRow>
      <div className="line-height-body-3">
        <DescriptionTerm term={`${name}: Cons`} />
        <DescriptionDefinition definition={solution.cons} />
      </div>
    </ReviewRow>
    <ReviewRow>
      <EstimatedLifecycleCostReview data={solution.estimatedLifecycleCost} />
    </ReviewRow>
    <ReviewRow>
      <div className="line-height-body-3">
        <DescriptionTerm term="What is the cost savings or avoidance associated with this solution?" />
        <DescriptionDefinition definition={solution.costSavings} />
      </div>
    </ReviewRow>
  </DescriptionList>
);

export default PropsedBidnessCaseSolutionReview;
