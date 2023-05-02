import React, { useContext } from 'react';
import { UserContext } from '../../AuthProviders/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import AllChefs from '../AllChefs/AllChefs';

const Home = () => {
    const allChef = useLoaderData();
    console.log(allChef);

    return (
        <main className='myContainer my-8 lg:my-14'>
            {/* Banner section */}
            <section>
                <div className='banner'>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full rounded-3xl" />

                            <div className='absolute flex bg-black bg-opacity-30 rounded-3xl w-full h-full justify-center items-center px-20 text-center'>
                                <h1 className='text-white font-bold text-xl lg:text-4xl'>Savor the Flavors of <span className="normal-case text-2xl font-extrabold" style={{ fontFamily: ['Great Vibes', 'cursive'] }}>Cravings & Canvas</span>  Experience Fine Dining Like Never Before!</h1>
                            </div>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="circleBtn ">❮</a>
                                <a href="#slide2" className="circleBtn">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">

                            <img src="https://images.unsplash.com/photo-1543992321-cefacfc2322e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80" className="w-full rounded-3xl" />
                            <div className='absolute flex bg-black bg-opacity-30 rounded-3xl w-full h-full justify-center items-center px-20 text-center'>
                                <h1 className='text-white font-bold text-xl lg:text-4xl'>Indulge in the Best Cuisine in <span className="normal-case text-2xl font-extrabold" style={{ fontFamily: ['Great Vibes', 'cursive'] }}>Cravings & Canvas</span>  A Culinary Adventure Awaits!</h1>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="circleBtn">❮</a>
                                <a href="#slide3" className="circleBtn">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full rounded-3xl" />


                            <div className='absolute flex bg-black bg-opacity-30 rounded-3xl w-full h-full justify-center items-center px-20 text-center'>
                                <h1 className='text-white font-bold text-xl lg:text-4xl'>From Farm to Table - Our Menu Boasts the Freshest Ingredients and Authentic <span className="normal-case text-2xl font-extrabold" style={{ fontFamily: ['Great Vibes', 'cursive'] }}>Indian</span>  Cuisine!</h1>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="circleBtn">❮</a>
                                <a href="#slide1" className="circleBtn">❯</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Chef section */}
            <section className='my-10 lg:my-14 flex items-center justify-center'>
                <div>
                <h1 className='text-center font-bold text-2xl lg:text-3xl text-secondary'>Meet Our Awesome Chefs.</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-10 mt-10 items-center justify-center'>
                    {
                        allChef.map(singleChef => <AllChefs
                            key={singleChef.id}
                            singleChef={singleChef}
                        ></AllChefs>)
                    }
                </div>
                </div>
            </section>


        </main>
    );
};

export default Home;