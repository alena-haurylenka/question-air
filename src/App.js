import React, { useState } from 'react';
import './App.css';
import Questionnaire from './Questionnaire';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {!started ? (
          <React.Fragment>
            <h1
              className="App-heading"
            >
              Are you alcoholic?
            </h1>
            <p>
              Take a test
            </p>
            <button onClick={() => setStarted(true)}>Start</button>
          </React.Fragment>
        ) : (
          <Questionnaire/>
        )
        }
        {/*<StartButton/>*/}
      </header>
    </div>
  );
}

export default App;
