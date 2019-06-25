import * as types from '../actions/actionTypes'
const initState = {
    posts: [
        { id: 0, title: "1", content: "2", finish: false },
        { id: 1, title: "asdssddsd", content: "asdfasdf", finish: false }
    ],
    curCnt: 2
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.data,
                    id: state.curCnt
                }),
                curCnt: state.curCnt + 1
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
            return { ...state }
    }
}

export default postReducer