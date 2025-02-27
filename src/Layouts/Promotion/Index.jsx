import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.pathname === '/index') {
            navigate('/', { replace: true });
        }
    }, [navigate]);

    return (
        <>
            <Outlet></Outlet>
        </>
    );
};

export default Index;