import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Main/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Blog from "../Components/Blog";
import BannerHome from "../Main/BannerHome";

const router=createBrowserRouter([
    {
        path:'/', 
        element: <App></App>,
        children:[
            {
                path:'/',
                element: <BannerHome />
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
        ]
    }
]);

export default router;