import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import {
    addTodo,
    updateTodo
} from '../../redux/actions/todo.action'

import { getVisibleTodos } from '../../redux/selectors'

import './todo.scss'
//import { thisExpression } from '@babel/types';

class CreateTodo extends Component {

    state = {
        titleFocused: true
    }

    constructor(props) {
        super(props)
        const todoType = props.match.params.todoType

        if (todoType === 'update') {
            const id = props.match.params.id
            const { visibleTodos } = props
            this.findTodo = visibleTodos.find((todo) => (todo.id === Number.parseInt(id)))
        }
    }

    handleCancel = () => {
        this.props.history.push('/')
    }

    handleSubmit = (e) => {

        e.preventDefault()

        if (!this.getTitle.value) {
            this.setState({
                titleFocused: false
            })
            return
        }

        const { todoType } = this.props.match.params

        if (todoType === 'create') {

            const { addTodo } = this.props.actions

            addTodo({
                title: this.getTitle.value,
                content: this.getContent.value
            })
        } else {

            const { updateTodo } = this.props.actions

            updateTodo({
                ...this.findTodo,
                title: this.getTitle.value,
                content: this.getContent.value
            })
        }

        this.getContent.value = ''
        this.getTitle.value = ''
        this.props.history.push('/')
    }

    onFocusTitle = () => {
        this.setState({
            titleFocused: true
        })
    }

    render() {

        const { title, titleFocused } = this.state
        const { todoType } = this.props.match.params

        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <div className='col-25'>
                            <label htmlFor='fname'>Title</label>
                        </div>
                        <div className='col-75'>
                            <input type='text'
                                autoComplete="off"
                                id='title'
                                name='firstname'
                                placeholder='Todo Title..'
                                ref={(input) => this.getTitle = input}
                                className={`${!titleFocused && 'title_valdiation'}`}
                                onFocus={this.onFocusTitle}
                                onBlur={this.onBlurTitle}
                                defaultValue={this.findTodo && this.findTodo.title}
                                autoFocus
                            />
                            {
                                !title && !titleFocused && <p className='input_validaton_badge '>input text here</p>
                            }
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-25'>
                            <label htmlFor='subject'>Decription</label>
                        </div>
                        <div className='col-75'>
                            <textarea id='content'
                                name='content'
                                placeholder='Description..'
                                style={{ height: '200px' }}
                                ref={(input) => this.getContent = input}
                                defaultValue={this.findTodo && this.findTodo.content}>
                            </textarea>
                        </div>
                    </div>
                    <div className='row' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <input type='submit' value={todoType === 'create' ? 'Add' : 'Update'} />
                        <button className='cancel_button' onClick={this.handleCancel}> Cancel </button>
                    </div>
                </form>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    visibleTodos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        addTodo,
        updateTodo
    }, dispatch),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateTodo));