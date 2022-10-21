import React, { useState } from "react";

const AddTask = ({postTask}) => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    
    const formSubmit = (e) =>{
        e.preventDefault()
        postTask({title:title,description:desc})
        setTitle('')
        setDesc('')
    }

  return (
    <div className="container text-center">
      <h1>ADD YOUR TASK</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
          onChange={(e)=>setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="title"
            value={title}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
          onChange={(e)=>setDesc(e.target.value)}
            type="text"
            className="form-control"
            id="desc"
            name="desc"
            value={desc}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Task Submit
        </button>
      </form>
    </div>
  );
};

export default AddTask;
