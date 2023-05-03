import React from 'react';

const AboutUs = () => {
    return (
        <div className='w-10/12 mx-auto mb-20'>

            <h1 className='text-4xl font-bold text-slate-800 text-center mb-6'>About Us</h1>

            <p className='text-center text-gray-500 mb-12'>Chow eateries is a unique online platform that showcases the best of Indonesian cuisine and culture. We feature top Indonesian chefs who share their authentic recipes, stories, and tips with our viewers. You can browse through hundreds of dishes, from appetizers to desserts, and learn how to make them at home.</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16'>

            <img src="https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our chefs" className='rounded-lg h-[500px] w-full object-cover' />

            <div className='flex items-center text-gray-600 text-lg p-8'>Our mission is to celebrate and promote the diversity and richness of Indonesian food, and to inspire people to explore and enjoy it. Whether you are a fan of Indonesian food, or curious to try something new, we invite you to join us at Chow eateries, where you can discover the flavors and traditions of this amazing country.</div>
            
            </div>
            
        </div>
    );
};

export default AboutUs;