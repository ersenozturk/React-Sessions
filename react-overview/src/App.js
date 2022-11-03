import { useState } from "react";
import ReduxInfo from "./components/reduxInfo/ReduxInfo";


// import Events from "./components/Events";
// import Main from "./components/Main";
// import UseState from './components/UseStete'
// import Form from "./components/Form";
// import FormObject from "./components/FormObject";
// import LifeCycle from "./components/LifeCycle";
// import Users from "./components/Users";
// import AddHome from "./components/AddYourTutorials/AddHome";
// import ReducerExercise from "./components/reducerExercise/ReducerExercise";
// import NormalTodo from "./components/reducerExercise/todo-reducer/NormalTodo";
// import ReducerTodo from "./components/reducerExercise/todo-reducer/ReducerTodo";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {/* <Main/> */}
      {/* <Events/> */}
      {/* <UseState /> */}
      {/* <Form/> */}
      {/* <FormObject /> */}
      {/* <button className="btn btn-danger" onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
      </button>
      {show && <LifeCycle />} */}
      {/* <Users /> */} {/*---> useFetch */}
      
      {/* <AddHome /> */}

      {/* <ReducerExercise/> */}
      
      {/* <NormalTodo /> */}
      {/* <ReducerTodo/> */}

      <ReduxInfo/>
    </div>
  );
}

export default App;
