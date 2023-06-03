import React from "react";
const GetNotes=(props)=>{
    const {note,deleteNote}=props
    return(
        <>
       <h1>{note.title}</h1>
       <p>{note.description}</p>
       <p>{note.tag}</p>
       <button onClick={()=>{deleteNote(note._id)}}>Delete</button>
       <button >Edit</button>
        </>
    )
}
export default GetNotes