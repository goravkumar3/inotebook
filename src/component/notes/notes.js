import React,{useContext,useEffect}from "react";
import NoteContext from "../../context/noteContext";
import GetNotes from './GetNotes'
const Notes=()=>{
    const context=useContext(NoteContext)
    const {note,get}=context
    useEffect(()=>{
      get()
    },[])
    return(
        <div>
            <h1>Your Notes</h1>
        {note.map((notes)=>{
          return(<GetNotes note={notes}/>)
        })}
        </div>
    )
}
export default Notes;