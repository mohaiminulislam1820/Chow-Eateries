import React, { useContext } from 'react';
import { AuthContext } from '../Auth Providers/AuthProvider';
import Loading from '../Components/Loading';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, currentLocation, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading />
    }
    return (
        <>
            {user
                ? <>{children}</>
                : <Navigate to='/login' state={{ from: currentLocation?.pathname }} replace />
            }
        </>
    );
};

export default PrivateRoute;