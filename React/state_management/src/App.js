import React, { Component } from 'react'
import Button from './Components/Button';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      a:100,
      b:10
    }
  }
  render() {
    return (
      <div>
          <h1>Hi I'm App</h1>
          <p>a: {this.state.a}</p>
          <p>b: {this.state.b}</p>
          <Button />
          
      </div>
    )
  }
}


// export default class Child extends React.Component {
//   render() {
//     return (
//       <div>
//           <h1>Child</h1>
//       </div>
//     )
//   }
// }

//  module.exports={
//   App,
//   Child
// }