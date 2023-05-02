import React, { useContext } from 'react';
import { AuthContext } from '../Auth Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,currentLocation,loading}=useContext(AuthContext);


    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;