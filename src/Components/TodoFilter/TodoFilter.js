import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'

import {
    setFilter
} from '../../redux/actions/todo.action'


class TodoFilter extends Component {

    setVisibleType = (visibleType) => {
        const { setFilter } = this.props.actions
        setFilter(visibleType)
    }

    render() {
        const { filter } = this.props
        return (
            <div className='btn-group btn-group-toggle' role='group' data-toggle="buttons">
                <label className={classNames({ "btn btn-secondary": true, "active": filter === 'SHOW_ALL' })}>
                    <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked={filter === 'SHOW_ALL'} onClick={() => this.setVisibleType('SHOW_ALL')} /> All
                </label>
                <label className={classNames({ "btn btn-secondary": true, "active": filter === 'SHOW_ACTIVE' })}>
                    <input type="radio" name="options" id="option2" autoComplete="off" defaultChecked={filter === 'SHOW_ACTIVE'} onClick={() => this.setVisibleType('SHOW_ACTIVE')} /> Active
                </label>
                <label className={classNames({ "btn btn-secondary": true, "active": filter === 'SHOW_FINISHED' })}>
                    <input type="radio" name="options" id="option3" autoComplete="off" defaultChecked={filter === 'SHOW_FINISHED'} onClick={() => this.setVisibleType('SHOW_FINISHED')} /> Finished
                </label>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filter: state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
        {
            setFilter
        }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)