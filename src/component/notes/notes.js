import React,{useContext,useEffect}from "react";
import NoteContext from "../../context/noteContext";
import GetNotes from './GetNotes'
import addNotes from "./addNotes";
const Notes=()=>{
    const context=useContext(NoteContext)
    const {note,get,deleteNotes,addNote}=context
    useEffect(()=>{
      get()
    },[])
    return(
        <div>
            <h1>Your Notes</h1>
          <addNotes add={addNote}/>
        {note.map((notes)=>{
          return(<GetNotes note={notes} deleteNote={deleteNotes}/>)
        })}
        </div>
    )
}
export default Notes;