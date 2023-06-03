import React,{useState} from 'react'
function addNotes(props) {
    const {add}=props
    const [note,setNote] = useState({title:'',description:'',tag:'default'})
    const onhandler=()=>{
        add(note.title,note.description,note.tag);
    }
    const onchange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <input type='text' placeholder='Title' name="title" onChange={onchange}/><br/>
      <input type='text' placeholder='Description' name="description" /><br/>
      <input type='text' placeholder='Tag' name="tag" /><br/>
      <button type='submit' onClick={onhandler}>Add</button>
    </div>
  )
}
export default addNotes