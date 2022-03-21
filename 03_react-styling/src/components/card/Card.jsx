import "./Card.scss";

const Card = ({ veri }) => {
  return (
    <div className="container">
      {veri.map((eleman) => {
        //destructuring
        const { id, countries, capital, img, population } = eleman;
        return (
          <div className="card" key={id}>
            <h1>{countries}</h1>
            <img src={img} />
            <h2> {capital}</h2>
            <h4>{population}</h4>

            <button className="card--small">SMALL</button>

            <button className="card--large">LARGE</button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
