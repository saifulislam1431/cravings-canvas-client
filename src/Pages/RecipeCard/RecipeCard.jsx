import React, { useEffect, useState } from 'react';

const RecipeCard = ({ recipe }) => {
    const{cookingMethod,ingredients,rating,recipeName,recipeImg,chefId} = recipe
   
  

    return (
        <section>
            <div className='chefProfile'>

            </div>
            <div className='cardContainer'>
                <div className="card lg:card-side bg-base-100 shadow-lg my-10 lg:my-14">
                    <figure><img src={recipeImg} alt="Album" className='w-full lg:w-80 h-80'/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-primary">{recipeName}</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="myBtn">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecipeCard;