import React, { Component } from 'react'
import axios from 'axios';
import {Button,Dropdown,Container,Row,Col} from 'react-bootstrap';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      num:0,
      users:[],
      recordPerPage:50,
      currentPage:1,     
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
    axios.get('https://randomuser.me/api/?results=500')
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
  handleClick=(event)=> {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  render() {
    console.log("render");
    const {users,recordPerPage,currentPage}=this.state;
//                                1 * 50=>50
     const indexOfLastUser = currentPage * recordPerPage;
 //                               50-50 =>0
     const indexOfFirstUser = indexOfLastUser - recordPerPage;
 
      console.log("firstindex:",indexOfFirstUser);
      console.log("lastindex:",indexOfLastUser);
      const usersToShow=users.slice(indexOfFirstUser,indexOfLastUser);
      console.log("userTOSHOW:",usersToShow)
     const pageNumbers = [];
          for (let i = 1; i <= Math.ceil(users.length / recordPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
         onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });
    return (
      <Container>
        
        <h1>Life Cycle Methods</h1>
        <p>Number : <span style={{color:"red"}}>{this.state.num}</span></p> 
        <Button variant="outline-primary"  onClick={this.increment}>Increase By One</Button>
        
   <Row>
     <Col>
          {usersToShow.length>0 &&
                      <table border='2' className="table  table-striped">
                    <thead>
                      <tr><td>SNo.</td><td>Name</td><td>city</td><td>Picture</td></tr>
                    </thead>
                    <tbody>
                      {usersToShow.map((user,index)=>{
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
     <Row>
       <Col>
           <ul id="pagenumber">
            {renderPageNumbers}
           </ul>
       </Col>
     </Row>
         
      </Container>
    )
  }
}
