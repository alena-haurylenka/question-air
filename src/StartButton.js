import React from 'react';
import {connect} from 'react-redux';
import {start} from './redux/actions'

function StartButton(props) {
  return (
    <button type="button" className="btn btn-primary btn-lg" onClick={() => props.start()}>
      Start
    </button>
  );
}

const mapDispatchToProps = {
  start
};

export default connect(null, mapDispatchToProps)(StartButton);