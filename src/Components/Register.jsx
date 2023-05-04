import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase config/firebase_config';
import { toast } from 'react-toastify';

const Register = () => {

    const { createNewUserWithEmail,signOutUser } = useContext(AuthContext);

    const navigate=useNavigate();

    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const pictureURL = e.target.pictureURL.value;

        if(email=='' || password== ''){
            setErrorMsg('⛔ ' +'Cannot submit empty email and password fields');
            setTimeout(() => setErrorMsg(''), 4000);
            return;
        }

        if (password.length < 6) {
            setErrorMsg('⛔ ' +'password length has to be at least 6 characters');
            setTimeout(() => setErrorMsg(''), 4000);
            return;
        }


        createNewUserWithEmail(email, password)
            .then((result) => {
                if(result.user)
                    toast('✅ Your sign up has been successful');

                updateProfile(auth.currentUser, { displayName: name, photoURL: pictureURL })
                .then(()=>{
                    signOutUser();
                })

                navigate('/login');

            })
            .catch(error => {
                setErrorMsg('⛔ ' +error.code);
                setTimeout(() => setErrorMsg(''), 4000);
            })
    }

    return (
        <div className="bg-white shadow-md border rounded w-10/12 sm:w-3/4 lg:w-5/12 mx-auto px-8 pt-14 pb-8 mb-4 flex flex-col mt-28">
            <form onSubmit={handleSubmit}>

                <h1 className='text-2xl font-bold mb-6 text-center'>Sign Up Now</h1>

                <hr className='mb-6 w-8/12 mx-auto' />

                <p className="text-gray-500 mt-2 mb-12">Already have an Account?<Link to="/login" className='ml-1 font-semibold text-blue-600 border-b-2 border-blue-500 '> Log In here</Link></p>

                <div className="mb-6">
                    <label className="block  text-sm font-bold mb-4" htmlFor="name">
                        Your Name
                    </label>
                    <input className="shadow  border rounded w-full py-2 px-3 " name="name" type="text" placeholder="name" />
                </div>

                <div className="mb-6">
                    <label className="block  text-sm font-bold mb-4" htmlFor="email">
                        Your Email
                    </label>
                    <input className="shadow  border rounded w-full py-2 px-3 " name="email" type="email" placeholder="email"  />
                </div>
                <div className="mb-6">
                    <label className="block  text-sm font-bold mb-4" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow  border border-red rounded w-full py-2 px-3  mb-3" name="password" type="password" placeholder="******"  />

                    <div className="mb-12">
                        <label className="block  text-sm font-bold mb-4" htmlFor="photo">
                            Profile Photo URL
                        </label>
                        <input className="shadow  border rounded w-full py-2 px-3 " name="pictureURL" type="url" placeholder="https://example.com/example.jpg" />
                    </div>


                </div>

                

                <button className="bg-slate-800 text-yellow-200 font-bold py-3 px-8 rounded-lg mb-4" type="submit">
                    Sign Up
                </button>

                <p className='text-red-400 my-2 ml-4 inline'>{errorMsg}</p>
                
            </form>

        </div>
    );
};

export default Register;