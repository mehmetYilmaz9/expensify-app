console.log('ExpensifyApp is running.'); 
////////IMPORT MODULE
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter';

///REACT REDUX
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

///dispatch the data in the db
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
//import 'react-dates/initialize';
import  {firebase} from './firebase/firebase';

import './playground/promises';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//require("materialize-loader");

const store = configureStore();


//setup provider for the approuter
const jsx = (
    <Provider store={store}>
        <AppRouter />      
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ///first we create the const hasRendered, mean false
    //second the const renderApp, it's a conditional when isn't hasRendered, it's showing the the app div, eventually hasRendered becomes true
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp()
    history.push('/');
  }
});

//git status
//git commit -am "get firebase expenses"
// git push
//git push heroku master