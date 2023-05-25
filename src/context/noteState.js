import {useState} from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const s={
        "name":"Gorav",
        "email":"kg558390@gmail.com"
    }
    const [state,setState]=useState(s)
    const update=()=>{
        setTimeout(() => {
            setState({
                "name":"Akasha",
                "email":"ak23@gmail.com"
            })
        }, 3000);
    }
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;