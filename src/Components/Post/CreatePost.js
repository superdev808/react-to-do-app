import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postActions from '../../redux/actions/action.post'
import { withRouter } from "react-router-dom"


import './post.css'

class CreatePost extends Component {

    state = {
        id: '',
        title: '',
        content: '',
        finish: false
    }

    handleCancel = () => {
        this.props.history.push("/")
    }

    handleSubmit = (e) => {

        const { actions } = this.props

        e.preventDefault()

        actions.postAppend({
            id: new Date(),
            title: this.state.title,
            content: this.state.content
        })

        this.props.history.push("/")
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));