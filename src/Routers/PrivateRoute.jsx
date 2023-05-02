import React, { useContext } from 'react';
import { UserContext } from '../AuthProviders/AuthProvider';
import Loading from '../Pages/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(UserContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from : location}} replace />
};

export default PrivateRoute;