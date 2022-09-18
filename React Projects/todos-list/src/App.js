
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import React, { useState } from 'react';


function App() {
  const onDelete = (todo)=>{ 
    console.log("I'm on delete of todo!!!",todo);
    // Deleting this in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo =(title, desc)=>{
    console.log("I'm adding",title,desc);
    let sno;
    if (todos.length==0){
      sno=0
    }
    else{
    sno = todos[todos.length-1].sno+1;
  }
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to market to get your job done"
    },
    {
      sno: 2,
      title: "Go to the School",
      desc: "You need to go to School to get your job done"
    },
    {
      sno: 3,
      title: "Go to the University",
      desc: "You need to go to University to get your job done"
    }
  ]);
  return (
<>
 <Header title="My Todos List" SearchBar={false}/>
 <AddTodo addTodo={addTodo}/>
 <Todos todos={todos} onDelete={onDelete}/>
 <Footer/>

</>
  );
}

export default App;
