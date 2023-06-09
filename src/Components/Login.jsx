import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth Providers/AuthProvider';


const Login = () => {
    const { setLoading, loginWithEmail, signInWithGoogle, signInWithGithub, currentLocation } = useContext(AuthContext);

    const from = currentLocation?.state?.from || '/';
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if(email=='' || password== ''){
            setErrorMsg('⛔ ' +'Cannot submit empty email and password fields');
            setTimeout(() => setErrorMsg(''), 4000);
            return;
        }
        
        loginWithEmail(email, password)
            .then(result => {
                
                result.user
                    ? navigate(from, { replace: true })
                    : ''
            }
            )
            .catch((error) => {
                
                setErrorMsg('⛔ ' + error.code);
                setTimeout(() => setErrorMsg(''), 4000);
                
            })
            setLoading(false);

    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => result.user
                ? navigate(from, { replace: true })
                : ''
            )
            .catch((error) => {

                setErrorMsg('⛔ ' + error.code);
                setTimeout(() => setErrorMsg(''), 4000)
            })
    }

    const handleGithub = () => {
        signInWithGithub()
            .then(result => result.user
                ? navigate(from, { replace: true })
                : ''
            )
            .catch((error) => {

                setErrorMsg('⛔ ' + error.code);
                setTimeout(() => setErrorMsg(''), 4000)
            })
    }


    return (
        <div className="bg-white shadow-md border rounded w-10/12 sm:w-3/4 lg:w-5/12 mx-auto px-8 pt-14 pb-8 mb-4 flex flex-col mt-28">
            <form onSubmit={handleSubmit}>

                <h1 className='text-2xl font-bold mb-10 text-center'>Sign in to your account</h1>
                <div className="mb-6">
                    <label className="block  text-sm font-bold mb-4" htmlFor="email">
                        Your Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 " name="email" type="email" placeholder="email"  />
                </div>
                <div className="mb-6">
                    <label className="block  text-sm font-bold mb-4" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow  border border-red rounded w-full py-2 px-3  mb-3" name="password" type="password" placeholder="******"  />
                    <p className="text-gray-500 mt-2 mb-4">Don't have an Account?<Link to="/register" className='ml-1 font-semibold text-blue-600 border-b-2 border-blue-500 '> Sign Up here</Link></p>

                </div>

                <button className="bg-slate-800 text-yellow-200 font-bold py-3 px-8 rounded-lg" type="submit">
                    Sign In
                </button>
                <p className='text-red-400 my-2 ml-4 inline'>{errorMsg}</p>
            </form>

            <div className='flex items-center mt-8 mb-6'>
                <hr className='border flex-1' />
                <p className='text-center font-bold mx-4'>Or</p>
                <hr className='border flex-1' />
            </div>

            <div className='flex justify-around gap-6'>
                <button className="bg-white text-slate-800 border border-slate-600 font-bold py-2 px-4 rounded-lg" type="button" onClick={handleGoogle}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google logo" className='w-5 inline mr-2' />
                    Sign in with Google</button>

                <button className="bg-white text-slate-800 font-bold py-2 px-4 rounded-lg border border-slate-600" type="button" onClick={handleGithub}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="github logo" className='w-7 inline mr-2' />
                    Sign in with Github</button>

            </div>

        </div>
    );
};

export default Login;