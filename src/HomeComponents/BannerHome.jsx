import React from 'react';

const BannerHome = () => {
    return (
        
        <div className='grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto mt-16 mb-24 gap-6 '>
            <div className='flex flex-col justify-center  p-12 '>
                <h1 className='font-bold text-5xl leading-[50px] text-[#040f0f]'>Explore the <br /> Flavors of Indonesia</h1>

                <p className='mt-4 text-[#656665]'>Welcome to Chow Eateries, the online platform where you can discover authentic Indonesian recipes from talented chefs. Whether you are looking for a quick snack, a hearty meal, or a sweet treat, you will find something to satisfy your taste buds.</p>

                <div>
                    <button className='px-6 py-2 rounded-lg bg-slate-800 text-yellow-200 font-bold mt-6'>Browse Now</button>
                </div>
               
            </div>

            <div className='flex justify-center'>
                <img src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=426&q=80" alt="tablet on a kitchen counter with utensils" className='rounded-lg border shadow-sm border-yellow-50 ' />
            </div>
            
        </div>
    );
};

export default BannerHome;