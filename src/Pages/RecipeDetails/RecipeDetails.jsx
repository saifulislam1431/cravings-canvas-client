import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import SingleRecipe from '../SingleRecipe/SingleRecipe';

const RecipeDetails = () => {
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    const recipes = useLoaderData();
    // console.log(recipes);
   
    return (
        <section className='myContainer'>

            {
                recipes.map(recipe=><SingleRecipe
                key={recipe.id}
                recipe={recipe}
                ></SingleRecipe>)
            }

        </section>
    );
};

export default RecipeDetails;