import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      num:0
    }
    console.log("constructor");
  }
  increment=()=>{
    console.log("increment")
    this.setState({num:this.state.num+1})
  // this.setState({num:this.state.num})
  }
  componentDidMount(){
    console.log("did Mount")
  }

  UNSAFE_componentWillMount(){
    console.log("will Mount")
  }

  UNSAFE_componentWillUpdate(){
    console.log("will update")
  }
  componentDidUpdate(){
    console.log("did update")
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("nextProps:",nextProps);
    console.log("nextState:",nextState);
    console.log("shouldComponentUpdate")
    if(nextState.num===this.state.num){
      return false
    }
    return true
  }
  static getDerivedStateFromProps(props, state){
    console.log("Props:",props);
    console.log("state:",state);
    console.log("getDerivedStateFromProps")
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Life Cycle Methods</h1>
        <p>Number : <span style={{color:"red"}}>{this.state.num}</span></p> 
         <button onClick={this.increment}>Increase By One</button>
      </div>
    )
  }
}
