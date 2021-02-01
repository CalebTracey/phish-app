import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import apiReducer from "../reducers";
import yearReducer from "../reducers/yearReducer"
import apiMiddleware from "../middleware/api";
import showReducer from '../reducers/showReducer';
import tourReducer from '../reducers/tourReducer';


// const store = createStore(rootReducer, applyMiddleware(apiMiddleware), 
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// window.store = store;
const rootReducer = combineReducers({api: apiReducer, years: yearReducer, shows: showReducer, tours: tourReducer})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(apiMiddleware),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

export default store;