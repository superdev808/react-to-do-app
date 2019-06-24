const initState = {
    posts: [
        { title: "1", content: "2" }
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: state.posts.concat(action.data)
            }
        default:
            return state
    }
}

export default postReducer