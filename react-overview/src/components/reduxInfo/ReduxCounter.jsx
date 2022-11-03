import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  downFunc,
  resetFunc,
  upFunc,
} from "../../redux/actions/counterActions";

const ReduxCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.myCounterKey.counter;
  });
  return (
    <div className="d-flex flex-column gap-3 justify-content-center align-items-center h-100 bg-info">
      <h1>Counter With Redux</h1>
      <p>
        counter: <span>{counter}</span>
      </p>
      <div className="d-flex gap-3">
        <button
          className="btn btn-success inc"
          onClick={() => dispatch(upFunc())}
        >
          INC
        </button>
        <button
          className="btn btn-dark inc"
          onClick={() => dispatch(resetFunc())}
        >
          ZERO
        </button>
        <button
          className="btn btn-warning inc"
          onClick={() =>
            // dispatch({
            //   type: DOWN,
            // })
            dispatch(downFunc())
          }
        >
          DEC
        </button>
      </div>
    </div>
  );
};

export default ReduxCounter;
