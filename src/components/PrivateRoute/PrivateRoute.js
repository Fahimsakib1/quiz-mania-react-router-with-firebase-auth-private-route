import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='text-center my-auto'>
            <div className="spinner-border mt-5 px-4 py-4" role="status">
                <span className="visually-hidden mt-5 text-center">Loading...</span>
            </div>
        </div>
    }

    if (user && user.uid) {
        return children;
    }
    else {
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoute;