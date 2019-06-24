import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postActions from '../../redux/actions/action.post'

import './post.css'

class CreatePost extends Component {

    state = {
        title: '',
        content: ''
    }

    handleCancel = () => {
        const { posts } = this.props
        console.log(posts)
    }

    handleSubmit = (e) => {

        const { actions } = this.props

        e.preventDefault()

        actions.postAppend({
            title: this.state.title,
            content: this.state.content
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="fname">Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="title" name="firstname" placeholder="Post Title.." onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="subject">Decription</label>
                        </div>
                        <div className="col-75">
                            <textarea id="content" name="content" placeholder="Description.." style={{ height: "200px" }} onChange={this.handleChange}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <button className="cancel_button" onClick={this.handleCancel}> Cancel </button>
                        <input type="submit" value="Add" />
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
    actions: bindActionCreators(postActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);