import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layer, ClickableTile } from '@carbon/react';
import { ArrowRightIcon } from '@openmrs/esm-framework';
import { handlePlainLeftClick } from '@openmrs/esm-release-sandbox-common-lib';

const oclUrl = `${window.spaBase}/ocl`;

const handleClick = handlePlainLeftClick(oclUrl);

const OpenConceptLabCardLink: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layer>
      <ClickableTile href={oclUrl} onClick={handleClick}>
        <div>
          <div className="heading">{t('manageConcepts', 'Manage Concepts')}</div>
          <div className="content">{t('openConceptLab', 'Open Concept Lab')}</div>
        </div>
        <div className="iconWrapper">
          <ArrowRightIcon size={16} />
        </div>
      </ClickableTile>
    </Layer>
  );
};

export default OpenConceptLabCardLink;
