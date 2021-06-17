import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '@redux/reducers';
import rootSagas from '@redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const enhancers = compose(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducers, enhancers);
sagaMiddleware.run(rootSagas);

export default store;
