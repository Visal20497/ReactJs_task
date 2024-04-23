import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import Search from "./Search";
import toast from "react-hot-toast";

function Input() {
  let { name, pass, edit,title } = useSelector((item) => {
    return item.TextReducer;
  });

  function submitHandler() {
    let obj = {
      id: Math.trunc(Math.random() * 1000),
      username: name,
      pass: pass,
      title:title
    };
    if (name && pass && title) {
      dispatch({ type: "SUBMIT", payload: obj });
      toast("New notes added")
    }
  }
  let dispatch = useDispatch();

  return (
    <>
    <Navbar/>
      <div className="container-fluid  p-5 b-black" style={{ width: "40%" }}>
        <div className="row m-2">
          <label className="col"><strong>NOTES:</strong> </label>
          <input
            className="col"
            type="text"
            value={name}
            placeholder="Enter your notes details..."
            onChange={(e) =>
              dispatch({ type: "NAME", payload: e.target.value })
            }
          />
          <br />
          <br />
        </div>
        <div className="row m-2 ">
          <label className="col "><strong>TITLE :</strong></label> 
           <input
            className="col"
            type="text"
            placeholder="Enter your title..."
            value={title}
            onChange={(e) => {
              dispatch({ type: "TITLE", payload: e.target.value });
            }}
          />
          <select  className="m-2" value={pass}  onChange={(e) => {
              dispatch({ type: "PASS", payload: e.target.value });
            }} >
            <option value=''>Select_Type</option>
            <option disabled></option>
            <option value='New Todo'>New notes</option>
            <option disabled></option>
            <option value='incomplete'>Incomplete</option>
            <option disabled></option>
            <option value='completed'>Completed</option>
            <option disabled></option>
          </select>
        </div>
        <div className="row">
          <button
            className="col btn btn-primary"
            onClick={() => {
              submitHandler();
            }}
          >
            {edit?"EDIT":"Add Todo"}
          </button>
        </div>
      </div>
      <hr />
      <Search/>
      
      <hr />
      <Card />
    </>
  );
}

export default Input;
