import { useState } from "react";
import "./App.css";
// import Events from "./components/Events";
// import Main from "./components/Main";
// import UseState from './components/UseStete'
// import Form from "./components/Form";
// import FormObject from "./components/FormObject";
// import LifeCycle from "./components/LifeCycle";
// import Users from "./components/Users";
import AddHome from "./components/AddYourTutorials/AddHome";

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

      {/* <Users /> */}   {/*---> useFetch */}

      <AddHome />
    </div>
  );
}

export default App;
