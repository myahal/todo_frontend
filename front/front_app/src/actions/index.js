export const GET_TODOS = 'GET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE'

export const addTodoFailure = (err) => {
    return {
        type: ADD_TODO_FAILURE,
        data: err
    }
}
