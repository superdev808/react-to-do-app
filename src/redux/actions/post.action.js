import * as types from '../constants';

export function todoAdd(data) {
    return { type: types.ADD_TODO, data }
}

export function todoFinish(id) {
    return { type: types.FINISH_TODO, id }
}

export function todoDelete(id) {
    return { type: types.DELETE_TODO, id }
}

export function todoUpdate(data) {
    return { type: types.UPDATE_TODO, data }
}