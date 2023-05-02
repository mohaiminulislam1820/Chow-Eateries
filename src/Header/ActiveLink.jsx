import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({children,to}) => {
    return (
        <NavLink className={({isActive})=>isActive?'text-slate-900 font-medium text-lg border-b-4 border-yellow-300 pb-1':'font-medium pb-1 text-lg text-slate-500'} to={to} >{children}</NavLink>
    );
};

export default ActiveLink;