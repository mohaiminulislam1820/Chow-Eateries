import React from 'react';
import { useNavigate } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { chef_code, imageChef, chefName, experience, likes, recipeNumber } = chef;

    const navigate=useNavigate();

    const handleViewRecipe = (code) => {
        navigate(`/chefRecipes/${code}`);
    }
    return (
        <div className='p-6 border rounded-lg shadow-md text-gray-500'>
            <img src={imageChef} alt="chef image" className='rounded-lg mb-8 w-full h-[350px] object-cover' />

            <div className='flex flex-col gap-1 mb-8'>
                <p >Name : {chefName}</p>
                <p>Experience: {experience} years</p>
                <p>Likes : {likes}</p>
                <p>Number of recipes : {recipeNumber}</p>
            </div>
            <button className='px-6 py-2 bg-slate-800 text-yellow-200 font-bold rounded-lg' onClick={() => handleViewRecipe(chef_code)}>View Recipes</button>
        </div>
    );
};

export default Chef;