import React from 'react';

const ChefBanner = ({chef}) => {
    const {chefName,bio,imageChef,likes,experience,recipeNumber}=chef;
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 w-10/12 mx-auto gap-8 h-[calc(100%-140px)] mt-20'>
            <div className='flex justify-center'>
                <img src={imageChef} alt="chef image" className='rounded-lg  h-full object-cover' />
            </div>

            <div className='p-8 flex flex-col justify-center text-gray-500'>
                <h1 className='text-5xl font-bold text-slate-800 mb-4'>{chefName}</h1>

                <p>{bio}</p>

                <div className='flex flex-wrap gap-2 my-6 text-gray-200'>
                    <p className='bg-slate-700 px-4 py-1 rounded-lg'>{likes} likes</p>

                    <p className='bg-slate-700 px-4 py-1 rounded-lg'>{recipeNumber} recipes</p>

                    <p className='bg-slate-700 px-4 py-1 rounded-lg'>{experience} years of experience</p>
                </div>

            </div>

        </div>
    );
};

export default ChefBanner;