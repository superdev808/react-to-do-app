import React from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const TodoRow = ({ todo, handleFinish, handleDelete }) => {
    return (<tr className='data'>
        <td>
            <label className='checkContainer'>
                <input type='checkbox' defaultChecked={todo.finished} onChange={(e) => handleFinish(todo.id)} />
                <span className='checkmark'></span>
            </label>
        </td>
        <td>
            <Link to={'/update/' + todo.id}>
                <span className={classNames({ 'finish': todo.finished })}>{todo.title}</span>
            </Link>
        </td>
        <td>
            <button className='del_button'
                onClick={(e) => handleDelete(todo.id)}> delete
            </button>
        </td>
    </tr >)
}

export default TodoRow