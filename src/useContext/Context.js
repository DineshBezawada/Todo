import React, { createContext, useState } from 'react'
import Context1 from './Context1'
import Context2 from './Context2'
// import { UserContext } from '../App'

export const User2 = createContext()


const See = () =>{

}

// Perfomance hooks

const Counter =()=>{

}


const Context = () => {

    const [hello,setHello] = useState("Hello...")
  return (
    <div>
        <User2.Provider value={hello}>
        <Context1 /> 
        </User2.Provider>

               
    </div>
  )
}

export default Context