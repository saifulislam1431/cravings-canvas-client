import React, { useContext, useRef } from 'react';
import { UserContext } from '../../AuthProviders/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import AllChefs from '../AllChefs/AllChefs';
import "./Home.css"
import Lottie from "lottie-react";
import contactMotion from "../../assets/96060-tta-contact-us.json"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Home = () => {
    const form = useRef();
    const allChef = useLoaderData();
    console.log(allChef);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_serviceId, import.meta.env.VITE_templateId , form.current, import.meta.env.VITE_publicKey)
            .then((result) => {
                toast.success("Thanks for suggestion!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                e.target.reset();
              
            }, (error) => {
                toast.error(error.text, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                
            });
    };


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

            {/* explore recipe */}
            <div className=' font-bold text-xl text-center pt-5 lg:text-3xl text-secondary'>
                <h1>Explore More Recipe</h1>
            </div>
            <section className='my-10 lg:my-14 flex items-center justify-center'>
                <img src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80" alt="" className='w-3/4 rounded-xl' />

                <div className='absolute bg-black bg-opacity-70 recipe-img rounded-lg p-3 lg:px-10 w-2/4'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-base lg:text-3xl text-center font-bold text-secondary'>Curiosity Never Tasted So Good - Let Your Palate Explore the Art of Fine Dining!</h1>

                        <Link to="/" className='myBtn mt-0 lg:mt-3'>Explore More</Link>
                    </div>
                </div>
            </section>


            {/* Get In touch */}
            <section className='my-8 flex  items-center justify-center'>
                <div>
                    <div className=' font-bold text-xl text-center pt-5 lg:text-3xl text-secondary'>
                        <h1>Get In Touch</h1>
                    </div>
                    <div className='flex items-center justify-center gap-10 flex-col lg:flex-row'>
                        <form className='flex flex-col' onSubmit={sendEmail} ref={form}>
                            <label className='text-neutral text-lg mt-2 mb-1'>Name:</label>
                            <input type="text" name="user_name" placeholder="Enter Name" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />
                            <label className='text-neutral text-lg mt-2 mb-1'>Email:</label>
                            <input type="email" name="user_email"
                            placeholder="Enter email" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />

                            <label className='text-neutral text-lg mt-3 mb-1'>Message:</label>

                            <textarea type="text" placeholder="Type Your Suggestion" name="message"className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />


                            <button className='logOutBtn my-5'>Send Message</button>
                        </form>

                        <div className='w-11/12 lg:w-6/12'>
                            <Lottie animationData={contactMotion} loop={true} className='w-full' />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Home;