import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoFunc, clearAllFunc } from "../../redux/actions/todoAction";
import ReduxTodoItem from "./ReduxTodoItem";


const ReduxTodoApp = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch()
  const todoList = useSelector((state)=>state.myTodoKey.todoArr)

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo("");
    dispatch(addTodoFunc(todo))
  };
  const handleClearAll = () =>{
    dispatch(clearAllFunc())
  }

  return (
    <div className="d-flex flex-column gap-3 justify-content-center align-items-center h-100 bg-warning mt-5">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={todo} />
        <button disabled={!todo} className="btn btn-light text-dark">
          ekle
        </button>
      </form>
      <ul className="list-unstyled">
        {todoList?.map((item, index) => {
          return <ReduxTodoItem key={index} item={item}/> ;
        })}
      </ul>
      <div>
        <button className="btn btn-danger" onClick={handleClearAll}>clear ALL</button>
      </div>
    </div>
  );
};

export default ReduxTodoApp;
