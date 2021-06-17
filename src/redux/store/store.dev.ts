import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from '@redux/reducers';
import rootSagas from '@redux/sagas';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const enhancers = composeWithDevTools(applyMiddleware(loggerMiddleware, sagaMiddleware));

const store = createStore(rootReducers, enhancers);
sagaMiddleware.run(rootSagas);

export default store;
