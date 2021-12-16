import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const{users,isLoading}= useAuth();
    if(isLoading){
        return   <>
        
      <div className='text-center mt-5'>
      <Spinner animation="grow" />
      </div>
      </>
    }
    return (
        <Route
        {...rest}
        render={({location})=> users.email ? children :<Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        
        ></Redirect>}
        
        >
            
        </Route>
    );
};

export default PrivateRoute;