import React from "react";
const GetNotes=(props)=>{
    const {note,deleteNote,updatenote}=props
    console.log(note._id)
    return(
        <>
       <h1>{note.title}</h1>
       <p>{note.description}</p>
       <p>{note.tag}</p>
       <button onClick={()=>{deleteNote(note._id)}}>Delete</button>
       <button onClick={()=>{updatenote(note)}}>Edit</button>
        </>
    )
}
export default GetNotes