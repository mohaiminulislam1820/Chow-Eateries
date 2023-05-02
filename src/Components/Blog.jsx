import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 w-10/12 mx-auto'>
            <h1 className='mb-14 text-4xl font-bold text-center'>Blog</h1>
            <div className='mb-20'>

                <p className='mb-2 text-gray-500'> Q : What are the differences between uncontrolled and controlled components? </p>
                <p className='mb-6 text-slate-800 font-medium'>Answer : Controlled components do not have their own state, rather they recieve a callback update and value via props from their parent and relies on React to manage it. Uncontrolled components have their own state and manage it themselves ensuring a single source of truth. </p>

                <p className='mb-2 text-gray-500'> Q :  How to validate React props using PropTypes</p>
                <p className='mb-6 text-slate-800 font-medium'>Answer : We can validate React props using PropTypes library by defining what each prop's type is. If the expected prop type does not match with the ones we are getting inside the component then we will see a warning.</p>

                <p className='mb-2 text-gray-500'> Q : What are the differences between nodejs and express js? </p>
                <p className='mb-6 text-slate-800 font-medium'>Answer : Node Js is a run time environment for building server-side event driven applications using JavaScript. Express Js is a framework based on Node Js for building web applications using the principles and approaches of Node js. It simplifies the development of Node Js web applications by providing a higher level of abstraction.</p>

                <p className='mb-2 text-gray-500'> Q : What is a custom hook, and why will you create a custom hook? </p>
                <p className='mb-4 text-slate-800 font-medium'>Answer : A custom hook is a reusable function that starts with the word use and may call other hooks. Custom hooks allow us to bundle common logic and reuse it in multiple components. This simplifies code, avoids duplication and enhance readablity of our code.</p>
            </div>

            <div className='text-center'>
            <h2 className='mb-4 text-xl font-medium'>Get Your Pdf</h2>
            <button className='text-2xl font-bold text-white bg-slate-800 rounded-lg px-4 py-1'>🗎</button>
            </div>
        </div>
    );
};

export default Blog;