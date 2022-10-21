import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import EditTask from "./EditTask";

const TaskList = ({ tasks, deleteTask,updateTask }) => {
    const [editItem, setEditItem] = useState('')
  return (
    <div>
      <table className="table my-4 table-striped table-light text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((eachTask) => {
            const {id,title,description} = eachTask
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <AiFillDelete size={25} className="text-danger" onClick={()=>deleteTask(id)} />

                  <AiFillEdit size={25} className="text-info" 
                  onClick={()=>setEditItem(eachTask)} data-bs-toggle="modal" data-bs-target="#editCompModal"/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>


      <EditTask updateTask={updateTask} editItem={editItem}/>

    </div>
  );
};

export default TaskList;
