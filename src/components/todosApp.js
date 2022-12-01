import React from 'react'
import { TodoItems } from './todoItems'

const TodosApp = (props) => {
    return (
        <div className='container'>
            <hr/><h3> Todos List </h3> <hr/>
            {
                props.todos.length === 0 ?
                    "No todos avaible" :
                    props.todos.map((todo) => {

                        return (
                            <>
                            < TodoItems todo = { todo } key = { todo.sno } onDelete = { props.onDelete } /> <hr />
                            </>
                        )

                    })
            }
        </div>
    )
}

export default TodosApp