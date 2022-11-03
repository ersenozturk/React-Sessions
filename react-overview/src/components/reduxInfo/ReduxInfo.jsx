import React from "react";
import ReduxCounter from "./ReduxCounter";
import ReduxTodoApp from "./ReduxTodoApp";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../../redux";

const ReduxInfo = () => {
    const store = createStore(reducer)
  return (
    <div>
      <Provider store={store}>
        <ReduxCounter />
      {/* <ReduxTodoApp/> */}
      </Provider>
    </div>
  );
};

export default ReduxInfo;
