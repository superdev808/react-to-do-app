import * as types from '../constants';

export function addTodo(data) {
    return { type: types.ADD_TODO, data }
}

export function finishTodo(id) {
    return { type: types.FINISH_TODO, id }
}

export function deleteTodo(id) {
    return { type: types.DELETE_TODO, id }
}

export function updateTodo(data) {
    return { type: types.UPDATE_TODO, data }
}

export function setFilter(filter) {
    return { type: types.SET_FILTER, filter }
}