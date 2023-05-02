import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({children,to}) => {
    return (
        <NavLink className={({isActive})=>isActive?'text-[#0D1010] font-medium text-lg border-b-2 border-slate-400 pb-1':'font-medium text-lg text-gray-500'} to={to} >{children}</NavLink>
    );
};

export default ActiveLink;