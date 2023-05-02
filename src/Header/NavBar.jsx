import React from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='my-8 flex justify-between items-center mx-auto w-10/12 gap-y-6 gap-x-16 flex-wrap'>
            <Link to="/" className='text-3xl font-bold text-[#e8e8e9] bg-black rounded-lg px-4 py-2'>Chow <span className=''>Eateries</span> 🥄	 </Link>

            <div className='flex gap-6'>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </div>

            <div>
                <Link to="/login" className='font-bold bg-[#0D1010] text-white px-8 py-3 rounded-lg'>Login</Link>
            </div>
        </nav>
    );
};

export default NavBar;