import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import heroReducer from './reducers/heroReducer';
import heroSaga from './sagas/heroSaga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  hero: heroReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(heroSaga);

export default store;
