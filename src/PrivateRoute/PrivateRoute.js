import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate,useLocation} from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const{users,isLoading}= useAuth();
    const location = useLocation();
    if(isLoading){
        return   <>
        
      <div className='text-center mt-5'>
      <Spinner animation="grow" />
      </div>
      </>
    }
    if(users.email){
      return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
    
};

export default PrivateRoute;