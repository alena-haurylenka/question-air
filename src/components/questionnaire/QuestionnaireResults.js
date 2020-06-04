import React from 'react';
import PropTypes from 'prop-types';

const ALCO_LIMIT = 0.3;

function QuestionnaireResults(props) {
  return (
    <>
      {props.yesCount / props.length >= ALCO_LIMIT ?
        <p className="alert alert-danger" role="alert">You may be an alcoholic! Try to get medical help.</p> :
        <p className="alert alert-success" role="alert">Congratulation! Most likely you are not an alcoholic.</p>
      }
    </>
  );
}

QuestionnaireResults.propTypes = {
  yesCount: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default QuestionnaireResults;