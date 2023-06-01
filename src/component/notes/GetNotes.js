import React from "react";
const GetNotes=(props)=>{
    const {note}=props
    return(
        <>
       <h1>{note.title}</h1>
        </>
    )
}
export default GetNotes