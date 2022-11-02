import { useReducer } from "react";
import { initialState, reducer } from "./reducer";

const ReducerExercise = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { dog, error, loading } = state;

  const dogFetchng = async () => {
    dispatch({ type: "INITIAL" });
    try {
      const req = await fetch("https://dog.ceo/api/breeds/image/random");
      const res = await req.json();
      const dogImage = res.message
      dispatch({ type: "SUCCESS", payload: dogImage });
    } catch (error) {
      dispatch({ type: "ERROR", payload: 'erROROROOROROR' });
    }
  };


  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <button style={{ padding: "1rem 5rem" }} onClick={dogFetchng} >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="" style={{ width: "30rem", height: "30rem" }} />}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default ReducerExercise;
