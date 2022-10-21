import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import "../scss/home.scss";

const Home = () => {
  const baseURL = "https://axios-example-cw.herokuapp.com/api/tutorials";

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(baseURL);
    setTasks(data);
    console.log(data);
  };

  const postTask = async (xObj) => {
    await axios.post(baseURL, xObj);
    getData();
  };

  const deleteTask = async (deletedID) => {
    await axios.delete(`${baseURL}/${deletedID}`);
    console.log("first");
    getData();
  };

  const updateTask = async (editedID, yObj) => {
    console.log("update func running");
    await axios.put(`${baseURL}/${editedID}`, yObj);
    getData();
  };

  return (
    <div className="homeContainer p-5">
      <AddTask postTask={postTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
};

export default Home;
