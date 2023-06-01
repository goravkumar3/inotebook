import React from "react";
import { Route,BrowserRouter,Routes} from "react-router-dom";
import { SignUp,Login,Notes,About } from "../../component/pages";

const Navigate=()=>{
      // const loction=useLocation()
      return(
      <BrowserRouter>
      <Routes >
         <Route path="/" element={<SignUp/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/notes" element={<Notes/>} />
         <Route path="/about" element={<About/>} />
      </Routes>
      </BrowserRouter>
      )
}
export default Navigate