//! Don’t call Hooks inside loops, conditions, or nested functions.
//! Don’t call Hooks from regular JavaScript functions.
//* Only call Hooks at the top level
//* Call Hooks from React function components.
//* Call Hooks from custom Hooks.

import React from "react"
import { useState } from "react"

const UseStateComp = () => {

  //useStates
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)
  const [user, setUser] = useState({userName :'ersen', phone:'292342342352'})

 //methods
  const increase =  () =>  setCount(count + 1) //kullanım 1
  const increase2 = () => setCount((count)=> count + 2) //kullanım 2

  const increaseAge =  () =>  setAge(age + 1)

  const updateUser = () => setUser({...user, userName:'gunes', phone:'0000000'})

  //return 
  return (
    <div>
      <h2>functional component</h2>
      <h3>count:::::::::::{count}</h3>
      <button onClick={increase}>increase count button</button>
      <button onClick={increase2}>increase2 count button</button>
      <hr />
      <h3>age:::{age}</h3>
      <button onClick={increaseAge}>Age button</button>
      <hr />
      <p style={{textAlign:'center', fontSize:'40px'}}>userName: {user.userName}</p>
      <p style={{textAlign:'center'}}>phone: {user.phone}</p>
      <button onClick={updateUser}>update user</button>
    </div>
  )
}

export default UseStateComp
