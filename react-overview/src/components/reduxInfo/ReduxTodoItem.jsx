import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTodoFunc, toggleFunc } from "../../redux/actions/todoAction";

const ReduxTodoItem = ({ item }) => {
  const { id, text, completed } = item;
  const dispatch = useDispatch();

  const handleToggle = (e) => {
    const clickedID = e.target.parentElement.parentElement.parentElement.id;
    dispatch(toggleFunc(clickedID));
    // console.log(e.target.parentElement.parentElement.parentElement.id)
  };

  const handleDelete = (e) => {
    const clickedID = e.target.parentElement.parentElement.parentElement.id;
    dispatch(deleteTodoFunc(clickedID));
  };

  const styled = {
    textDecoration: completed ? "line-through" : "",
    backgroundColor: completed ? "blue" : "red",
  };
  return (
    <li id={id} style={styled} className="my-3 border border-2 p-2 rounded">
      {text}
      <button className="mx-4">
        <span>
          <AiOutlineDelete onClick={handleDelete} />
        </span>
      </button>
      <button>
        <span>
          <AiOutlineCheck onClick={handleToggle} />
        </span>
      </button>
    </li>
  );
};

export default ReduxTodoItem;
