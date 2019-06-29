import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
   finishTodo,
   deleteTodo,
} from '../../redux/actions/todo.action'

import { getVisibleTodos } from '../../redux/selectors'
import TodoRow from '../TodoRow/TodoRow'
import TodoFilter from '../TodoFilter/TodoFilter'
import './Dashboard.scss'

class Dashboard extends Component {

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
      this.props.history.push('/create')
   }

   render() {
      const { visibleTodos } = this.props

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
            <TodoFilter />
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
         deleteTodo
      }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
