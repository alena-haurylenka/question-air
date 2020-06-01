import React, { useState } from 'react';
import './Questionnaire.css';
import questions from './questions';

const ALCO_LIMIT = 0.7;

function Questionnaire() {
  const [position, setPosition] = useState(0);
  const [affirmationNumber, setAffirmationNumber] = useState(0);

  if (position > questions.length - 1) {
    return (
      <React.Fragment>
        <p>{affirmationNumber/questions.length > ALCO_LIMIT ? 'You are an alcoholic! You need to get a treatment.' : 'Congratulation! You are not an alcoholic.'}</p>
      </React.Fragment>
    );
  }

  const question = questions[position];
  return (
    <React.Fragment>
      <p>{question.query}</p>
      <div className="Qn-buttons">
        <button type="button" className="btn btn-success" onClick={() => {
          setPosition(position + 1);
          setAffirmationNumber(affirmationNumber + 1)
        }}>Yes
        </button>
        <button type="button" className="btn btn-danger" onClick={() => setPosition(position + 1)}>No</button>
      </div>
    </React.Fragment>
  );
}

export default Questionnaire;