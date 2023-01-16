import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
        <div className="card" style={{width: "18rem"}}>
            <center>
        <div className="card-body">
            <h5 className="card-title">{todo.title}</h5>
            <p className="card-text">{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Mark Done</button>
        </div>
        </center>
        </div>

    </>
  )
}
