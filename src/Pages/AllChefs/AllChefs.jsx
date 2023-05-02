import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllChefs = ({ singleChef }) => {
    // console.log(singleChef);
    const { chefName, chefPicture, id, likes, numberOfRecipes, yearsOfExperience } = singleChef
    return (
        <section>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={chefPicture} alt="Shoes" className='h-96 w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p className='font-semibold text-lg'><span className='text-primary'>{yearsOfExperience}+</span> years of experience</p>
                    <div className='my-2 flex justify-between items-center'>
                        <p className='text-lg font-medium'><span className='text-primary font-bold'>{numberOfRecipes}+</span> Recipe</p>
                        <div>
                        <p className='inline-flex items-center gap-2'><FaHeart className='text-red-600 h-5 w-5'/> <span>{likes}</span></p>
                        </div>
                    </div>
                    <Link to={`/chefs/${id}`} className="card-actions justify-center w-full mt-4">
                        <button 
                        className="btn btn-secondary text-white w-full">View Recipes</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AllChefs;