import  {useEffect}  from 'react'
import axios from 'axios'

import {ADD_TODO, addTodoFailure} from '../../actions'

const BASE_URL='http://localhost:5000/todo'

const useAddTodo = (dispatch, data, intent) => {
    useEffect(() => {
    const addTodo = async() => {
        console.log('call addTodo')
        const formatDate = (date) => {
            const y = date.getFullYear()
            const m = date.getMonth() + 1
            const d = date.getDate()
            return `${y}-${m}-${d}`
        };
        const newTodo = {
            name: data.name.value,
            contents: data.contents.value,
            deadline: formatDate(data.deadline),
            priority:parseInt(data.priority.value),
            state:parseInt(data.state.value)
        }

        if (intent.intent) {
            try {
                intent.setIntent(false)
                const response = await axios.post(`${BASE_URL}`, newTodo)
                const data = response.data
                dispatch({ type: ADD_TODO, data })
            } catch (error) {
                const {
                    status,
                    statusText,
                    data
                } = error.response
                dispatch(addTodoFailure({'status': status, 'statusText': statusText, 'messages': data.messages}))
            }
        }
      }
      addTodo()
  }, [dispatch, data, intent.intent])

}

export default useAddTodo
