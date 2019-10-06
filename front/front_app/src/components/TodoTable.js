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
                    <th>名前</th>
                    <th>内容</th>
                    <th>締め切り</th>
                    <th>優先度</th>
                    <th>状態</th>
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

