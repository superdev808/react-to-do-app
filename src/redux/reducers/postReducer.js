import * as types from '../actions/actionTypes'
const initState = {
    posts: [
        { id: (new Date()).toString(), title: "1", content: "2", finish: false }
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_POST:
            return {
                ...state,
                posts: state.posts.concat(action.data)
            }
        case types.ACTIVE_POST:
            {
                let posts = state.posts
                posts = posts.map((post) => {
                    return post.id === action.id ? { ...post, finish: !post.finish } : post
                })

                return {
                    ...state,
                    posts
                }
            }
        case types.DELETE_POST:
            {
                let posts = state.posts
                posts = posts.filter((post) => post && post.id !== action.id)
                return {
                    ...state,
                    posts
                }
            }
        case types.UPDATE_POST:
            {
                let posts = state.posts
                posts = posts.map((post) => {
                    return post.id === action.data.id ? { ...post, title: action.data.title, content: action.data.content, finish: action.data.finish } : post
                })

                return {
                    ...state,
                    posts
                }
            }
        default:
            return state
    }
}

export default postReducer