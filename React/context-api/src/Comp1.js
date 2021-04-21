import React,{useContext} from 'react'
import {SimpleContext} from './Context'
export default function Comp1() {
    const {name}=useContext(SimpleContext);
    console.log("MyContext:",name)
    return (
        <div>
            Hi I'm {name}
        </div>
    )
}
