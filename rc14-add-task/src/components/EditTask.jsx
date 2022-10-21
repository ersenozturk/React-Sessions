import React, { useState,useEffect } from "react";

const EditTask = ({ updateTask, editItem }) => {
  const {id, title: editedTitle, description: editedDesc } = editItem;

  const [eTitle, setETitle] = useState(editedTitle);
  const [eDesc, setEDesc] = useState(editedDesc);

  useEffect(() => {
    setETitle(editedTitle)
    setEDesc(editedDesc)
  }, [editedTitle,editedDesc])
  

  const handleModal = (e) => {
    e.preventDefault()
    setETitle('')
    setEDesc('')
    updateTask(id,{title:eTitle, description:eDesc})
    // updateTask(id,eTitle,eDesc)
    
  };
  return (
    <div className="modal" tabIndex="-1" role="dialog" id="editCompModal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Your Task</h5>
            <button
              type="button"
              className="close btn btn-outline-success"
              data-bs-dismiss="modal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  onChange={(e) => setETitle(e.target.value)}
                  type="text"
                  className="form-control"
                  id="title"
                  value={eTitle || ''}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="desc" className="form-label">
                  Description
                </label>
                <input
                  onChange={(e) => setEDesc(e.target.value)}
                  type="text"
                  className="form-control"
                  id="desc"
                  name="desc"
                  value={eDesc || ''}
                />
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button
              onClick={handleModal}
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
