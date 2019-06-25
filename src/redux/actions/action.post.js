import * as types from './actionTypes';

export function postAppend(data) {
    return { type: types.ADD_POST, data }
}

export function postActive(id) {
    return { type: types.ACTIVE_POST, id }
}

export function postDelete(id) {
    return { type: types.DELETE_POST, id }
}