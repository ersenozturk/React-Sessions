import React, { useEffect, useState } from "react";

// const UsersCard = ({eachUser}) => {
const UsersCard = (eachUser) => {

  const [fotos, setfotos] = useState('')
  const {id,name, company:{catchPhrase : slogan}, address:{geo:{lng:enlem}}} = eachUser

  const getImgsViaFetch = () => {
    fetch('https://i.pravatar.cc/300/1')
      .then((response) => response.json())
      .then((jsonData) => setfotos(jsonData));
  };
  
  
  return (
    <div className="col col-sm-6 col-md-4 col-lg-3 p-3 m-3">
      <div className="card bg-info">

        <img src={fotos} alt="fff" />
        <div className="card-body">
          <h5 className="card-title">şirket ismi===={name}</h5>
          <h5 className="card-title">{slogan}</h5>
          <h5 className="card-title">{enlem}</h5>
        </div>
      </div>
      </div>
  );
};

export default UsersCard;
