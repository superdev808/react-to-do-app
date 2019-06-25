const initState = {
    posts: [
        { id: new Date(), title: "1", content: "2", finish: false }
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