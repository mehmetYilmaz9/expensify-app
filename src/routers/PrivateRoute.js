import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

///when the user is disconnected, he can't open any page in the PrivateRoute
//the compo locks the page, 
export const PrivateRoute = ({
    isAuthenticated, 
    component: Component,
    //gives access to the other stuff
    ...rest
}) => ( 
    <Route {...rest} component={(props) => (
        //if it's authenticated, wz want to get some jsx rendered to the screen 
        isAuthenticated ? (
            <div>
             <Header />
             <Component {...props} />
          </div> 
        ) : (
            //if he is not autheticated, we redirect then -> compo Redirect
            <Redirect to="/" />
        )
    )} />
);

//The state object is where you store property values that belongs to the component.
//When the state object changes, the component re-renders.
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
  });
 export default connect(mapStateToProps)(PrivateRoute);
