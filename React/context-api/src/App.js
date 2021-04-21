import React, { useState } from 'react'
import {SimpleContext} from './Context';
import CompA from './Comp1';
import CompB from './Comp2';
import Image from './Image';
import './App.css'
export default function App() {
  const [name, setName] = useState("")
  return (
    <div className="App">
       {/* <SimpleContext.Provider value={{name,setName}}>
                <CompA />
                <CompB />
        </SimpleContext.Provider> */}
        <Image />
    </div>
  )
}
