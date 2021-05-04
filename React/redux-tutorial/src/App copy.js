import React, { Component } from 'react'
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import { startAction } from './actions/startAction';
import { stopAction } from './actions/stopAction';



class App extends Component {
  render() {
    console.log("this.props:", this.props)
    const { rotating, startAction, stopAction } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${rotating ? '' : 'App-logo-paused'}`} alt="logo"

          />
          <button onClick={rotating ? stopAction : startAction}>{rotating ? "STOP" : "START"}</button>
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
}

/**
 mapStateToProps :this is used to reterieve the store state
 mapDispatchToProps: this is used to retrieve the action and dispatch
 */

const mapStateToProps = state => {
  console.log("state:", state);
  return { ...state }
}
const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
})


export default connect(mapStateToProps, mapDispatchToProps)(App)