import React, { useEffect, useState } from "react";
import UsersCard from "./UsersCard";

const Users = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    getDataViaFetch();
  }, []);

  const getDataViaFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((jsonData) => setUsers(jsonData));
  };

  
  
 

  // console.log(users);
  return (
    <div>
      <h1>USER LIST</h1>
      <button className="btn btn-success disabled" onClick={getDataViaFetch}>
        disabled for now
      </button>
      <hr className="w-25" />

      <div className="row">
        {
          users.map((eachUser, i) => (
            <UsersCard key={i} {...eachUser} />
          ))
          // users.map((eachUser,i)=> <UsersCard key={i} eachUser={eachUser}/>)
        }
      </div>
    </div>
  );
};

export default Users;
