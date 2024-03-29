import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from '@trussworks/react-uswds';
import classnames from 'classnames';

import HelpTag from 'components/HelpTag';
import UswdsReactLink from 'components/LinkWrapper';
import { ArticleProps } from 'types/articles';

import './index.scss';

type ArticleCardProps = {
  className?: string;
  isLink?: boolean;
  tag?: boolean;
};

const ArticleCard = ({
  className,
  type,
  route,
  translation,
  isLink = false,
  tag = true
}: ArticleCardProps & ArticleProps) => {
  const { t } = useTranslation(translation);

  const clickHandler = (e: React.MouseEvent<HTMLElement>, url: string) => {
    const target = e.target as Element;
    if (isLink && target.getAttribute('data-testid') !== 'tag') {
      window.open(url, '_blank');
    }
  };

  return (
    <Card
      containerProps={{
        className: 'radius-md shadow-2 minh-mobile'
      }}
      data-testid="article-card"
      className={classnames('desktop:grid-col-4', 'article', className, {
        'article-card--isLink': isLink
      })}
      onClick={e => clickHandler(e, `/help${route}`)}
    >
      <CardHeader className="padding-x-3 padding-top-3">
        <h3 className="line-height-body-4 margin-bottom-1">{t('title')}</h3>
        {tag && <HelpTag type={type} className="margin-bottom-1" />}
      </CardHeader>
      <CardBody className="padding-top-0 article__body">
        <p>{t('description')}</p>
      </CardBody>
      <CardFooter className="padding-top-2 article__footer">
        <UswdsReactLink
          to="#"
          className="easi-request__button-link padding-x-2"
        >
          {useTranslation('help').t('read')}
        </UswdsReactLink>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
