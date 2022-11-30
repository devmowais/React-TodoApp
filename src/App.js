import './App.css';
import Header from './components/header';
import TodosApp from './components/todosApp';
import Footer from './components/footer';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("Checking...", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    
  }



  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Project1",
      desc: "Working on it!"
    },
    
    {
      sno: 2,
      title: "Project2",
      desc: "Working on it!"
    },
    
    {
      sno: 3,
      title: "Project3",
      desc: "Working on it!"
    },
    
    {
      sno: 4,
      title: "Project4",
      desc: "Working on it!"
    }
  ]
  );
  return (
    <>
      <Header />
      <TodosApp todos={todos} onDelete={onDelete} />
      <Footer />
    </>

  );
}

export default App;
