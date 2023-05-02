import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import { FaHeart } from 'react-icons/fa';

const ChefRecipes = () => {
    const id = useParams()
    const allRecipes = useLoaderData();
    const [chef, setChef] = useState({});

    useEffect(() => {
        fetch(`https://cravings-canvas-server-saifulislam1431.vercel.app/chef-by-id/${id.id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])
    const { chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience, bio } = chef

    // console.log(chef);
    // const chef = useLoaderData();
    // console.log(chef);
    // console.log(allRecipes);
    return (
        <section className='myContainer flex items-center justify-center'>

            <div>
                <div className='py-10'>
                    <div className="hero min-h-screen  bg-primary bg-opacity-10">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">{chefName}</h1>
                                <p className="py-6">{bio}</p>
                                <div>
                                    <p className='font-semibold text-lg text-center'><span className='text-primary'>{yearsOfExperience}+</span> years of experience</p>
                                    <div className='my-2 flex justify-evenly items-center'>
                                        <p className='text-lg font-medium'><span className='text-primary font-bold'>{numberOfRecipes}+</span> Recipe</p>
                                        <div>
                                            <p className='inline-flex items-center gap-2'><FaHeart className='text-red-600 h-5 w-5' /> <span>{likes}</span></p>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='my-10'>
                        {
                            allRecipes.map(recipe => <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                            ></RecipeCard>)
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ChefRecipes;