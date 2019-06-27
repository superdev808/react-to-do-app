import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'

import {
   finishTodo,
   deleteTodo,
   setFilter
} from '../../redux/actions/todo.action'

import { getVisibleTodos } from '../../redux/selectors'
import TodoRow from '../TodoRow/TodoRow'

import './Dashboard.css'

class Dashboard extends Component {

   setVisibleType = (visibleType) => {
      const { setFilter } = this.props.actions
      setFilter(visibleType)
   }

   handleFinish = (taskId) => {
      const { finishTodo } = this.props.actions
      finishTodo(taskId)
   }

   handleDelete = (taskId) => {
      if (window.confirm('Are you sure to delete?') === true) {
         const { deleteTodo } = this.props.actions
         deleteTodo(taskId)
      }
   }

   handleNew = (e) => {
      console.log('handleNew', this)
      this.props.history.push('/new')
   }

   render() {
      const { visibleTodos, filter } = this.props

      return (
         <div className='container'>
            <div className='row'>
               <table className='data'>
                  <thead>
                     <tr>
                        <th> State </th>
                        <th> Title </th>
                        <th> Subscribe/Delete </th>
                        <th>
                           <button className='create_button' onClick={this.handleNew} >
                              New
                                    </button>
                        </th>
                     </tr>
                  </thead>

                  <tbody>
                     {
                        visibleTodos && visibleTodos.map((todo) => (
                           <TodoRow key={todo.id} todo={todo} handleFinish={this.handleFinish} handleDelete={this.handleDelete} />
                        ))
                     }
                  </tbody>
               </table>
            </div>

            <div className={'row'}>
               <div className={'filter'}>
                  <button onClick={() => this.setVisibleType('SHOW_ALL')} className={classNames({ 'active': filter === 'SHOW_ALL' })} > All </button>
                  <button onClick={() => this.setVisibleType('SHOW_ACTIVE')} className={classNames({ 'active': filter === 'SHOW_ACTIVE' })}> Active </button>
                  <button onClick={() => this.setVisibleType('SHOW_FINISHED')} className={classNames({ 'active': filter === 'SHOW_FINISHED' })}> Finished </button>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   visibleTodos: getVisibleTodos(state),
   // filter: state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
   actions: bindActionCreators(
      {
         finishTodo,
         deleteTodo,
         setFilter
      }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
