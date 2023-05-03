import React from 'react';
import { Link } from 'react-router-dom';



const About = () => {
    return (
        <section className='myContainer flex items-center justify-center'>
            <div>

                <h1 className="capitalize text-5xl font-bold mt-3 text-center" style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>About Us</h1>
                <h1 className="capitalize text-5xl font-bold  text-center mt-4" >Traditional & Modern Service
                    <span className='text-secondary'> Since 2023</span></h1>
                <div className='my-10 flex gap-10 flex-col lg:flex-row'>
                    <div><p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque provident quia unde inventore quam cum dolores. Impedit itaque natus aspernatur, provident animi iusto, maxime reprehenderit consequatur sequi, nostrum expedita veritatis molestias vel? Eaque, voluptates libero neque ea quod perspiciatis sunt. Exercitationem corporis aliquam incidunt? Officiis sit distinctio repellat non molestiae?</p></div>
                    <div><p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque provident quia unde inventore quam cum dolores. Impedit itaque natus aspernatur, provident animi iusto, maxime reprehenderit consequatur sequi, nostrum expedita veritatis molestias vel? Eaque, voluptates libero neque ea quod perspiciatis sunt. Exercitationem corporis aliquam incidunt? Officiis sit distinctio repellat non molestiae?</p></div>

                </div>
              
                <div className='mt-10 mb-5 text-center'>
                    <Link to="/" className="normal-case text-2xl font-extrabold" style={{ fontFamily: ['Great Vibes', 'cursive'] }}>Cravings & Canvas</Link>
                </div>
            </div>

        </section>
    );
};

export default About; <h1>This is about</h1>