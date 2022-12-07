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
        <h3 className='text-center mt-3'>Add a Todo</h3>

        <Form onSubmit={submit}>
          <Form.Group className="mb-3">
            <div className='f-c'>
            <div className='form-label w-75  mx-auto'><Form.Label className='title'>Title:</Form.Label></div>
              <Form.Control className='w-75 mx-auto form-control-lg' maxLength="50" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title within 50 characters" />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <div className='f-c'>
            <div className='form-label w-75  mx-auto'><Form.Label className='description '>Description:</Form.Label> </div>
              <Form.Control className='w-75 mx-auto form-control-lg' maxLength="150" type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter description within 150 characters" />
            </div>
          </Form.Group>
          <div className='text-center'>
            <button className="btn-add " type="submit">
              Add Todo
            </button>
          </div>
        </Form>
      </div >
    </>
  )
}


// Using Elements destructuring instead of props
export const TodoItems = ({ todo, onDelete }) => {
  return (
    <div>
      <p className='date'>{todo.time} </p>
      <h4 className='todoTitle'><u>{todo.title}</u></h4>
      <p className='todoTasks'>{todo.desc}</p>
      <button className='btn-del' onClick={() => { (onDelete(todo)) }}>Delete</button>
    </div>
  )
}
