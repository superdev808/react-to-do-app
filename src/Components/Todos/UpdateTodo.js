import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import EditTodo from './EditTodo'

import { updateTodo } from '../../redux/actions/todo.action'
import { getVisibleTodos } from '../../redux/selectors';

const UpdateTodo = (props) => {

    function getCurrentTodo() {
        const { visibleTodos } = props
        const { id } = props.match.params

        return visibleTodos.find((todo) => (todo.id === Number.parseInt(id)))
    }

    function handleSubmit(title, content, todo) {
        const { updateTodo } = props.actions
        updateTodo({
            ...todo,
            title,
            content
        })
    }

    return <EditTodo todo={getCurrentTodo()} onSubmit={handleSubmit} />
}

const mapStateToProps = (state) => {
    return ({
        visibleTodos: getVisibleTodos(state)
    })
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        updateTodo
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTodo)