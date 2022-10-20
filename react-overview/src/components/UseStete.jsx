import React,{useState} from 'react'

const UseStete = () => {
  const [persone, setPersone] = useState({
    name:'Ersen',
    mail:'70ozturkersen@gmail.com',
    age:29
  })
  const [count, setCount] = useState(0)

  // const handleArtir = () =>{
  //   setCount(count+1)
  // }
  const handleAzalt = () =>{
    setCount(count-1)
  }
  return (
    <div>
      <h1>{count}</h1>
        {/* <button onClick={handleArtir} className='btn btn-success'>artır</button> */}
        <button onClick={()=>setCount(count+1)} className='btn btn-success'>artır</button>
        <button onClick={handleAzalt} className='btn btn-danger'>azalt</button>
        <br />
        {/*! spread */}
        <h3>{persone.age}</h3>
        <button onClick={()=>setPersone({...persone, age: persone.age+1})} className='btn btn-dark'>yaş artır</button>

    </div>
  )
}

export default UseStete