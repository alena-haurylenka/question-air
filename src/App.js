import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Questionnaire from './questionnaire/Questionnaire';
import StartButton from './StartButton';

function App({step}) {
  return (
    <div className="App">
      <header className="App-header">
        {step === "new" ? (
          <React.Fragment>
            <h1
              className="App-heading"
            >
              Are you alcoholic?
            </h1>
            <p>
              Take a test
            </p>
            <StartButton/>
          </React.Fragment>
        ) : (
          <Questionnaire/>
        )
        }
      </header>

    </div>
  );
}

const mapStateToProps = state => ({
  step: state.workflow.step
});

export default connect(mapStateToProps, null)(App);
