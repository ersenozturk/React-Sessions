import React, { useState } from "react";

const AddTutor = ({ addTutorials }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('')
    setDesc('')
    addTutorials({
      title:title,
      description: desc
    });

  };

  return (
    <div>
      <form className="mx-auto text-center" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="textTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="textTitle"
            name="textTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="textDesc" className="form-label">
            textDesc
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="textDesc"
            name="textDesc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTutor;
