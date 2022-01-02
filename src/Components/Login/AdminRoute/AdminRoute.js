import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';



const AdminRoute = (props) => {
        

    const {children,...rest}=props
    const {user,admin}=useAuth()
                    
    if(!admin){

        return <div className="d-flex justify-content-center ">
        <div className="spinner-border" role="status">
          
        </div>
        <h3 className="sr-only">Loading...</h3>
      </div>
    }
   
    
    return (

        <Route
        {...rest}
        render={({location})=> user?.email && admin?children:<Redirect to={{pathname:"/home",state:{from:{location}}
    
    }}></Redirect>}

     >
           
            
        </Route>
    );
};

export default AdminRoute;