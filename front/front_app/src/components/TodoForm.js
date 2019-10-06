import React, {useState, useContext}  from 'react'
import DateSelector from './DateSelector'
import AppContext from '../contexts/AppContext'
import useAddTodo from './hooks/useAddTodo'

const TodoForm = (props)  => { 
    const {appState, dispatch} = useContext(AppContext)

    const initialDate = new Date()
    const [deadline, setDeadline] = useState(initialDate)
    const getDeadline = (selected) => {
        setDeadline(selected)
    }

    const useInput = initialValue => {
        const [value, setValue] = useState(initialValue)
        return {value, onChange: (e) => setValue(e.target.value)}
    }
    const name = useInput('')
    const contents = useInput('')
    const priority = useInput('3')
    const state = useInput('0')

    const [intent, setIntent] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setIntent(true)
    }

    useAddTodo(dispatch, {name, contents, deadline, priority, state}, {intent, setIntent})

    return(
        <>
            <h4>Register</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formName">Name</label>
                    <input type="text" className="form-control" id="formName" {...name} />
                </div>
                <div className="form-group">
                    <label htmlFor="formContents">Contents</label>
                    <input type="text" className="form-control" id="formContents" {...contents}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formDeadline">Deadline</label>
                    <DateSelector getPropsFromChild={getDeadline} current={deadline} />
                </div>
                <div className="form-group">
                    <label htmlFor="formPriority">Priority</label>
                    <input type="text" className="form-control" id="formPriority" {...priority}/>
                </div>
                <div className="form-group">
                    <label htmlFor="formState">State</label>
                    <input type="text" className="form-control" id="formState" {...state}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Register</button>
            </form>
        </>
    )

}

export default TodoForm

