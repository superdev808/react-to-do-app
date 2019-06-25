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
            id: (new Date()).toString(),
            title: this.getTitle.value,
            content: this.getContent.value
        })

        this.getContent.value = ""
        this.getTitle.value = ""

        this.props.history.push("/")
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
                            <input type="text" id="title" name="firstname" placeholder="Post Title.." ref={(input) => this.getTitle = input} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="subject">Decription</label>
                        </div>
                        <div className="col-75">
                            <textarea id="content" name="content" placeholder="Description.." style={{ height: "200px" }} ref={(input) => this.getContent = input}></textarea>
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