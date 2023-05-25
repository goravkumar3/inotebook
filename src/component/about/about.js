import {useContext,useEffect} from "react";
import NoteContext from "../../context/noteContext";
const About=()=>{
    const a=useContext(NoteContext)
     useEffect(()=>{
        a.update()
     },[])
    return(
        <div>
            <h1>About</h1>
            <p>name {a.state.name} and his email  {a.state.email}</p>
        </div>
    )
}
export default About;