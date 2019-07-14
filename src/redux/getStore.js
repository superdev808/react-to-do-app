import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/todo.reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import todoSagas from './sagas/todo.sagas';

const logger = createLogger({
    collapsed: true,
});

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const getMiddleware = () => {
        if (process.env.NODE_ENV === 'development') {
            return applyMiddleware(sagaMiddleware, logger);
        }
        return applyMiddleware(sagaMiddleware);
    };

    const store = createStore(
        reducers,
        initialState,
        getMiddleware()
    );

    sagaMiddleware.run(todoSagas);

    return store;
}