import React from "react";
import Navigate from "./config/Router/navigate";
import NoteState from "./context/noteState";
function App() {
  return (
    <div className="App">
      <NoteState>
     <Navigate/>
     </NoteState>
    </div>
  );
}

export default App;
