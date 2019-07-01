import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'

import './todo.scss'

class EditTodo extends Component {

    state = {
        titleFocused: true
    }

    handleCancel = (e) => {

        e.preventDefault()
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

        const { todo, onSubmit } = this.props

        onSubmit(this.getTitle.value, this.getContent.value, todo)

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
        const { todo } = this.props

        return (
            <div className='container card'>
                <hr></hr>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group row'>
                        <label htmlFor='title' className='col-sm-2 col-form-label' > Title</label>
                        <div className='col-sm-10'>
                            <input type='text'
                                autoComplete="off"
                                id='title'
                                name='firstname'
                                placeholder='Todo Title..'
                                ref={(input) => this.getTitle = input}
                                className={classNames({ 'form-control-plaintext': true, 'title_valdiation': !titleFocused })}
                                onFocus={this.onFocusTitle}
                                onBlur={this.onBlurTitle}
                                defaultValue={todo && todo.title}
                                autoFocus
                            />
                            {
                                !title && !titleFocused && <p className='input_validaton_badge '>input text here</p>
                            }
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='content' className='col-sm-2 col-form-label' > Content </label>
                        <div className='col-sm-10'>
                            <textarea id='content'
                                name='content'
                                placeholder='Description..'
                                className='form-control'
                                style={{ height: '200px' }}
                                ref={(input) => this.getContent = input}
                                defaultValue={todo && todo.content}>
                            </textarea>
                        </div>
                    </div>
                    <div className='row' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <input type='submit' value={todo ? 'Update' : 'Add'} />
                        <button className='cancel_button' onClick={this.handleCancel}> Cancel </button>
                    </div>
                </form>
            </div >
        );
    }
}

export default withRouter(EditTodo)