import { useEffect } from "react";
import { useState } from "react";

const NormalState = () => {
  const [loading, setLoading] = useState(false);
  const [dog, setDog] = useState("");
  const [error, setError] = useState(false);

  const dogFetchng = async () => {
    const req = await fetch("https://dog.ceo/api/breeds/image/random");
    const res = await req.json();
    const dogImage = res.message;
    setDog(dogImage);
  };

  useEffect(() => {
    setLoading(true);
    try {
      dogFetchng();
      setLoading(false);
    } catch (error) {
        setError("something went WRONG")
        setLoading(false);
    }
  }, []);

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
      <button style={{ padding: "1rem 5rem" }} onClick={dogFetchng}>
        Fetch Dog
      </button>
      <img src={dog} alt="" style={{ width: "30rem", height: "30rem" }} />
    </div>
  );
};

export default NormalState;
