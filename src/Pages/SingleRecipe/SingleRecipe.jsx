import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SingleRecipe = ({ recipe }) => {
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    const { cookingMethod, ingredients, recipeImg, recipeName } = recipe;

    return (
        <section>
            <div className="hero min-h-screen my-10 rounded-xl" style={{ backgroundImage: `url("${recipeImg}")` }}>
                <div className="hero-overlay bg-opacity-80 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-2 text-3xl font-bold text-accent">{recipeName}</h1>
                        <p className="mb-2"><span className='font-bold text-primary text-xl'>Ingredients:</span> {ingredients}</p>
                        <p className="mb-2"><span className='font-bold text-primary text-xl'>Cooking Method:</span> {cookingMethod}</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleRecipe;