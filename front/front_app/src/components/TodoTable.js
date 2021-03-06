import React, {useState, useContext}  from 'react'
import TodoCell from './TodoCell'

import AppContext from '../contexts/AppContext'

const TodoTable = () => {
    const {state, dispatch} = useContext(AppContext)
    const todos = state.todos

    const todoCellHandler = (id, status) => {
        console.log(`${id}: ${status}`)
    }

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Contents</th>
                    <th>Deadline</th>
                    <th>Priority</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {
                todos.todos.map((item, index) => {
                    return(
                            <TodoCell index={index} item={item} handler={todoCellHandler} key={index} />
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default TodoTable

