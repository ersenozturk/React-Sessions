import './App.css';
import useFetch from './hooks/useFetch';

function App() {

  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/todos')

/*   fetch('https://jsonplaceholder.typicode.com/todows')
  .then(response => {
    console.log(response);
    return response.json()
  })
  .then(data => console.log(data)); */

  return (
    <div className="App">
      <h1>Custom Hook</h1>
      {
        data?.map((each)=> {
          return (
            <div key={each.id}>
              <h4 >{each.title}</h4>
            </div>
          )
        })
      }

      {loading && <p>LOADIIIIIIING</p> }
      {error && <p>{error}</p> }
    </div>
  );

}

export default App;
