import React from 'react';
import { IconArrowBack } from '@trussworks/react-uswds';
import cx from 'classnames';

import UswdsReactLink from 'components/LinkWrapper';

type Props = {
  back?: { text?: string; url: string; onClick?: Function } | false;
  next?:
    | { text?: string; url: string; onClick?: Function; style?: 'outline' }
    | false;
  backDisabled?: boolean;
  nextDisabled?: boolean;
  saveExitDisabled?: boolean;
};

export function Pager({
  back,
  next,
  backDisabled,
  nextDisabled,
  saveExitDisabled
}: Props) {
  // todo
  // back defaults to style outline
  // next option
  return (
    <div className="border-base-light border-top-1px">
      <div className="margin-top-2">
        {back && (
          <UswdsReactLink
            variant="unstyled"
            className="usa-button usa-button--outline"
            to={back.url}
          >
            {back.text ?? 'Back'}
          </UswdsReactLink>
        )}
        {next && (
          <UswdsReactLink
            variant="unstyled"
            className={cx('usa-button', {
              'usa-button--outline': next.style === 'outline',
              'usa-button--disabled': nextDisabled
            })}
            to={next.url}
          >
            {next.text ?? 'Next'}
          </UswdsReactLink>
        )}
      </div>
      {!saveExitDisabled && (
        <div className="margin-top-2">
          <UswdsReactLink to="/trb">
            <IconArrowBack className="margin-right-05 margin-bottom-2px text-tbottom" />
            Save and exit
          </UswdsReactLink>
        </div>
      )}
    </div>
  );
}

export default Pager;
