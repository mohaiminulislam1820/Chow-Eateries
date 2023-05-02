import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from './ChefBanner';
import Recipe from './Recipe';
import Loading from '../Components/Loading';

const ChefRecipes = () => {

    const chef = useLoaderData();

    const [recipes, setRecipes] = useState([]);
    const [loadingState, setLoadingState] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://chow-eateries-api.vercel.app/recipes/${chef.chef_code}`);
            const data = await res.json();
            setRecipes(data.recipes);
            setLoadingState(false);
        }
        loadData();

    }, [])

    return (
        <>
            {loadingState
                ? <Loading></Loading>
                : <div>
                    <ChefBanner chef={chef}></ChefBanner>

                    <div className='w-10/12 mx-auto mt-28'>
                        <h1 className='text-center font-bold text-5xl mb-6'>Recipes</h1>

                        <p className='text-gray-500 text-center mb-16'>Check out the delicious recipes shared by the chef. You can also favorite the recipes you like. We hope you enjoy cooking and eating with us!</p>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                            {recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe} />)}
                        </div>

                    </div>

                </div>}
        </>

    );
};

export default ChefRecipes;