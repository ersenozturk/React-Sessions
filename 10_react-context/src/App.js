import "./App.css";
import WithContextApp from "./withContext/WithContextApp";
// import WihPropsApp from "./withProps/WihPropsApp";

function App() {
  return <div className="App">
    <h1>useContext Session</h1>
    {/* <WihPropsApp/> */}
    <WithContextApp/>
  </div>;
}

export default App;
