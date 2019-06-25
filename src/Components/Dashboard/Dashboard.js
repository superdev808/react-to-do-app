import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from "react-router-dom"

import ModalDialog from '../ModalDialog/ModalDialog'
import * as postActions from '../../redux/actions/post.action'
import { getVisibleTodos } from '../../redux/selectors'
import TodoRow from '../TodoRow/TodoRow'

import './Dashboard.css'

class Dashboard extends Component {

   setFilter = (visibleType) => {
   }

   handleFinish = (taskId) => {
   }

   handleDelete = (taskId) => {
   }

   handleTodoView = (taskId) => {
   }

   handleNew = (e) => {
      this.props.history.push("/new")
   }

   render() {
      const { visibleTodos, filter } = this.props

      return (
         <div className="container">
            <div className='row'>
               <table className="data">
                  <thead>
                     <tr>
                        <th> State </th>
                        <th> Title </th>
                        <th> Subscribe/Delete </th>
                        <th>
                           <button className={"create_button"} onClick={this.handleNew} >
                              New
                                    </button>
                        </th>
                     </tr>
                  </thead>

                  <tbody>
                     {
                        visibleTodos && visibleTodos.map((todo) => (
                           todo && <TodoRow key={todo.id} todo={todo} handleFinish={this.handleFinish} handleDelete={this.handleDelete} />
                        ))
                     }
                  </tbody>
               </table>
            </div>

            <div className={'row'}>
               <div className={"filter"}>
                  <button onClick={() => this.setFilter('all')} className={filter === 'all' ? "active" : ""} > All </button>
                  <button onClick={() => this.setFilter('active')} className={filter === 'active' ? "active" : ""}> Active </button>
                  <button onClick={() => this.setFilter('finished')} className={filter === 'finished' ? "active" : ""}> Finished </button>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   visibleTodos: getVisibleTodos(state),
   filter: state.filter
})

const mapDispatchToProps = dispatch => ({
   actions: bindActionCreators(postActions, dispatch),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));