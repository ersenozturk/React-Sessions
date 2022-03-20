import React from 'react'
import Message from './Message'

function Person(props) {
  const {name,img,tel} = props  
  return (
    <>
       <Message myName={name}/>
       <h4>{"Ersen's " + name}</h4>
       <img src={img} alt="" />
       <h4>{tel}</h4>
       <br />
       <hr />
    </>
  )
}

export default Person