import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Main/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Blog from "../Components/Blog";

const router=createBrowserRouter([
    {
        path:'/', 
        element: <App></App>,
        children:[
            {
                path:'/',
                element: <Home />
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