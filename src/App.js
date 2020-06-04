import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import Questionnaire from './components/questionnaire/Questionnaire';
import StartButton from './components/start-button/StartButton';

function App() {
  const step = useSelector(state => state.workflow.step);

  return (
    <div className="App">
      <header className="App-header">
        {step === "new" ? (
          <>
            <h1
              className="App-heading"
            >
              Are you alcoholic?
            </h1>
            <p>
              Take a test
            </p>
            <StartButton/>
          </>
        ) : (
          <Questionnaire/>
        )
        }
      </header>

    </div>
  );
}

export default App;
