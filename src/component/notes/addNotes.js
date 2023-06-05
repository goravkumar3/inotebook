import {useState,useContext} from 'react'
import NoteContext from "../../context/noteContext";
function AddNotes() {
  const context=useContext(NoteContext)
  const {addNote}=context
    const [note,setNote] = useState({title:'',description:'',tag:'default'})
    const onhandler=(e)=>{
      e.preventDefault();
      addNote(note.title,note.description,note.tag);
    }
    const onchange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <input type='text' placeholder='Title' name="title" onChange={onchange}/><br/>
      <input type='text' placeholder='Description' name="description" onChange={onchange}/><br/>
      <input type='text' placeholder='Tag' name="tag" onChange={onchange}/><br/>
      <button type='submit' onClick={onhandler}>Add</button>
    </div>
  )
}
export default AddNotes