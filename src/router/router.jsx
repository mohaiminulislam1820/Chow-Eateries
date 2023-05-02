import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../HomeComponents/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Blog from "../Components/Blog";
import ChefRecipes from "../HomeComponents/ChefRecipes";


const router=createBrowserRouter([
    {
        path:'/', 
        element: <App></App>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/register',
                element: <Register />
            },
            {
                path:'/blog',
                element: <Blog />
            },
            {
                path:'/chefRecipes/:chefCode',
                element: <ChefRecipes />,
                loader: ({params})=>fetch(`https://chow-eateries-api.vercel.app/chefs/${params.chefCode}`)
            },
        ]
    }
]);

export default router;