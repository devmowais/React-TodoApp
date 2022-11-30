import React from 'react'


// Using Elements destructuring instead of props
export const TodoItems = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-del' onClick={()=>{(onDelete(todo))}}>Delete</button>
    </div>
  )
}
