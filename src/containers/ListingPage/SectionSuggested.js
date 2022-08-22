import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';


import css from './ListingPage.module.css';

const SectionSuggested = props => {

console.log(props);
  return (
    <div className={css.sectionReviews}>
      <h2 className={css.suggestedProducts}>
        <FormattedMessage id="ListingPage.suggestedProducts"/>
     
      </h2>
    </div>
  );
};

export default SectionSuggested;
