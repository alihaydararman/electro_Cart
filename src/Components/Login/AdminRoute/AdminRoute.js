import React from 'react';
import { Navigate ,useLocation} from 'react-router';
import useAuth from '../../../Hooks/useAuth';



const AdminRoute = (props) => {
        
    const location = useLocation();
    const {children,...rest}=props
    const {user,admin}=useAuth()
    console.log(admin);
    if(user.email && admin){
        return children;
    }
   return <Navigate to='/' state={{ from: location }} />;
                    
   
};

export default AdminRoute;