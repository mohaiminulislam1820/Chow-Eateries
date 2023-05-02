import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-slate-800 text-gray-300 mt-[140px]'>
            <div className='w-10/12 mx-auto py-16'>
                <h1 className='text-yellow-200 text-2xl font-bold mb-12'>Chow Eateries 🥄</h1>

                <h1 className='text-xl font-semibold mb-4 text-gray-100'>Quick Links</h1>
                <div className='grid grid-cols-2'>

                    <div className='flex flex-col gap-1'>
                        <p className='cursor-pointer'>Product</p>
                        <p className='cursor-pointer'>Benifits</p>
                        <p className='cursor-pointer'>Partners</p>
                        <p className='cursor-pointer'>Team</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='cursor-pointer'>Terms of service</p>
                        <p className='cursor-pointer'>Support</p>
                        <p className='cursor-pointer'>Legal</p>
                        <p className='cursor-pointer'>About</p>
                    </div>
                </div>


                <div className=' mt-10'>
                    
                    <h1 className='text-xl text-gray-100 font-bold mb-4'>Connect with Us</h1>
                    <div className='flex gap-6 items-center'>
                        
                        <p className='bg-[url("https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg")] h-10 w-10 cursor-pointer'></p>
                        <p className=' w-10 h-8 cursor-pointer bg-[url("https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg")]'></p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github logo" className='w-10 bg-white rounded-full' />
                        <img src="https://i.ibb.co/D8pSXrs/Instagram-image.png" alt="instagram logo" className='w-10 ' />
                    </div>

                    <h1 className='mt-16 text-center'>© All Rights Reserved by Chow Eateries</h1>
                </div>

            </div>



        </footer>
    );
};

export default Footer;