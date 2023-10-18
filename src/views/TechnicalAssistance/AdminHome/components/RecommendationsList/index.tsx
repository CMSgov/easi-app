import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import {
  Button,
  ButtonGroup,
  IconArrowDropDown,
  IconArrowDropUp
} from '@trussworks/react-uswds';
import classNames from 'classnames';

import Alert from 'components/shared/Alert';
import { UpdateTrbRecommendationOrderQuery } from 'queries/TrbAdviceLetterQueries';
import { TRBRecommendation } from 'queries/types/TRBRecommendation';
import {
  UpdateTrbRecommendationOrder,
  UpdateTrbRecommendationOrderVariables
} from 'queries/types/UpdateTrbRecommendationOrder';

import RemoveRecommendationModal from '../RemoveRecommendationModal/Index';

import RecommendationLinks from './RecommendationLinks';

type RecommendationsListProps = {
  recommendations: TRBRecommendation[];
  trbRequestId: string;
  setReorderError?: (error: string | null) => void;
  editable?: boolean;
  edit?: (recommendation: TRBRecommendation) => void;
  remove?: (recommendation: TRBRecommendation) => void;
  className?: string;
};

export default function RecommendationsList({
  recommendations,
  trbRequestId,
  setReorderError,
  editable = true,
  edit,
  remove,
  className
}: RecommendationsListProps) {
  const { t } = useTranslation('technicalAssistance');

  const enableReorderControls: boolean = editable && recommendations.length > 1;

  const [
    recommendationToRemove,
    setRecommendationToRemove
  ] = useState<TRBRecommendation | null>(null);

  // Sorted recommendations array
  const [sortedRecommendations, setSortedRecommendations] = useState(
    recommendations
  );

  const [updateOrder] = useMutation<
    UpdateTrbRecommendationOrder,
    UpdateTrbRecommendationOrderVariables
  >(UpdateTrbRecommendationOrderQuery);

  /** Sort recommendations and update sortedRecommendations state */
  const sort = (id: string, newIndex: number) => {
    /** Updated sort order array */
    const newOrder: string[] = sortedRecommendations
      // Get just rec IDs
      .map(rec => rec.id)
      // Filter out rec ID to be sorted
      .filter(value => value !== id);

    // Insert rec ID at new index
    newOrder.splice(newIndex, 0, id);

    updateOrder({
      variables: {
        input: {
          trbRequestId,
          newOrder
        }
      }
    })
      .then(response => {
        const updatedRecommendations =
          response?.data?.updateTRBAdviceLetterRecommendationOrder;

        // Update sortedRecommendations state with new order
        if (updatedRecommendations) {
          setSortedRecommendations(updatedRecommendations);
        }
      })
      .catch(() => setReorderError?.(t('adviceLetterForm.reorderError')));
  };

  // Update sortedRecommendations state when query is refetched
  useEffect(() => {
    setSortedRecommendations(recommendations);
  }, [recommendations]);

  // Clear error on initial render
  useEffect(() => {
    setReorderError?.(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className}>
      {remove && (
        <RemoveRecommendationModal
          modalProps={{
            isOpen: !!recommendationToRemove,
            closeModal: () => setRecommendationToRemove(null)
          }}
          handleDelete={() =>
            recommendationToRemove && remove(recommendationToRemove)
          }
        >
          <p>
            {t('adviceLetterForm.modal.removingTitle', {
              title: recommendationToRemove?.title
            })}
          </p>
        </RemoveRecommendationModal>
      )}

      {recommendations.length > 0 && editable && (
        <Alert type="info" slim className="margin-bottom-4">
          {t('adviceLetterForm.reorderRecommendations')}
        </Alert>
      )}

      <ul className="usa-list usa-list--unstyled">
        {sortedRecommendations.map((recommendation, index) => {
          const {
            title,
            id,
            links,
            recommendation: description
          } = recommendation;

          return (
            <li
              data-testid="recommendations_list-item"
              key={id}
              className="margin-bottom-3"
            >
              <div
                className={classNames(
                  'bg-base-lightest padding-top-2 padding-bottom-105 padding-left-105 padding-right-3 display-flex',
                  { 'padding-x-5': !enableReorderControls }
                )}
              >
                {
                  /* Reorder control buttons */
                  enableReorderControls && (
                    <div
                      data-testid="reorder-controls"
                      className="margin-right-2 display-flex flex-column flex-align-center line-height-body-1"
                    >
                      <Button
                        type="button"
                        onClick={() => sort(id, index - 1)}
                        className="height-3"
                        aria-label="Increase recommendation sort order"
                        unstyled
                      >
                        <IconArrowDropUp size={3} className="text-primary" />
                      </Button>
                      <span data-testid="order-index">{index + 1}</span>
                      <Button
                        type="button"
                        onClick={() => sort(id, index + 1)}
                        className="height-3"
                        aria-label="Decrease recommendation sort order"
                        unstyled
                      >
                        <IconArrowDropDown size={3} className="text-primary" />
                      </Button>
                    </div>
                  )
                }

                {/* Recommendation content */}
                <div
                  className={classNames(
                    'width-full padding-bottom-2',
                    enableReorderControls ? 'padding-top-105' : 'padding-top-1'
                  )}
                >
                  <h3 className="margin-top-0 margin-bottom-05">{title}</h3>

                  <p className="margin-top-05 margin-bottom-0 font-body-md line-height-body-4">
                    {description}
                  </p>

                  {links.length > 0 && (
                    <>
                      <p className="text-bold margin-bottom-0 margin-top-2">
                        {t('adviceLetter.resources')}
                      </p>
                      <RecommendationLinks
                        links={links}
                        className="margin-bottom-05"
                      />
                    </>
                  )}
                </div>
              </div>

              {
                /* Action buttons if `editable` is true and edit or remove onClick props are provided */
                (edit || remove) && editable && (
                  <ButtonGroup>
                    {edit && (
                      <Button
                        type="button"
                        onClick={() => edit(recommendation)}
                        unstyled
                      >
                        {t('adviceLetterForm.editRecommendation')}
                      </Button>
                    )}
                    {remove && (
                      <Button
                        type="button"
                        className="text-secondary margin-left-1"
                        onClick={() =>
                          setRecommendationToRemove(recommendation)
                        }
                        unstyled
                      >
                        {t('adviceLetterForm.removeRecommendation')}
                      </Button>
                    )}
                  </ButtonGroup>
                )
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
}
