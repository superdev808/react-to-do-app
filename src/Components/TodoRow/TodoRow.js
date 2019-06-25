import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class TodoRow extends Component {

    render() {
        const { todo } = this.props

        return (<tr className='data'>
            <td>
                <label className='checkContainer'>
                    <input type='checkbox' defaultChecked={todo.finished} onChange={(e) => this.props.handleFinish(todo.id)} />
                    <span className='checkmark'></span>
                </label>
            </td>
            <td><Link to={'/update/' + todo.id} >{todo.title}</Link></td>
            <td>
                <button className='del_button'
                    onClick={(e) => this.props.handleDelete(todo.id)}> delete
                </button>
            </td>
            <td>
                {todo.id}
            </td>
        </tr >)
    }
}

export default TodoRow