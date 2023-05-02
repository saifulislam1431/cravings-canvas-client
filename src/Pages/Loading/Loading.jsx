import React from 'react';
import Lottie from "lottie-react";
import loadingAni from "../../assets/99318-hms-loading.json";
const Loading = () => {
    return (
        <section className='flex items-center justify-center min-h-[calc(100vh-80px)]'>
            <div>
                <Lottie animationData={loadingAni} loop={true} />
            </div>
        </section>
    );
};

export default Loading;