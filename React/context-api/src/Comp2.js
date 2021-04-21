import React,{useContext} from 'react'
import {SimpleContext} from './Context'
export default function Comp1() {
    const {setName}=useContext(SimpleContext)
    return (
        <div>
            <input placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        </div>
    )
}
