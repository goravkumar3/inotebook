import {useState} from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const s=[]
    const host="http://127.0.0.1:5000"
    const [note,setNote]=useState(s)
    const get=async ()=>{
        const response = await fetch(`${host}/api/notes/fetchNotes`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2YjY0ZTk2YzEzYzIyNzFiNWQ0Y2FmIn0sImlhdCI6MTY4NDc1OTg4MX0.GIg2Jd9MOR_gbI-c713mbeQR3ik1sZUuKKNbL4odkNg"
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }, // body data type must match "Content-Type" header
          });
          const json=await response.json();
          console.log(json)
          setNote(json)
    }
    return(
        <NoteContext.Provider value={{note,get}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;