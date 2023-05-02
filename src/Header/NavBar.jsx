import React, { useContext } from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth Providers/AuthProvider';

const NavBar = () => {

    const {user,signOutUser}=useContext(AuthContext);


    return (
        <nav className='my-8 flex justify-between items-center mx-auto w-10/12 gap-y-6 gap-x-16 flex-wrap'>
            <Link to="/" className='text-3xl font-bold text-[#e8e8e9] bg-black rounded-lg px-4 py-2'>Chow <span className='text-yellow-300'>Eateries</span> 🥄</Link>

            <div className='flex gap-6'>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </div>

            <div>
               { user
                ?<div className='flex flex-wrap gap-y-6 items-center'>
                    <img src={user.photoURL} alt="profile photo" className='w-10 inline mr-2 rounded-full' />
                    <p className='inline mr-4'>{user.displayName}</p>
                    <button className='font-bold bg-[#0D1010] text-yellow-200 px-8 py-3 rounded-lg ' onClick={signOutUser}>Sign Out</button>
                </div>
                :<Link to="/login" className='font-bold bg-[#0D1010] text-yellow-200 px-8 py-3 rounded-lg'>Login</Link>}
            </div>
        </nav>
    );
};

export default NavBar;