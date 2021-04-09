import React,{useState,useEffect,useMemo} from 'react';
import {Button,Dropdown,Container,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import './form.css'
export default function Form() {
const [name, setName] = useState('');
const [age, setAge] = useState('');
const [department, setDepartment] = useState('');
const [users, setUsers] = useState([]);
const [test, setTest] = useState(true); 
const [currentPage, setCurrentPage] = useState(1) ;  
const recordPerPage=50;
useEffect(() => {
    console.log("runs only on 1st mount")
}, []);  // did mount (called once only on component mount)

useEffect(() => {
    axios.get('https://randomuser.me/api/?results=500')
    .then(res=>{
      console.log("result:",res.data.results);
      setUsers(res.data.results);
    //this.setState({users:res.data.results})
    })
    .catch(err=>{
      console.log("error:",err)
    })
    return ()=>console.log("returning out")  // component will unmount
    
}, [test])  //did mount  //if value is passed in array-->componentDidUpdate/shouldUpdate



const handleClick=()=>{
    setTest(!test)
    console.log("handleClick");
    let tmp={name,age,department};
    setUsers([...users,tmp]);
    setTimeout(()=>  console.log("newUsers:",users),30)
    setName('');
    setAge('');
    setDepartment(''); 
}

  const changePage=(event)=> {
    setCurrentPage(Number(event.target.id))
  }

   const indexOfLastUser=useMemo(() =>{
       console.log("inside indexOfLastUser");
       return currentPage * recordPerPage
   } , [currentPage,recordPerPage]);

   const indexOfFirstUser=useMemo(() =>{
       console.log("inside indexOfFirstUser"); 
      return   indexOfLastUser - recordPerPage
   }, [indexOfLastUser,recordPerPage])
   // const indexOfLastUser = currentPage * recordPerPage;

   // console.log("firstindex:",indexOfFirstUser);
   //    console.log("lastindex:",indexOfLastUser);

       const usersToShow=useMemo(() =>{ 
        console.log('usersTOShow')       
        users.slice(indexOfFirstUser,indexOfLastUser);
    } , [indexOfLastUser,indexOfFirstUser])
       
      
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
          onClick={changePage}
         >
           {number}
         </li>
       );
     });


    return (
        <div id="container">
            <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />   <br />
            <input placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>   <br />
            <input placeholder="Department"  value={department} onChange={(e)=>setDepartment(e.target.value)}/>   <br />
            <button onClick={handleClick}>Add</button>
            <div>
            <Row>
     <Col>
          {usersToShow &&
                      <table border='2' className="table  table-striped">
                    <thead>
                      <tr><td>SNo.</td><td>Name</td><td>city</td><td>Picture</td></tr>
                    </thead>
                    <tbody>
                      {usersToShow.map((user,index)=>{
                        return <tr key={`user-${index}`}>
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
            </div>
        </div>
    )
}
