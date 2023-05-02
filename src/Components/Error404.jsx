import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    const navigate=useNavigate();
    return (
        <div>
            <img src="https://i.ibb.co/WDSB9B2/Capture.png" alt="" className='w-9/12 mx-auto' />

            <div className='flex justify-center mt-8'>
                <button className='px-9 py-4 bg-slate-800 text-yellow-300 font-bold rounded-lg' onClick={()=>navigate('/')}>Go Back to HomePage</button>
            </div>
            
        </div>
    );
};

export default Error404;