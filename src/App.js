import "./App.css";
import Navbar from "./Navbar";
import {Todos} from "./Todos";
import {AddTodo} from "./AddTodo";
import {Footer} from "./Footer";
import {About} from "./About";
import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos")); 
  }
  const addTodo=(title, desc)=>{
    
    let sno;
    if(todos.length==0){
      sno = 0;
    }
    else{
      sno = todos.length;
    }
    const myTodo = {
      title: title,
      desc: desc,
      sno: sno,
    }
    setTodos([...todos, myTodo]);

    

    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const onDelete = (todo)=>{
    console.log("I am onDelete of", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Navbar searchbar={false} wname="ToDo's List"/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <br/><br/>
      <Footer/>
    </>
  );
}

export default App;
