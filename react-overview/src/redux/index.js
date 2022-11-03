import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducer/counterReducer";
import { todoReducer } from "./reducer/todoReducer";

const myRootReducer = combineReducers({
  myCounterKey: counterReducer,
  myTodoKey: todoReducer,
});

export const myGetStore = () => {
  const store = createStore(myRootReducer);
  return store;
};
