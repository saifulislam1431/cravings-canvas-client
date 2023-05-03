import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RecipeCard = ({ recipe }) => {
    const [liked, setLiked] = useState(false);

    const { cookingMethod, ingredients, rating, recipeName, recipeImg, chefId } = recipe


    const handleLikeBtn = ()=>{
        setLiked(true)
        if (!liked) {
            toast.success('Added to favorite!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            
        }
    }

    // const handleLike = () => {
        
        
    // }
    return (
        <section>
            <div className='chefProfile'>

            </div>
            <div className='cardContainer'>
                <div className="card lg:card-side bg-base-100 shadow-lg my-10 lg:my-14">
                    <figure><img src={recipeImg} alt="Album" className='w-full lg:w-80 h-80' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-primary">{recipeName}</h2>
                        <div className=''>
                            <div>

                                <p className=' text-secondary font-semibold'>Ingredients</p>
                                <div className='flex items-end gap-0'>
                                    <div>
                                        {
                                            ingredients.slice(0, 3).map(ingredient => <li>{ingredient}</li>)
                                        }
                                    </div>
                                    <p className='text-primary font-semibold'>...Show More</p>
                                </div>
                            </div>
                            <div>
                                <p className='mt-4 text-secondary font-semibold'>Cooking Method</p>
                                {
                                    cookingMethod.slice(0, 50)
                                } <span className='text-primary font-semibold'>...Read More</span>

                            </div>
                        </div>
                        <div className="card-actions justify-end" onClick={handleLikeBtn}>
                            {
                                liked ? <button className=" circleBtnSecDis btn-disabled "><FaHeart /></button> : <button className="circleBtnSec" ><FaHeart /></button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecipeCard;