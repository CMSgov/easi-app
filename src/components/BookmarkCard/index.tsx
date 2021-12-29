import React from 'react';
import { Link } from 'react-router-dom';
import { Link as UswdsLink } from '@trussworks/react-uswds';
import classnames from 'classnames';

import Divider from 'components/shared/Divider';
import SystemHealthIcon from 'components/SystemHealthIcon';
import { IconStatus } from 'types/iconStatus';

import './index.scss';

// TODO import CEDAR types once generated from gql

type BookmarkCardProps = {
  className?: string;
  id: string;
  name: string;
  acronym: string;
  ownerOffice: string;
  atoStatusText: string;
  section508StatusText: string;
  productionStatus: IconStatus;
};

const BookmarkCard = ({
  className,
  id,
  name,
  acronym,
  ownerOffice,
  atoStatusText,
  productionStatus,
  section508StatusText
}: BookmarkCardProps) => {
  return (
    <div
      className={classnames(
        'tablet:grid-col-6',
        'grid-col-12',
        'margin-top-3',
        className
      )}
    >
      <div className="grid-col-12 bookmark bookmark__container">
        <div className="bookmark__header easi-header__basic">
          <h2 className="bookmark__title margin-top-0 margin-bottom-1">
            <UswdsLink asCustom={Link} to={`/systems/${id}`}>
              {name}
            </UswdsLink>
          </h2>
          <i
            className="fa fa-bookmark fa-2x bookmark__icon"
            aria-hidden="true"
          />
        </div>
        <p className="margin-0">{acronym}</p>
        <p className="bookmark__body-text line-height-body-4">
          {section508StatusText}
        </p>
        <p className="margin-bottom-0">Officer of Department</p>
        <p className="text-bold margin-top-1">{ownerOffice}</p>
        <Divider />
        <div className="bookmark__header easi-header__basic">
          <div>
            <p className="margin-bottom-0">ATO Status</p>
            <p className="text-bold margin-top-1 margin-bottom-0">
              {atoStatusText}
            </p>
          </div>
          <SystemHealthIcon
            status={productionStatus}
            size="lg"
            className="margin-top-2"
          />
        </div>
      </div>
    </div>
  );
};

export default BookmarkCard;
