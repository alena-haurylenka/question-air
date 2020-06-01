import React, { useState } from 'react';
import './Questionnaire.css';
import questions from './questions';

const ALCO_LIMIT = 0.3;

function Questionnaire() {
  const [position, setPosition] = useState(0);
  const [affirmationNumber, setAffirmationNumber] = useState(0);

  if (position > questions.length - 1) {
    return (
      <React.Fragment>
        {affirmationNumber / questions.length >= ALCO_LIMIT ?
          <p className="alert alert-danger" role="alert">You may be an alcoholic! Try to get medical help.</p> :
          <p className="alert alert-success" role="alert">Congratulation! Most likely you are not an alcoholic.</p>
        }
      </React.Fragment>
    );
  }

  const question = questions[position];
  return (
    <React.Fragment>
      <p>{question.query}</p>
      <div className="btn-toolbar">
        <button type="button" className="btn btn-success btn-lg mr-4" onClick={() => {
          setPosition(position + 1);
          setAffirmationNumber(affirmationNumber + 1)
        }}>Yes
        </button>
        <button type="button" className="btn btn-danger btn-lg" onClick={() => setPosition(position + 1)}>No</button>
      </div>
    </React.Fragment>
  );
}

export default Questionnaire;