import  {useEffect}  from 'react'
import axios from 'axios'
import {GET_TODOS} from '../../actions'

const BASE_URL='http://localhost:5000/todos'

const useGetTodosFetcher = (dispatch) => {
    useEffect(() => {
      const getTodos = async() => {
        console.log('getTodos')
        const response = await axios.get(`${BASE_URL}`)
        const data = response.data
        dispatch({ type: GET_TODOS, data })
      }

      getTodos()
  }, [dispatch])

}


export default useGetTodosFetcher
