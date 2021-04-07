import React, { Component } from 'react'
import axios from 'axios';
import {Button,Dropdown,Container,Row,Col} from 'react-bootstrap';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      num:0,
      users:[]
    }
    console.log("constructor");
  }
  increment=()=>{
    console.log("increment")
    this.setState({num:this.state.num+1})
  // this.setState({num:this.state.num})
  }
  componentDidMount(){
    console.log("did Mount");
    axios.get('https://randomuser.me/api/?results=50')
    .then(res=>{
      console.log("result:",res.data.results);
    this.setState({users:res.data.results})
    })
    .catch(err=>{
      console.log("error:",err)
    })
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
    // if(nextState.num===this.state.num){
    //   return false
    // }
    return true
  }
  static getDerivedStateFromProps(props, state){
    console.log("Props:",props);
    console.log("state:",state);
    console.log("getDerivedStateFromProps")
  }
  render() {
    console.log("render");
    const {users}=this.state;
    return (
      <Container>
        
        <h1>Life Cycle Methods</h1>
        <p>Number : <span style={{color:"red"}}>{this.state.num}</span></p> 
        <Button variant="outline-primary"  onClick={this.increment}>Increase By One</Button>
        
<Row>
  <Col>
          {users.length>0 &&
                      <table border='2' className="table  table-striped">
                    <thead>
                      <tr><td>SNo.</td><td>Name</td><td>city</td><td>Picture</td></tr>
                    </thead>
                    <tbody>
                      {this.state.users.map((user,index)=>{
                        return <tr>
                          <td>{index+1}</td>
                          <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
                          <td>{user.location.city}</td>
                          <td><img src={user.picture.thumbnail} /></td>                 
                        </tr>
                      })}
                    </tbody>
                  </table>}
     </Col> 
</Row>
          
         
      </Container>
    )
  }
}
