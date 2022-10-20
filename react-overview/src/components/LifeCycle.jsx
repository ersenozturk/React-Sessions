import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const sayiArtir = () => {
    setCount(count + 1);
  };
  const fetchData = () => {
    console.log("Data Fetched");
  };

  useEffect(() => {
    const timerID = setInterval(fetchData, 1000);
    console.log("mounted+++++++++++++++");
    return () => {
      clearInterval(timerID);
      console.log("unmounted----");
    };
  }, []);

  
  console.log("redndered");
  return (
    <div>
      <h3>COUNT:{count}</h3>
      <button className="btn btn-primary" onClick={sayiArtir}>
        ARTIR
      </button>
    </div>
  );
};

export default LifeCycle;
