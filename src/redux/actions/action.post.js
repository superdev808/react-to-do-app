import * as types from './actionTypes';

export function postAppend(data) {
    return { type: types.ADD_POST, data }
}