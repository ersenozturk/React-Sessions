import React, { useEffect, useState } from "react";
import AddTutor from "./AddTutor";
import TutorList from "./TutorList";
import axios from "axios";

const AddHome = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    getTutorials1();
  }, []);

  const apiURL = "https://axios-example-cw.herokuapp.com/api/tutorials";

  const getTutorials1 = async () => {
    // const data = await axios.get(apiURL);
    // console.log(data.data)

    try {
      const { data } = await axios.get(apiURL);
      // console.log(data);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTutorials = async (xxx) => {
    try {
      await axios.post(apiURL, xxx);
    } catch (error) {
      console.log(error);
    }
    getTutorials1();
  };

  const deleteTutorials = async (deletedTutorID) => {
    try {
      await axios.delete(`${apiURL}/${deletedTutorID}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials1();
  };

  const editTutorials = async (editedID,editedTitle,editedDesc) => {
    const filtered = tutorials.filter((item)=> item.id === editedID )
    console.log(filtered);
    const filterAfterMap = filtered.map(()=>({
      title:editedTitle,
      description:editedDesc
    }))

    try {
      await axios.put(`${apiURL}/${editedID}`,filterAfterMap[0]);
    } catch (error) {
      console.log(error);
    }
    getTutorials1();
  };

  return (
    <div className="container mx-auto my-2 bg-light">
      <h1 className="text-center">Add Your Tutorial</h1>
      <AddTutor addTutorials={addTutorials} />
      <TutorList tutorials={tutorials} deleteTutorials={deleteTutorials} editTutorials={editTutorials}/>
    </div>
  );
};

export default AddHome;

// const getTutorials2 = () => {
//   fetch(apiURL).then((res)=>res.json()).then((jsonData)=> console.log(jsonData))
// }
// getTutorials2()

// const getTutorials1 = async () =>{
//   const veri = await axios.get(apiURL);
//   console.log(veri);
// }

// getTutorials1()
