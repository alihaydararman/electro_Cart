import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Dashboard from '../DashBoard/Dashboard';


const Name = () => {
    const {user}=useAuth()
    return (
        <div>
            <h4>{user.displayName}</h4>
            <Dashboard></Dashboard>
        </div>
    );
};

export default Name;