import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Blog from '../Pages/Blog/Blog';
import About from '../Pages/About/About';
import ChefRecipes from '../Pages/ChefRecipes/ChefRecipes';
import PrivateRoute from './PrivateRoute';
import RecipeDetails from '../Pages/RecipeDetails/RecipeDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch("https://cravings-canvas-server-saifulislam1431.vercel.app/all-chef")
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/About",
                element:<About></About>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/chefs/:id",
                element: <PrivateRoute>
                    <ChefRecipes></ChefRecipes>
                </PrivateRoute>,
                loader: ({params})=>fetch(`https://cravings-canvas-server-saifulislam1431.vercel.app/recipe-by-chef-id/${params.id}`)
            },
            {
                path:"/recipeDetails/:id",
                element: <RecipeDetails></RecipeDetails>,
                loader: ({params})=>fetch(`https://cravings-canvas-server-saifulislam1431.vercel.app/recipe-by-id/${params.id}`)
            }
         
        ]
    }
])

export default router;