import './App.css';
import Header from './components/header';
import TodosApp from './components/todosApp';
import Footer from './components/footer';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './components/todoItems';
import { About } from './components/About';
import  Calendar from './components/Cal/Calendar';
import { Calculation } from './components/Calculation';
import { Contact } from './components/Contact';

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";





function App() {

  const getMonthName = ['Jan,', 'Feb,', 'Mar,', 'Apr,', 'May,', 'Jun,', 'Jul,', 'Aug,', 'Sep,', 'Oct,', 'Nov,', 'Dec'][new Date().getMonth()];

  let time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} | ${new Date().getDate()}/${getMonthName}/${new Date().getFullYear()}`;
  
  const times = time.toString();
  // console.log(times)

  
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    // console.log("I am ondelete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc, time) => {
    time = times;
    // console.log("I am adding this todo",  title, desc, time)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      time: times,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
          <Route exact path="/" element={
              <>
              <AddTodo addTodo={addTodo} />
              <TodosApp todos={todos} onDelete={onDelete} />
              </>
            
          }/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/calender" element={<Calendar />}/>
          <Route exact path="/calculation" element={<Calculation />}/>
          <Route exact path="/contact" element={<Contact />}/>
         
        </Routes>

      
      
        <Footer />
        </BrowserRouter>
    </>

  );
}

export default App;
