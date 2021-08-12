import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers'
import apiMiddleware from "../middleware/api";



// const store = createStore(rootReducer, applyMiddleware(apiMiddleware), 
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// window.store = store;

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

// const render = () => {
//     document.body.innerText = store.getState()
// }

// store.subscribe(render);
// render();

// document.addEventListener('click', () => {
//     store.dispatch({type: 'INCREMENT'})
// })

export default store;