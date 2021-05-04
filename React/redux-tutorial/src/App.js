import React, { Component } from 'react'
import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { startAction } from './actions/startAction';
import { stopAction } from './actions/stopAction';



function App() {
  const rotating = useSelector((state) => state.rotating);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${rotating ? '' : 'App-logo-paused'}`} alt="logo"

        />
        <button onClick={rotating ? () => dispatch(stopAction) : () => dispatch(startAction)}>{rotating ? "STOP" : "START"}</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}



export default App