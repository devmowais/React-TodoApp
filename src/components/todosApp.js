import React from 'react'
import { TodoItems } from './todoItems'

const TodosApp = (props) => {
    return (
        <div className='container'>
            <h3> Todos List </h3>
            {
                props.todos.length === 0 ?
                    "No todos avaible" :
                    props.todos.map((todo) => {
                        return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />

                    })
            }
        </div>
    )
}

export default TodosApp