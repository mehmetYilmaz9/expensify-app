import React from 'react';
import { Router, Route, Switch,Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';

import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


//The history library lets you easily manage session history anywhere JavaScript runs. 
//history abstracts away the differences in various environments and provides 
//a minimal API that lets you manage 
//the history stack, navigate, and persist state between sessions.
export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true} />
          <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
          <PrivateRoute path="/create" component={AddExpensePage} />
          <PrivateRoute path="/edit/:id" component={EditExpensePage} />
      
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );

export default AppRouter;