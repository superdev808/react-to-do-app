import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import { addTodo } from '../../redux/actions/todo.action'

import './todo.scss'
//import { thisExpression } from '@babel/types';

class CreateTodo extends Component {

    state = {
        title: '',
        titleFocused: true
    }

    handleCancel = () => {
        this.props.history.push('/')
    }

    handleTitleChange = () => {
        this.setState({
            title: this.getTitle.value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault()

        if (!this.getTitle.value)
            return

        const { addTodo } = this.props.actions

        addTodo({
            title: this.getTitle.value,
            content: this.getContent.value
        })

        this.getContent.value = ''
        this.getTitle.value = ''
        this.props.history.push('/')
    }

    onFocusTitle = () => {
        this.setState({
            titleFocused: true
        })
    }

    onBlurTitle = () => {
        this.setState({
            titleFocused: false
        })
    }

    render() {

        const { title, titleFocused } = this.state

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
                                placeholder='Post Title..'
                                onChange={this.handleTitleChange}
                                ref={(input) => this.getTitle = input}
                                className={`${!title && !titleFocused && 'title_valdiation'}`}
                                onFocus={this.onFocusTitle}
                                onBlur={this.onBlurTitle}
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
                            <textarea id='content' name='content' placeholder='Description..' style={{ height: '200px' }} ref={(input) => this.getContent = input}></textarea>
                        </div>
                    </div>
                    <div className='row'>
                        <button className='cancel_button' onClick={this.handleCancel}> Cancel </button>
                        <input type='submit' value='Add' />
                    </div>
                </form>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        addTodo
    }, dispatch),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateTodo));