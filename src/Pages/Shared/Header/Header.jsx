import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../AuthProviders/AuthProvider';
import { FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import userDp from "../../../assets/icons/user.png"

const Header = () => {
    const { user , logOut } = useContext(UserContext);

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
            toast.success('Log Out Successful!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        })
        .catch((error)=>{
            toast.error(error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        })

    }
    return (
        <nav className='myContainer'>
            <div className="flex justify-between items-center  bg-base-100">
                <div className=" flex-grow lg:flex-grow-0">
                    <div className="dropdown w-full">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-medium'>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                            </li>
                            <li className='font-medium'>
                                <NavLink to="/chefs" className={({ isActive }) => (isActive ? 'active' : 'default')}>Chefs</NavLink>
                            </li>
                            <li className='font-medium'>
                                <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                            </li>
                            <li className='font-medium'>
                                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'default')}>About</NavLink>
                            </li>

                            {
                            user ? <li className='font-medium'>
                                <button className='logOutBtn' onClick={handleLogOut}>Log out <FaSignOutAlt /></button>
                            </li> : ""
                        }
                        

                            {/* <li>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-full rounded-full">
                                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </label>
                            </li> */}
                        </ul>

                    </div>
                    <Link to="/" className="normal-case text-2xl font-extrabold hidden lg:flex" style={{ fontFamily: ['Great Vibes', 'cursive'] }}>Cravings & Canvas</Link>
                </div>

                <div className='lg:hidden'>

                    <Link to="/" className="normal-case text-2xl font-extrabold" style={{ fontFamily: ['Great Vibes', 'cursive'] }}>Cravings & Canvas</Link>
                </div>

                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-medium'>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                        </li>
                        <li className='font-medium'>
                            <NavLink to="/chefs" className={({ isActive }) => (isActive ? 'active' : 'default')}>Chefs</NavLink>
                        </li>
                        <li className='font-medium'>
                            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                        </li>
                        <li className='font-medium'>
                            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'default')}>About</NavLink>
                        </li>
                        {
                            user ? <li className='font-medium'>
                                <button className='logOutBtn' onClick={handleLogOut}>Log out <FaSignOutAlt /></button>
                            </li> : ""
                        }
                    </ul>
                </div>

                <div className='ml-14 lg:ml-0'>
                    {
                        user ?
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={`${user.photoURL ? user.photoURL : userDp}`} />
                                </div>


                                <div className='absolute hover:top-5 mt-8 opacity-0 hover:opacity-100'>
                                    <p className='bg-accent p-3'>{user.displayName}</p>
                                </div>

                            </label> :
                            <Link to="/login">
                                <button className='myBtn'>Login</button>
                            </Link>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Header;