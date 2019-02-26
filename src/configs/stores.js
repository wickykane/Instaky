import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import initReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

export default function initStore(initialState, history) {
    const middlewares = [thunk, routerMiddleware(history), logger];
    const enhancers = [applyMiddleware(...middlewares)];

    const composeEnhancers = (process.env.NODE_ENV !== 'production') && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldhotreload: false }) :
        compose;

    let store = createStore(initReducer(), initialState, composeEnhancers(...enhancers));
    
    // Dynamic Inject Reducers 
    store.injectedReducers = {}; 
    store.injectReducer = (key, reducer) => {
      store.injectedReducers[key] = reducer;
      store.replaceReducer(initReducer(store.injectedReducers));
      return store;
    };

    return store;
}