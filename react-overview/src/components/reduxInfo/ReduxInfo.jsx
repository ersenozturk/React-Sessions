import ReduxCounter from "./ReduxCounter";
import ReduxTodoApp from "./ReduxTodoApp";
import { Provider } from "react-redux";
import { myGetStore } from "../../redux";

const ReduxInfo = () => {
  const store = myGetStore();
  return (
    <div>
      <Provider store={store}>
        <ReduxCounter />
        <ReduxTodoApp />
      </Provider>
    </div>
  );
};

export default ReduxInfo;
