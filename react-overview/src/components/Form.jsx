import React, { useState } from "react";

const Form = () => {
    const [updateMail, setUpdateMail] = useState('My Email address')
    const [updateName, setUpdateName] = useState('')
    const [updatePass, setUpdatePass] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(`mail:${updateMail}`)
        setUpdateMail('')
        setUpdateName('')
        setUpdatePass('')
        console.log(e.target)
    }

  return (
    <div className="w-25 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            {updateMail}
          </label>
          <input onChange={(e)=>setUpdateMail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            value={updateMail}
          />
        </div>
        
        <div className="mb-2">
          <label htmlFor="name" className="form-label">
          {updateName}
          </label>
          <input
          onChange={(e)=>setUpdateName(e.target.value)}
            type="name"
            className="form-control"
            id="name"
            value={updateName}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="form-label">
          {updatePass}
          </label>
          <input
          onChange={(e)=>setUpdatePass(e.target.value)}
            type="password"
            className="form-control"
            id="password"
            value={updatePass}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
