import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import { todoUpdate } from '../../redux/actions/todo.action'

class PostDetails extends Component {

    constructor(props) {
        super(props)
        const id = props.match.params.id
        const { todos } = props
        this.findData = todos.find((todo) => (todo.id === Number.parseInt(id)))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { todoUpdate } = this.props.actions

        todoUpdate({
            ...this.findData,
            title: this.getTitle.value,
            content: this.getContent.value
        })

        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                {
                    this.findData && <div className='container'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='row'>
                                <div className='col-25'>
                                    <label htmlFor='fname'>Title</label>
                                </div>
                                <div className='col-75'>
                                    <input type='text' id='title' name='title' defaultValue={this.findData.title} ref={(input) => this.getTitle = input} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-25'>
                                    <label htmlFor='subject'>Decription</label>
                                </div>
                                <div className='col-75'>
                                    <textarea id='content' name='content' defaultValue={this.findData.content} style={{ height: '200px' }} ref={(input) => this.getContent = input}></textarea>
                                </div>
                            </div>
                            <div className='row'>
                                <button className='cancel_button' onClick={this.handleCancel}> Back </button>
                                <input type='submit' value='Save' />
                            </div>
                        </form>
                    </div >
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        todoUpdate
    }, dispatch),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));