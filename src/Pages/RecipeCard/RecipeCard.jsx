import React, { useEffect, useState } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const RecipeCard = ({ recipe }) => {
    const [liked, setLiked] = useState(false);

    const { cookingMethod, ingredients, rating, recipeName, recipeImg, chefId,id } = recipe


    const handleLikeBtn = () => {
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


            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-lg">
                    <figure><img src={recipeImg} alt="Album" className='w-full h-80' /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-primary">{recipeName}</h2>
                        <div className=''>
                            <div>

                                <p className=' text-secondary font-semibold'>Ingredients</p>
                                <div className='flex items-end gap-0'>
                                    <div>
                                        {
                                            ingredients.slice(0, 5).map(ingredient => <li>{ingredient}</li>)
                                        }
                                    </div>
                                    <Link to={`/recipeDetails/${id}`}className='text-primary font-semibold'>...Show More</Link>
                                </div>
                            </div>
                            <div>
                                <p className='mt-4 text-secondary font-semibold'>Cooking Method</p>
                                {
                                    cookingMethod.slice(0, 50)
                                } <Link to={`/recipeDetails/${id}`}className='text-primary font-semibold'>...Read More</Link>

                            </div>
                        </div>

                        <div className="card-actions justify-between items-center">
                            <div className='inline-flex gap-2'>
                                <Rating
                                readonly
                                    placeholderRating={rating}
                                    emptySymbol={<FaStar className='h-5 w-4'/>}
                                    placeholderSymbol={<FaStar className='text-yellow-400 h-5 w-4'/>}
                                    fullSymbol={<FaStar className='h-5 w-4'/>}
                                /> <span className='font-medium'>{rating}</span>
                            </div>
                            <div onClick={handleLikeBtn}>
                                {
                                    liked ? <button className=" circleBtnSecDis btn-disabled "><FaHeart /></button> : <button className="circleBtnSec" ><FaHeart /></button>
                                }
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecipeCard;