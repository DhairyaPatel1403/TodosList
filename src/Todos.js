import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  return (
    <center>
    <div className="container">
      <br></br>
      {props.todos.length===0 ? //IF
        <div className="card">
        <div className="card-header">
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>Looks like you don't have any task today !!</p>
            <div className="blockquote">Relax or add one.</div>
          </blockquote>
        </div>
      </div>
      :    // ELSE
        props.todos.map((todo)=> {
          return (
          <>
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          <hr/>
          <br></br>
          </>
          )
        })
      }
      
    </div>
    </center>
  )
} 
