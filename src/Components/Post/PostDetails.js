import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postActions from '../../redux/actions/action.post'
import { withRouter } from 'react-router-dom'


import './post.css'

class PostDetails extends Component {

    constructor(props) {
        super(props)

        let id = props.match.params.id
        const { posts } = props
        console.log(">>posts", posts)

        let findData = posts.find((post) => {
            console.log(post.id)
            console.log(">>", id)
            return post.id === id
        })
        console.log(findData)

        this.state = { data: findData, title: '', content: '' }
    }

    handleCancel = () => {
        this.props.history.push('/')
    }

    handleSubmit = (e) => {

        const { actions } = this.props
        const id = this.props.match.params.id
        e.preventDefault()

        actions.postUpdate({
            ...this.state.findData,
            id,
            title: this.state.title,
            content: this.state.content
        })

        this.props.history.push('/')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { findData } = this.state
        return (
            <div>
                {
                    findData && <div className='container'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='row'>
                                <div className='col-25'>
                                    <label htmlFor='fname'>Title</label>
                                </div>
                                <div className='col-75'>
                                    <input type='text' id='title' name='title' onChange={this.handleChange} defaultValue={findData.title} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-25'>
                                    <label htmlFor='subject'>Decription</label>
                                </div>
                                <div className='col-75'>
                                    <textarea id='content' name='content' style={{ height: '200px' }} onChange={this.handleChange} defaultValue={findData.content}></textarea>
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
    posts: state.posts,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(postActions, dispatch),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));