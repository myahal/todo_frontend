import {GET_TODOS,
    ADD_TODO,
    ADD_TODO_FAILURE} from '../actions'

const initialState = {
    result: false,
    todos: []
}

const todos = (state = initialState, action) => {
    switch(action.type) {
        case GET_TODOS:
            return Object.assign({}, state, {
                result: true,
                todos: action.data.todos
            })
        case ADD_TODO:
            return Object.assign({}, state, {
                result: true,
                todos: [...state.todos, action.data.item]
            })
        case ADD_TODO_FAILURE:
            return {...state, result:false}
        default:
            return state
    }
}

export default todos
