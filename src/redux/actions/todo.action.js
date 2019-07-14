import * as types from '../constants';

export function addTodo(data) {
    return { type: types.ADD_TODO, data }
}

export function readTodo(data) {
    return { type: types.READ_TODO, data }
}

export function updateTodo(data) {
    return { type: types.UPDATE_TODO, data }
}

export function deleteTodo(id) {
    return { type: types.DELETE_TODO, data: id }
}

export function finishTodo(id) {
    return { type: types.FINISH_TODO, id }
}

export function setFilter(filter) {
    return { type: types.SET_FILTER, filter }
}

