import React from 'react';
import { toast } from 'react-toastify';


const Recipe = ({recipe}) => {
    const {name,cooking_method,ingredients,ratings}=recipe;

    const handleClick=(e)=>{
        toast('✅ This recipe is your favorite.');
        e.target.setAttribute('disabled','true');
        e.target.classList.add('text-gray-300');
        
    }

    return (
        <div className='border p-12 rounded-lg shadow-sm text-gray-500 relative'>

            <h1 className='text-2xl font-bold text-slate-800 mb-6'>{name}</h1>

            <p className='mb-4'> <span className='text-gray-700 font-medium'>Ingredients :</span> <br /> {ingredients.join('+')}</p>

            <p className='mb-4'><span className='text-gray-700 font-medium'>Cooking Method :</span> <br /> {cooking_method}</p>

            <p className='mb-12'><span className='text-gray-700 font-medium '>Rating :</span> {ratings}</p>

            <div className='flex items-end absolute bottom-6'>
                <button type='submit' className='bg-slate-800 text-yellow-300 font-bold px-6 py-2 rounded-lg' onClick={handleClick}>Favorite</button>
            </div>
        </div>
    );
};

export default Recipe;