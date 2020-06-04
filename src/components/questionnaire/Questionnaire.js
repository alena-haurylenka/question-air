import React, {useState} from 'react';
import QuestionnaireResults from './QuestionnaireResults';
import './Questionnaire.css';
import questions from './questions';

function Questionnaire() {
  const [position, setPosition] = useState(0);
  const [yesCount, setYesCount] = useState(0);

  const length = questions.length;

  if (position > length - 1) {
    return (
      <QuestionnaireResults length={length} yesCount={yesCount}/>
    );
  }

  const percentage = position * 100 / length;

  const incrementPosition = () => setPosition(position + 1);
  const incrementYesCount =() => setYesCount(yesCount + 1);

  const question = questions[position];
  return (
    <>
      <p>{question.query}</p>
      <div className="btn-toolbar">
        <button type="button" className="btn btn-success btn-lg mr-4" onClick={() => {
          incrementPosition();
          incrementYesCount();
        }}>Yes
        </button>
        <button type="button" className="btn btn-danger btn-lg" onClick={incrementPosition}>No</button>
      </div>
      <br/>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: percentage + '%'}} aria-valuenow={percentage}
             aria-valuemin="0" aria-valuemax="100">
          {percentage}%
        </div>
      </div>
    </>
  );
}

export default Questionnaire;