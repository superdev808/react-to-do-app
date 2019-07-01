import React from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const TodoRow = ({ todo, handleFinish, handleDelete }) => {
    return (<tr className='data'>
        <td>
            <input type='checkbox' defaultChecked={todo.finished} onChange={(e) => handleFinish(todo.id)} />
        </td>
        <td>
            <Link to={'/' + todo.id + '/update/'} className='navbar-brand'>
                <span className={classNames({ 'finish': todo.finished })}>{todo.title}</span>
            </Link>
        </td>
        <td>
            <button className='btn btn-primary'
                onClick={(e) => handleDelete(todo.id)}> delete
            </button>
        </td>
    </tr >)
}

export default TodoRow