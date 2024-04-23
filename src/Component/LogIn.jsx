import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";

function LogIn() {
  let [auth,setAuth] = useAuth();
  let navigate = useNavigate();

  let [formData, setData] = useState({
    email: "",
    password: ""
  });
  function formDataHandler(e) {
    setData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  }
  function SigninHandler() {
    return navigate("/");
  }
  function SubmitHandler(e) {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      console.log("All field are required");
      toast("All field are required");
    }
    if (formData.email === auth.email && formData.password === auth.password) {
      setAuth((pre)=>{
        return {...pre,ok:true}
      })
      toast("Login Successfully");
      navigate("/input");
    }

    if(formData.email !== auth.email || formData.password !== auth.password) {
      toast("Either email or Password is not invalid");
    }
  }
  return (
    <div className="container  align-items-center w-50 mx-10 my-5 ">
      <h1 className="text text-center">Login Form</h1>
      <form>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={formDataHandler}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              name="password"
              className="form-control"
              id="inputPassword3"
              value={formData.password}
              onChange={formDataHandler}
              placeholder="Enter your password"
            />
          </div>
        </div>
        <a
          type="submit"
          className="m-3 "
          onClick={SigninHandler}
        >
          Not Registered click here
        </a>
        <br />
        <button
          type="submit"
          className="btn btn-primary "
          onClick={SubmitHandler}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default LogIn;
