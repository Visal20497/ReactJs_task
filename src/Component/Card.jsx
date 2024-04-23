import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

function Card() {
  const { todo,search } = useSelector((state) => state.TextReducer);
  const dispatch = useDispatch();

  const delHandler = useCallback(
    (id) => {
      dispatch({ type: "DEL", payload: { id } });
    },
    [dispatch]
  );

  const editHandler = useCallback(
    (id) => {
      dispatch({ type: "EDIT", payload: { id } });
    },
    [dispatch]
  );

  return (
      <div className="container">
        <div className="row d-flex justify-content-start">
       
      <div className="col-md-4 border ">
          <h1>Notes :</h1><br />
        <div className="d-flex flex-wrap justify-content-start">   
      { todo.length === 0   && <h3>Please insert your todo....</h3>}
      {search.length===0 && todo.length > 0  && todo.filter(item => item.pass === "New Todo").map(({ id, username, pass,title }) => (
          <div className="col-md-6 mb-3" key={id}>
            <div className="card">
              <div className="card-body">
                <div className="card-title">Title : {title}</div>
                <div className="card-text"> {username}</div>
                <div className="card-text">{pass}</div>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => delHandler(id)}
                >
                  Remove Data
                </button>
                <button className="btn btn-primary" onClick={() => editHandler(id)}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      {search.length>0  && search.filter(item => item.pass === "New Todo").map(({ id, username, pass,title }) => (
          <div className="col-md-6 mb-3" key={id}>
            <div className="card">
              <div className="card-body">
                <div className="card-title">Title : {title}</div>
                <div className="card-text"> {username}</div>
                <div className="card-text">{pass}</div>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => delHandler(id)}
                >
                  Remove Data
                </button>
                <button className="btn btn-primary" onClick={() => editHandler(id)}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
        </div>
    <div className="col-md-4 border">
      <h1>Inprogress :</h1>
      <div className="d-flex flex-wrap justify-content-start">   
      {todo.length === 0   && <h3>Please insert your todo....</h3>}
      { search.length===0 && todo.length > 0 && todo.filter(item => item.pass === "incomplete")
        .map(({ id, username, pass,title }) => (
          <div className="col-md-6 mb-3" key={id}>
            <div className="card">
              <div className="card-body">
              <div className="card-title">Title : {title}</div>
                <div className="card-text">{username}</div>
                <div className="card-text">{pass}</div>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => delHandler(id)}
                >
                  Remove Data
                </button>
                <button className="btn btn-primary" onClick={() => editHandler(id)}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
        {search.length > 0 && search.filter(item => item.pass === "incomplete")
        .map(({ id, username, pass,title }) => (
          <div className="col-md-6 mb-3" key={id}>
            <div className="card">
              <div className="card-body">
              <div className="card-title">Title : {title}</div>
                <div className="card-text">{username}</div>
                <div className="card-text">{pass}</div>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => delHandler(id)}
                >
                  Remove Data
                </button>
                <button className="btn btn-primary" onClick={() => editHandler(id)}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
    <div className="col-md-4 border">
      <h1>Completed :</h1>
      <div className="d-flex flex-wrap justify-content-start">   
      {todo.length === 0   && <h3>Please insert your todo....</h3>}
      { search.length===0  && todo.filter(item => item.pass === "completed")
        .map(({ id, username, pass,title }) => (
          <div className="col-md-6 mb-3" key={id}>
            <div className="card">
              <div className="card-body">
              <div className="card-title">Title : {title}</div>
                <div className="card-text">{username}</div>
                <div className="card-text">{pass}</div>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => delHandler(id)}
                >
                  Remove Data
                </button>
                <button className="btn btn-primary" onClick={() => editHandler(id)}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
         {search.length > 0  && search.filter(item => item.pass === "completed")
        .map(({ id, username, pass,title }) => (
          <div className="col-md-6 mb-3" key={id}>
            <div className="card">
              <div className="card-body">
              <div className="card-title">Title : {title}</div>
                <div className="card-text">{username}</div>
                <div className="card-text">{pass}</div>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => delHandler(id)}
                >
                  Remove Data
                </button>
                <button className="btn btn-primary" onClick={() => editHandler(id)}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
        </div>
      </div>
    
  );
}

export default React.memo(Card);
