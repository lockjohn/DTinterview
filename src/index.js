import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {
    requestEmployeesList,
    requestEmployeesPage,
    requestEmployee,
    createEmployee
} from './Actions/employee_actions';


import configureStore from './Store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(
        <Provider store={store}> 
            <App />
        </Provider>, root);
    
    //testing
    window.requestEmployee = requestEmployee;
    window.requestEmployeesPage = requestEmployeesPage;
    window.requestEmployeesList = requestEmployeesList;
    window.createEmployee = createEmployee;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
