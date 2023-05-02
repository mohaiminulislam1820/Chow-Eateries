import React, { useEffect, useState } from 'react';
import Chef from './Chef';
import Loading from '../Components/Loading';

const Chefs = () => {

    const [chefs, setChefs] = useState([]);
    const [loadingState, setLoadingState] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('https://chow-eateries-api.vercel.app/chefs');
            const data = await res.json();
            setChefs(data);
            setLoadingState(false);
        }
        loadData();

    }, [])

    return (
        <div className='w-10/12 mx-auto mb-36'>
            <h1 className='font-bold text-4xl text-center mb-6'>Meet the Chefs <br /> Behind Your Favorite Recipes</h1>
            <p className='mb-16 text-gray-500'>If you love cooking and eating delicious food, you probably have some favorite recipes that you make over and over again. But have you ever wondered who are the chefs behind those recipes? We want to introduce you to some of the talented chefs who share their secrets with us.</p>

            {loadingState
                ? <Loading />
                : <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {chefs.map(chef => <Chef chef={chef} key={chef.id} />)}
                </div>
            }


        </div>
    );
};

export default Chefs;