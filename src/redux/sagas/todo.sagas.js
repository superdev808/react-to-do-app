import { put, takeLatest, all } from 'redux-saga/effects';
import * as types from '../constants';
import { baseUrl } from '../../config'
import axios from 'axios';

function* todoAPI(action) {

    let urlAttach = ''

    switch (action.type) {
        case types.ADD_TODO:
            urlAttach = 'create'
            break
        case types.READ_TODO:
            urlAttach = 'read'
            break
        case types.UPDATE_TODO:
            urlAttach = 'update'
            break
        case types.DELETE_TODO:
            urlAttach = 'delete'
            break
        default:
            break
    }
    try {
        console.log(action.data)
        const addedData = yield axios.post(`${baseUrl}${urlAttach}`, action.data).then(response => response.data)
        yield put({ type: action.type + '_SUCCESS', data: addedData })
    } catch (error) {
        yield put({ type: action.type + '_FAIL' })
    }
}

export default function* todoSagas() {
    yield all([
        takeLatest(types.ADD_TODO, todoAPI),
        takeLatest(types.READ_TODO, todoAPI),
        takeLatest(types.UPDATE_TODO, todoAPI),
        takeLatest(types.DELETE_TODO, todoAPI)
    ])
}