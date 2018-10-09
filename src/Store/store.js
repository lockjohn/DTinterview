import {createStore, applyMiddleware } from 'redux';
import RootReducer from '../Reducers/RootReducer';
import thunk from "redux-thunk";

const configureStore = () => {
   return createStore(RootReducer, applyMiddleware(thunk));
} 

export default configureStore;