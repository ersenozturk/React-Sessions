import React from 'react'
// import UuseEffectComp from './components/UuseEffectComp'
// import { useState } from 'react'
import Users from './components/Users'
// import ClassComponent from './components/ClassComponent'
// import UseStateComp from './components/UseStateComp'

const App = () => {

  // const [isVisible, setIsVisible] = useState(true)

  return (
    <div>
{/*   {isVisible && <ClassComponent/>}
      <ClassComponent/>
      <button onClick={() => setIsVisible(!isVisible)}>Toogle Comp</button> */}

      {/* <UseStateComp /> */}

      {/* {isVisible && <UuseEffectComp/>}
      <UuseEffectComp />
      <button onClick={() => setIsVisible(!isVisible)}>Toogle Comp</button> */}

      <Users/>

    </div>
  )
}

export default App
