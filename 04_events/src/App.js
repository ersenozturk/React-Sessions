import './App.css';
import KeyboardEvents from './components/keyboardEvents/KeyboardEvents';
import Form from './components/form/Form';
import MouseEvents from './components/mouseEvents/MouseEvents';
import AddEvents from './components/addEvents/AddEvents';
import EventBind from './components/eventBinding/EventBind';

function App() {
  return (
    <div className="App">
      <h1>Events in React Js with ersenozturk</h1>
      <AddEvents/>
      <hr />
      <MouseEvents/>
      <hr />
      <KeyboardEvents/>
      <hr />
      {/* <Form/> */}
      <hr />
      <EventBind/>
    </div>
  );
}

export default App;
