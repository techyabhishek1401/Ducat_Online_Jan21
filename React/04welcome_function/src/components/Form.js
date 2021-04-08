import React,{useState} from 'react'

export default function Form() {
const [name, setName] = useState('');
const [age, setAge] = useState('');
const [department, setDepartment] = useState('');
//   setTimeout(()=>{
//      setName('TEST')
//   },3000)

const handleClick=()=>{
    alert("hola")
}
    return (
        <div>
            <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />   <br />
            <input placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>   <br />
            <input placeholder="Department"  value={department} onChange={(e)=>setDepartment(e.target.value)}/>   <br />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}
