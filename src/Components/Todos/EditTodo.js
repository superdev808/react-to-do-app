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

        const { todo, onSubmit, viewType } = this.props

        if (viewType === 'update' || viewType === 'new') {
            onSubmit(this.getTitle.value, this.getContent.value, todo)

            this.getContent.value = ''
            this.getTitle.value = ''
            this.props.history.push('/')
        }
        else {
            const { id } = this.props.match.params
            this.props.history.push('/' + id + '/update/')
        }
    }

    onFocusTitle = () => {
        this.setState({
            titleFocused: true
        })
    }

    render() {

        const { title, titleFocused } = this.state
        const { todo, viewType } = this.props

        return (
            <div className='container card' style={{ marginTop: '5%' }}>
                <hr></hr>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group row'>
                        <label htmlFor='title' className='col-sm-2 col-form-label label_type' > Title</label>
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
                                readOnly={viewType === 'view'}
                            />
                            {
                                !title && !titleFocused && <p className='input_validaton_badge '>input text here</p>
                            }
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='content' className='col-sm-2 col-form-label label_type' > Content </label>
                        <div className='col-sm-10'>
                            <textarea id='content'
                                name='content'
                                placeholder='Description..'
                                className='form-control'
                                style={{ height: '200px' }}
                                ref={(input) => this.getContent = input}
                                defaultValue={todo && todo.content}
                                readOnly={viewType === 'view'}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className='row' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <input type='submit' style={{ marginRight: '10px' }} className='col-1 btn btn-info'
                            value={todo ? (viewType === 'view' ? 'Update' : 'OK') : 'Add'} />
                        <button className='col-1 btn btn-dark' onClick={this.handleCancel}> Cancel </button>
                    </div>
                </form>
            </div >
        );
    }
}

export default withRouter(EditTodo)