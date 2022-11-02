import React, { useReducer } from "react";
import { initialTodo, reducer } from "./reducer";

const ReducerTodo = () => {
  const [state, dispatch] = useReducer(reducer, initialTodo);
  console.log('state>>>',state);

  const handleChange = (e) => {
    dispatch({
      type: "SET_TODO",
      payload: e.target.value,
    });
  };
  const handleSubmit = () => {
    dispatch({
      type:'ADD_TODO',
      payload: state.todo,
    })
  };

  return (
    <div>
      <h1>normalTodo</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input onChange={handleChange} value={state.todo}/>
        <button disabled={!state.todo} type="submit">ekle</button>
      </form>
      <ul>
        {
          state.allTodoLiat.map((x,i)=>{
            return(
              <li key={i}>{x}</li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default ReducerTodo;

// const handleTODO = (e) => {
//     e.preventDefault()
//     setAllTodoLiat([...allTodoLiat,todo])
//     setTodo('')
// }

{
  /* <form onSubmit={handleTODO}>
<input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
<button disabled={!todo} type="submit">create todo</button>
</form>
<ul>
{allTodoLiat?.map((eachTodo,i)=> <li key={i}>{eachTodo}</li>)}
</ul> */
}
