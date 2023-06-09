import React, { useContext } from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth Providers/AuthProvider';
import Loading from '../Components/Loading'

const NavBar = () => {

    const { user, signOutUser, loading } = useContext(AuthContext);


    return (
        <nav className='my-8 flex justify-between items-center mx-auto w-10/12 gap-y-6 gap-x-32 flex-wrap'>
            <Link to="/" className='text-3xl font-bold text-[#e8e8e9] bg-black rounded-lg px-4 py-2'>Chow <span className='text-yellow-300'>Eateries</span> 🥄</Link>

            <div className='flex gap-6'>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </div>

            <div>
                {loading
                    ? <Loading></Loading>
                    : user
                        ? <div className='flex flex-wrap gap-x-6 gap-y-6 items-center'>

                            <div className='relative'>

                                <img src={user.photoURL || ''} alt="profile photo" className='profile-photo w-14 h-14 border-2 border-yellow-300 object-cover inline  rounded-full' />

                                <span className='hidden-unhovered font-medium absolute'>{user.displayName || ''}</span>

                            </div>

                            <button className='font-bold bg-[#0D1010] text-yellow-200 px-8 py-3 rounded-lg ' onClick={signOutUser}>Sign Out</button>
                        </div>
                        : <Link to="/login" className='font-bold bg-[#0D1010] text-yellow-200 px-8 py-3 rounded-lg'>Login</Link>}
            </div>
        </nav>
    );
};

export default NavBar;