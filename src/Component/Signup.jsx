import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
  let [auth, setAuth] = useAuth();
  let navigate = useNavigate();
  let [formData, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  function formDataHandler(e) {
    setData((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  }
  function SubmitHandler(e) {
    e.preventDefault();
    console.log(formData);
    if (
      !formData.name ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.email ||
      !formData.phone
    ) {
      console.log("All Field are required *");
      toast("All Field are required *");
    } else {
      if (formData.password === formData.confirmPassword) {
        setAuth(formData);
        console.log("User Registered Successfully");
        navigate("/login");
        toast("User Registered Successfully");
      } else {
        toast("Password or confirmPassword did not match");
      }
    }
  }
  function LoginHandler() {
    return navigate("/login");
  }

  return (
    <div className="container  align-items-center w-50 mx-10 my-5 ">
      <h1 className="text text-center">Registartion Form</h1>
      <form>
        <div className="row mb-3 d-flex">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            UserName
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputName3"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={formDataHandler}
            />
          </div>
        </div>
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
              placeholder="Enter your passowrd"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              id="inputConfirmPassword3"
              value={formData.confirmPassword}
              onChange={formDataHandler}
              placeholder="Enter your Confirm Password"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPhone3" className="col-sm-2 col-form-label">
            Mobile Number
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="inputPhone3"
              name="phone"
              value={formData.phone}
              onChange={formDataHandler}
              placeholder="Enter your mobile number"
            />
          </div>
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary "
          onClick={SubmitHandler}
        >
          Sign in
        </button>
        <a type="submit" className="m-3" onClick={LoginHandler}>
          Already resgistered click here
        </a>
      </form>
    </div>
  );
}

export default Signup;
