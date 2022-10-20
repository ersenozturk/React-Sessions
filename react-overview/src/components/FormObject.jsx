import React, { useState } from "react";

const FormObject = () => {
  const [frmValue, setFrmValue] = useState({
    email: "",
    name: "",
    pass: "",
  });

const handleObjForm = (e) =>{
    // console.log(e.target.value);
    // console.log(e.target.name);
    // console.log(e.target.id);
    setFrmValue({...frmValue, [e.target.name]:e.target.value })
}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className="w-25 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email:{frmValue.email}
          </label>
          <input
            onChange={(e) =>
              setFrmValue({ ...frmValue, email: e.target.value })
            }
            type="email"
            className="form-control"
            id="email"
            value={frmValue.email}
            name='email'
          />
        </div>

        <div className="mb-2">
          <label htmlFor="name" className="form-label">
            İsim:{frmValue.name}
          </label>
          <input
            onChange={handleObjForm}
            type="name"
            className="form-control"
            id="name"
            value={frmValue.name}
            name='name'
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="form-label">
            Pass:{frmValue.pass}
          </label>
          <input
            onChange={handleObjForm}
            type="password"
            className="form-control"
            id="password"
            value={frmValue.pass}
            name='pass'
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormObject;
