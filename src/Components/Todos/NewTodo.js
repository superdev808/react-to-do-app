import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import EditTodo from './EditTodo'

import { addTodo } from '../../redux/actions/todo.action'

const NewTodo = (props) => {

    function handleSubmit(title, content) {
        // Dispatch redux action that creates todo
        const { addTodo } = props.actions
        addTodo({
            title,
            content
        })
    }

    return <EditTodo onSubmit={handleSubmit} viewType='new' />
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        addTodo
    }, dispatch)
})

export default connect(null, mapDispatchToProps)(NewTodo)