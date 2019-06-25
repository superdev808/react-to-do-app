import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames'

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
            <td><Link to={'/update/' + todo.id}><p className={classNames({ 'finish': todo.finished })}>{todo.title}</p></Link></td>
            <td>
                <button className='del_button'
                    onClick={(e) => this.props.handleDelete(todo.id)}> delete
                </button>
            </td>
        </tr >)
    }
}

export default TodoRow