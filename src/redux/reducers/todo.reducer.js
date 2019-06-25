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
        case types.ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({
                    ...action.data,
                    id: state.curCnt
                }),
                curCnt: state.curCnt + 1
            }
        case types.FINISH_TODO:
            {
                let todos = state.todos
                todos = todos.map((post) => {
                    return post.id === action.id ? { ...post, finished: !post.finished } : post
                })

                return {
                    ...state,
                    todos
                }
            }
        case types.DELETE_TODO:
            {
                let todos = state.todos
                todos = todos.filter((post) => post && post.id !== action.id)
                return {
                    ...state,
                    todos
                }
            }
        case types.UPDATE_TODO:
            {
                let todos = state.todos
                todos = todos.map((post) => {
                    return post.id === action.data.id ? { ...post, title: action.data.title, content: action.data.content, finish: action.data.finish } : post
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