import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { Button, Card, IconBookmark } from '@trussworks/react-uswds';
import classnames from 'classnames';

import UswdsReactLink from 'components/LinkWrapper';
import DeleteCedarSystemBookmarkQuery from 'queries/DeleteCedarSystemBookmarkQuery';
import GetCedarSystemIsBookmarkedQuery from 'queries/GetCedarSystemIsBookmarkedQuery';
import { GetCedarSystems_cedarSystems as CedarSystemProps } from 'queries/types/GetCedarSystems';
import { IconStatus } from 'types/iconStatus';

import './index.scss';

type BookmarkCardProps = {
  className?: string;
  statusIcon: IconStatus;
  type: 'systemProfile'; // Built in for future iterations/varations of bookmarked datasets that ingest i18n translations for headers.
};

const BookmarkCard = ({
  className,
  type,
  id,
  name,
  description,
  acronym,
  status,
  statusIcon,
  businessOwnerOrg
}: BookmarkCardProps & CedarSystemProps) => {
  const { t } = useTranslation();

  const [deleteMutate] = useMutation(DeleteCedarSystemBookmarkQuery);

  const handleDeleteBookmark = (cedarSystemId: string) => {
    deleteMutate({
      variables: {
        input: {
          cedarSystemId
        }
      },
      refetchQueries: [
        {
          query: GetCedarSystemIsBookmarkedQuery,
          variables: { id: cedarSystemId }
        }
      ]
    });
  };

  return (
    <Card
      data-testid="single-bookmark-card"
      className={classnames('desktop:grid-col-6', 'grid-col-12', className)}
    >
      <div className="grid-col-12">
        <div className="bookmark__header easi-header__basic">
          <h3 className="bookmark__title margin-top-0 margin-bottom-1">
            <UswdsReactLink to={`/systems/${id}/home/top`}>
              {name}
            </UswdsReactLink>
          </h3>
          <Button
            onClick={() => handleDeleteBookmark(id)}
            type="button"
            unstyled
          >
            <IconBookmark size={5} />
          </Button>
        </div>
        <p className="margin-0">{acronym}</p>
        <p className="bookmark__body-text line-height-body-4">{description}</p>
        <p className="margin-bottom-0">{t(`${type}:bookmark.subHeader1`)}</p>
        <p className="text-bold margin-top-1">{businessOwnerOrg}</p>
        {/*
        <Divider />
        <div className="bookmark__header easi-header__basic">
          <div>
            <p className="margin-bottom-0">
              {t(`${type}:bookmark.subHeader2`)}
            </p>
            <p className="text-bold margin-top-0 margin-bottom-0">{status}</p>
          </div>
          <SystemHealthIcon
            status={statusIcon}
            size="xl"
            className="margin-top-3"
          />
        </div>
        */}
      </div>
    </Card>
  );
};

export default BookmarkCard;
