import React from 'react';
import PropTypes from 'prop-types';

const ALCO_LIMIT = 0.3;

function QuestionnaireResults(props) {
  return (
    <React.Fragment>
      {props.yesCount / props.total >= ALCO_LIMIT ?
        <p className="alert alert-danger" role="alert">You may be an alcoholic! Try to get medical help.</p> :
        <p className="alert alert-success" role="alert">Congratulation! Most likely you are not an alcoholic.</p>
      }
    </React.Fragment>
  );
}

QuestionnaireResults.propTypes = {
  yesCount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionnaireResults;