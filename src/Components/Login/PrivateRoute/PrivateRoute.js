import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  console.log(user)
   if (!user.email) {
     return <Navigate to='/login' state={{ from: location }} />;
   }
  if (isLoading) {
    return (
      <div className='text-center'>
        <Spinner className='mt-5 ' animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  }
 

  return children;
};

export default PrivateRoute;
