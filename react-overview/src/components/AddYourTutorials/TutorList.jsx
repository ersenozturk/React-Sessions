import React from "react";
import { FiEdit3, FiDelete } from "react-icons/fi";

const TutorList = ({ tutorials, deleteTutorials,editTutorials }) => {
  return (
    <div>
      <table className="table-striped w-100">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>

        <tbody>
          {tutorials.map((eachTutor) => {
            const { id, title, description } = eachTutor;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <FiEdit3 size={22} className='text-warning me-3'onClick={(e)=>editTutorials(id,title,description)}/>
                  {/* <FiDelete size={22} className='text-danger' onClick={(e)=>deleteTutorials(id)} /> */}
                  <FiDelete size={22} className='text-danger' onClick={(e)=>deleteTutorials(e.target.id)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorList;
