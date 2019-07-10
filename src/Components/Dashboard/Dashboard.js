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
//import './Dashboard.scss'

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
            <div className='row justify-content-center'>
               <hr className='w-100'></hr>
               <div className='col-md-6 col-sm-3'>
                  <button type='button' className='btn btn-success float-right' onClick={this.handleNew} > New </button>
               </div>
               <hr className='w-100'></hr>
            </div>
            <div className='row justify-content-center align-items-center'>
               <div className='col-md-6 col-sm-3'>
                  <table className='table table-striped table-light'>
                     <thead className='thead-dark'>
                        <tr>
                           <th scope='col'> State </th>
                           <th scope='col'> Title </th>
                           <th scope='col'> Delete </th>
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
            </div>
            <div className='row'>
               <div className='col-md-12'>
                  <TodoFilter />
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
         deleteTodo
      }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
