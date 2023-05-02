import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const[type , setType] = useState("password");
    const [IsShow , setIsShow] = useState(false);

    const handleShow =()=>{
        setType("text")
    }

    const handleHide =()=>{
        setType("password")
    }
    return (
        <section className='flex items-center justify-center my-10 lg:my-20'>
            <div className='flex flex-col'>
                <div className='mt-10 mb-5 text-center'>

                    <Link to="/" className="normal-case text-2xl font-extrabold" style={{ fontFamily: ['Great Vibes', 'cursive'] }}>Cravings & Canvas</Link>
                </div>
                <div className='text-center my-2'>
                <h2 className='text-2xl font-medium tracking-wide text-secondary' style={{fontFamily: ['Bebas Neue', 'cursive']}}>Register an account</h2>
                </div>

               <form className='flex flex-col'>

               <label className='text-neutral text-lg mt-2 mb-1'>User Name:</label>
                <input type="text" placeholder="Enter Name" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required/>

                <label className='text-neutral text-lg mt-2 mb-1'>Photo Url:</label>
                <input type="url" placeholder="Enter Photo Url" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required/>

               <label className='text-neutral text-lg mt-2 mb-1'>Email:</label>
                <input type="email" placeholder="Enter email" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required/>

                <label className='text-neutral text-lg mt-3 mb-1'>Password:</label>
                <div className='inline-flex items-center'>
                <input type={type} placeholder="Enter password" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required/>
                <div className='relative right-8 cursor-pointer' onClick={()=>setIsShow(!IsShow)}>
                {
                    IsShow ? <FaEyeSlash className='h-5 w-5 text-warning'  onClick={handleHide}/> : <FaEye className='h-5 w-5 text-warning' onClick={handleShow}/>
                }
                </div>
                </div>

                <label className='text-neutral text-lg mt-3 mb-1'>Confirm Password:</label>
                <input type="password" placeholder="Re enter password" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required/>

                <button className='myBtn my-5'>Register</button>
               </form>


                <p className='my-3 font-medium'>Already have an account? <Link to="/login" className='cursor-pointer text-secondary underline'>Sign In</Link></p>
              
            </div>

        </section>
    );
};

export default Register;