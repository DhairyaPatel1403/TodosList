import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title && !desc){
            alert("Information can't be blank!")
        }
        else if(!title || !desc){
            alert("Title or Description can't be blank!")
        }
        else{
            props.addTodo(title, desc);
        }
    }
  return (
    <>

    <br/><br/>
    <center><h1 className="display-2">Todos List</h1></center>
    <center>
      <form className="card" onSubmit={submit} style={{width: "25rem"}}>
        <div className="mb-3">
          <label htmlFor="todoname" className="form-label">
            ToDo's Name
          </label>
          <input value={title} onChange={(t)=>{setTitle(t.target.value)}} style={{width: "18rem"}}
            className="form-control"
            id="todoname"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="tododesc" className="form-label">
            Todo's Description
          </label>
          <textarea value={desc} onChange={(d)=>{setDesc(d.target.value)}} style={{width: "18rem"}}
            className="form-control"
            id="tododesc"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
      </center>
      <br/><br/>
      <hr/>
    </>
  );
};