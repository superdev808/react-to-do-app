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
            <div className={'row'}>
                <div className={'filter'}>
                    <button onClick={() => this.setVisibleType('SHOW_ALL')} className={classNames({ 'active': filter === 'SHOW_ALL' })} > All </button>
                    <button onClick={() => this.setVisibleType('SHOW_ACTIVE')} className={classNames({ 'active': filter === 'SHOW_ACTIVE' })}> Active </button>
                    <button onClick={() => this.setVisibleType('SHOW_FINISHED')} className={classNames({ 'active': filter === 'SHOW_FINISHED' })}> Finished </button>
                </div>
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