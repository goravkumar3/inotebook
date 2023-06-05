import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../../context/noteContext";
import GetNotes from "./GetNotes";
import AddNotes from "./addNotes";
const Notes = () => {
  const context = useContext(NoteContext);
  const { note, get, deleteNotes, editNote } = context;
  useEffect(() => {
    get();
  }, []);
  const refOpen = useRef(null);
  const refClose = useRef(null);
  const update = (currentNote) => {
    refOpen.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const [enote, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const onhandler = (e) => {
    e.preventDefault();
    editNote(enote.id, enote.etitle, enote.edescription, enote.etag);
    refClose.current.click();
  };
  const onchange = (e) => {
    setNote({ ...enote, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={refOpen}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <input
                  type="text"
                  placeholder="Title"
                  name="etitle"
                  value={enote.etitle}
                  onChange={onchange}
                />
                <br />
                <input
                  type="text"
                  placeholder="Description"
                  name="edescription"
                  value={enote.edescription}
                  onChange={onchange}
                />
                <br /> <br />
                <input
                  type="text"
                  placeholder="Tag"
                  name="etag"
                  value={enote.etag}
                  onChange={onchange}
                />
                <br />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onhandler}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1>Your Notes</h1>
      <AddNotes />
      {note.map((notes) => {
        return (
          <GetNotes note={notes} deleteNote={deleteNotes} updatenote={update} />
        );
      })}
    </div>
  );
};
export default Notes;
