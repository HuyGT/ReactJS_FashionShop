import {} from "react-redux";
import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const store =
  process.env.NODE_ENV === "production"
    ? createStore(rootReducer,middleware)
    : createStore(rootReducer, composeWithDevTools(middleware));

export default store;
sagaMiddleware.run(rootSaga);

