import {useState} from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const host = "http://127.0.0.1:5000";
    const navigate=useNavigate()
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const signup = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({name:data.name,email:data.email,password:data.password}), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        localStorage.setItem('token',json.token)
        navigate("/notes")
    }
  };
  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={signup}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            onChange={onchange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={onchange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default SignUp;
