import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth0();

    // if (isLoading) return <div>Loading...</div>;
    
    if (!isAuthenticated) return <Navigate to="/" />;
    
    return children;
}

export default Protected
