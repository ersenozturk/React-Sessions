import React from 'react'
import { useState } from 'react'

const NormalTodo = () => {
    const [allTodoLiat, setAllTodoLiat] = useState([])
    const [todo, setTodo] = useState('');

    const handleTODO = (e) => {
        e.preventDefault()
        setAllTodoLiat([...allTodoLiat,todo])
        setTodo('')
    }
  return (
    <div>
        <h1>normalTodo</h1>
        <form onSubmit={handleTODO}>
            <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button disabled={!todo} type="submit">create todo</button>
        </form>
        <ul>
        {allTodoLiat?.map((eachTodo,i)=> <li key={i}>{eachTodo}</li>)}
        </ul>
    </div>
  )
}

export default NormalTodo