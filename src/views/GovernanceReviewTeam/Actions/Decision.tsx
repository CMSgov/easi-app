import React from 'react';
import { useTranslation } from 'react-i18next';

const Decision = () => {
  const { t } = useTranslation('action');

  return (
    <div>
      <h1>{t('decision.title')}</h1>
    </div>
  );
};

export default Decision;
