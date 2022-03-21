// rafce

const myStyle = {
  color: "green",
  backgroundColor: "blue",
};

const myStyle2 = {
  parag: {
    marginTop: "250px",
    padding: "10px",
    fontWeight: "bolder",
  },
  div: {
    fontSize: "3.2rem",
    backgroundColor: "gray",
  },
};

const Inline = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          color: "#fff",
        }}
      >
        <h1>Hello from inline CSS</h1>
        <h2 style={myStyle}>This is inline CSS by js object :)</h2>

        <div style={myStyle2.div}>
          <p style={myStyle2.parag}>MyStyle2 updated my p block</p>
        </div>
      </div>
    </>
  );
};

export default Inline;
