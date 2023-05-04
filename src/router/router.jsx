import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../HomeComponents/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Blog from "../Components/Blog";
import ChefRecipes from "../HomeComponents/ChefRecipes";
import Error404 from "../Components/Error404";
import AuthProvider from "../Auth Providers/AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const router = createBrowserRouter([
    {
        path: '/',
        element:
            <AuthProvider>
                <App></App>
            </AuthProvider>,
        errorElement:
            <>
                <AuthProvider>
                    <Header></Header>
                    <Error404 />
                    <Footer></Footer>
                </AuthProvider>
            </>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/chefRecipes/:chefCode',
                element:
                    <PrivateRoute>
                        <ChefRecipes />
                    </PrivateRoute>
                ,
                loader: ({ params }) => fetch(`https://chow-eateries-api.vercel.app/chefs/${params.chefCode}`)
            },
        ]
    },
    {
        path: "*",
        element: <>
            <AuthProvider>
                <Header></Header>
                <Error404 />
                <Footer></Footer>
            </AuthProvider>
        </>
    }
]);

export default router;