import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <section className='flex items-center justify-center my-10 lg:my-20'>
            <div className='flex flex-col'>
                <div className='mt-10 mb-5 text-center'>

                    <Link to="/" className="normal-case text-2xl font-extrabold" style={{ fontFamily: ['Great Vibes', 'cursive'] }}>Cravings & Canvas</Link>
                </div>
                <div className='text-center my-2'>
                <h2 className='text-2xl font-medium tracking-wide text-secondary' style={{fontFamily: ['Bebas Neue', 'cursive']}}>Login to your account</h2>
                </div>

               <form className='flex flex-col'>
               <label className='text-neutral text-lg mt-2 mb-1'>Email:</label>
                <input type="email" placeholder="Enter email" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required/>

                <label className='text-neutral text-lg mt-3 mb-1'>Password:</label>
                <input type="password" placeholder="Enter password" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required/>

                <button className='myBtn my-5'>Login</button>
               </form>

                <span className='font-medium text-error underline cursor-pointer'>Forgot password?</span>

                <p className='my-3 font-medium'>New user? <Link to="/register" className='cursor-pointer text-secondary underline'>Sign up</Link></p>
                <hr className='border border-primary'/>
                <p className='text-center my-3 font-semibold'>Or login with:</p>
                <div className='text-center'>
                <button className='flex items-center justify-center gap-4 border border-accent w-full py-2 rounded-full font-medium hover:bg-accent hover:text-white'><FaGithub /> GitHub</button>
                <button className='flex items-center justify-center gap-4 w-full mt-2 border border-accent py-2 rounded-full font-medium hover:bg-accent hover:text-white'><FaGoogle /> Google</button>
                </div>
            </div>

        </section>
    );
};

export default Login;