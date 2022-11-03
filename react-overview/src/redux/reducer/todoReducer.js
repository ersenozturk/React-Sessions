import {
  ADD_TODO,
  CLEARALL_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoTypes";

const initialState = {
  // state.todoArr -->bu
  todoArr: [
    // {
    //   id: new Date().getTime(),
    //   completed: true,
    //   text: " excited on redux :) ",
    // },
  ],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoArr: [
          ...state.todoArr,
          {
            id: new Date().getTime(),
            completed: false,
            text: payload,
          },
        ],
      };
    case DELETE_TODO:
      return {
        todoArr: [
          
        ],
      };

    case TOGGLE_TODO:
      return {
        todoArr: [
          state.todoArr.map((each) => {
            return each.id === payload
              ? { ...each, completed: !each.completed }
              : each;
          }),
        ],
      };
    case CLEARALL_TODO:
      return initialState;

    default:
      return state;
  }
};
