export const initialTodo = {
  todo: "",
  allTodoLiat: [],
};

export const reducer = (state, action) => {
  console.log("action>>>", action);
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        allTodoLiat: [...state.allTodoLiat, action.payload],
        todo: "",
      };

    default:
      break;
  }
};
