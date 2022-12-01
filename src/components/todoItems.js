import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


export const AddTodo = ({ addTodo }) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
  return (
    <>
      <div className='addContainer'>
        <h3>Add a Todo</h3>
        
            <Form onSubmit={submit}>
      <Form.Group className="mb-3">
        <Form.Label className='title'>Title</Form.Label>
        <Form.Control className='w-50 form-control' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control className='w-50 form-control' type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter description" />
      </Form.Group>
      <button className="btn-add" type="submit">
        Add Todo
      </button>
    </Form>
      </div >
    </>
  )
}


// Using Elements destructuring instead of props
export const TodoItems = ({ todo, onDelete }) => {
  return (
    <div> 
      <h4>{todo.title}</h4>
      <p className='todoTasks'>{todo.desc}</p>
      <button className='btn-del' onClick={() => { (onDelete(todo)) }}>Delete</button>
    </div>
  )
}
