import * as types from '../constants'

const initialState = {
    todos: [
        { id: 0, title: '1', content: '2', finished: false },
        { id: 1, title: 'asdf', content: 'asdfasdf', finished: false }
    ],
    curCnt: 2,
    visibilityFilter: 'SHOW_ALL'
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.concat({
                    ...action.data
                }),
                curCnt: state.curCnt + 1
            }
        case types.READ_TODO_SUCCESS:
            {
                return {
                    ...state,
                    todos: action.data,
                    curCnt: action.data.length
                }
            }
        case types.FINISH_TODO:
            {
                let todos = state.todos
                todos = todos.map((todo) => {
                    return todo.id === action.id ? { ...todo, finished: !todo.finished } : todo
                })

                return {
                    ...state,
                    todos
                }
            }
        case types.DELETE_TODO_SUCCESS:
            {
                let todos = state.todos
                todos = todos.filter((todo) => todo && todo.id !== action.data.id)
                return {
                    ...state,
                    todos
                }
            }
        case types.UPDATE_TODO_SUCCESS:
            {
                let todos = state.todos
                console.log(todos)
                todos = todos.map((todo) => {
                    return todo.id === action.data.id ? {
                        ...todo,
                        title: action.data.title,
                        content: action.data.content,
                        finished: action.data.finished
                    } : todo
                })

                return {
                    ...state,
                    todos
                }
            }
        case types.SET_FILTER:
            return {
                ...state,
                visibilityFilter: action.filter
            }
        default:
            return state
    }
}

export default todoReducer