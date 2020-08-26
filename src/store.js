import reducer from './reducer/product-reducer';
import { createStore, applyMiddleware, compose,rootReducer } from 'redux';
import thunkMiddleware from 'redux-thunk';
import productReducer from './reducer/product-reducer';
export default createStore(reducer);




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    productReducer,
 composeEnhancers(
  applyMiddleware(thunkMiddleware)
 )
);