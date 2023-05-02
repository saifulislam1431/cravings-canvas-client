import React from 'react';
import Lottie from "lottie-react"
import errorAni from "../../assets/74602-404-error-page-creative.json"
import { FaBackward } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <section className='flex items-center flex-col justify-center min-h-[calc(100vh-80px)]'>
            <div>
                <Lottie animationData={errorAni} loop={true} className='w-96'/>
            </div>
            <div className='mt-5'>
                <Link className='inline-flex items-center gap-2 myBtn' to="/"><FaBackward />Back</Link>
            </div>
        </section>
    );
};

export default Error;