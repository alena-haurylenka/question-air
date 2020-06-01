import React, {useState} from 'react';
import QuestionnaireResults from './QuestionnaireResults';
import './Questionnaire.css';
import questions from './questions';

function Questionnaire() {
  const [position, setPosition] = useState(0);
  const [yesCount, setYesCount] = useState(0);

  if (position > questions.length - 1) {
    return (
      <QuestionnaireResults total={questions.length} yesCount={yesCount}/>
    );
  }

  const percentage = position * 100 / questions.length;

  const question = questions[position];
  return (
    <React.Fragment>
      <p>{question.query}</p>
      <div className="btn-toolbar">
        <button type="button" className="btn btn-success btn-lg mr-4" onClick={() => {
          setPosition(position + 1);
          setYesCount(yesCount + 1);
        }}>Yes
        </button>
        <button type="button" className="btn btn-danger btn-lg" onClick={() => setPosition(position + 1)}>No</button>
      </div>
      <br/>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: percentage + '%'}} aria-valuenow={percentage}
             aria-valuemin="0" aria-valuemax="100">
          {percentage}%
        </div>
      </div>
    </React.Fragment>
  );
}

export default Questionnaire;