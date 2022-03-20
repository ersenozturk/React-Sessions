import Person from "./components/Person";

function App() {
  return (
    <>
      <Person
        name="lake"
        img="https://cdn.pixabay.com/photo/2020/03/26/10/58/norway-4970080__340.jpg"
        tel="1234567890"
      />

      <Person
        name="eye"
        img="https://cdn.pixabay.com/photo/2020/06/01/22/23/eyes-5248678__340.jpg"
        tel="1234567890"
      />

      <Person
        name="ersen"
        img="https://cdn.pixabay.com/photo/2020/01/23/16/42/embrace-4788167__340.jpg"
        tel="1234567890"
      />
    </>
  );
}

export default App;
