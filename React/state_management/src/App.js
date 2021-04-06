import React, { Component } from 'react'
import Button from './Components/Button';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
     task:"",
     tasks:[],     
    }
  }
  render() {
    // destructuring
   const {task,tasks}=this.state;
   //task => this.state.task
   //tasks => this.state.tasks
    return (
      <div>
          <h1>Hi I'm App</h1>
          <input placeholder="task" value={task} onChange={(event)=>{this.setState({task:event.target.value})}} />
         <button onClick={(e)=>{
           //method-1
          //  let tasks=[...this.state.tasks];
          //  tasks.push(this.state.task);
          //  this.setState({tasks})
          //method2
          this.setState({tasks:[...tasks,task],task:""})
         }}>click me</button>
        {/* 
        input_ref.addEventListener('keyup',(e)=>{
        })        
        */}

        <ul>        
          {tasks.map((task,index)=>{
            return <li key={`task-${index}`}>{task}</li>
          })}
        </ul>
          
          
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