import { /*applyMiddleware,*/ createStore } from 'redux';
import { createLogger } from 'redux-logger';
//import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/postReducer';
//import rootSaga from './sagas';

const logger = createLogger({
    collapsed: true,
});

export default function configureStore(initialState) {
    //const sagaMiddleware = createSagaMiddleware();

    /*const getMiddleware = () => {
        if (process.env.NODE_ENV === 'development') {
            return applyMiddleware(sagaMiddleware, logger);
        }
        return applyMiddleware(sagaMiddleware);
    };*/

    const store = createStore(
        reducers,
        initialState,
        //getMiddleware(),
    );

    //sagaMiddleware.run(rootSaga);

    return store;
}