import React from 'react';
import {useDispatch} from 'react-redux'
import {START} from '../../redux/types'

function StartButton() {
  const dispatch = useDispatch();
  const start = () => dispatch({ type: START });

  return (
    <button type="button" className="btn btn-primary btn-lg" onClick={start}>
      Start
    </button>
  );
}

export default StartButton;