import React from 'react';
import useAuth from '../../Hooks/useAuth';


const Name = () => {
    const {user}=useAuth()
    return (
        <div>
            <h4>{user.displayName}</h4>
        </div>
    );
};

export default Name;