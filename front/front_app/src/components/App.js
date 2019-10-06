import React, {useReducer, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'
import AppContext from '../contexts/AppContext'
import useGetTodosFetcher from './hooks/useGetTodosFetcher'
import TodoTable from './TodoTable'
import TodoForm from './TodoForm'
import DateSelector from './DateSelector'
import {prevDate,dateFormat} from '../util'


const App = () => {
    const initialState = {
        todos: []
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const [searchIntent, setSearchIntent] = useState(true)
    const [start, setStart] = useState(prevDate(new Date(), 3))
    const [end, setEnd] = useState(new Date())
    const initialRange = {start: dateFormat(start), end: dateFormat(end)}
    const [range, setRange] = useState(initialRange)

    useGetTodosFetcher(dispatch, range, {searchIntent, setSearchIntent})

    const getRangeStart = (selected) => {
        setStart(selected)
        setRange({start: dateFormat(selected), end: range.end})
        setSearchIntent(true)
    }

    const getRangeEnd = (selected) => {
        setEnd(selected)
        setRange({start: range.start, end: dateFormat(selected)})
        setSearchIntent(true)
    }

    const renderTable = () => {
        if ('todos' in state.todos) {
            return (<TodoTable />)
        }
    }


  return (
      <AppContext.Provider value={{state, dispatch}}>
        <div className="container-fluid">
            <DateSelector getPropsFromChild={getRangeStart} current={start}/> ~ 
            <DateSelector getPropsFromChild={getRangeEnd} current={end}/> 
        </div>
        { renderTable() }
        <TodoForm />
      </AppContext.Provider>
  );
}

export default App;
