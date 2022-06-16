import React, { useState } from 'react';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdShoppingCart, MdAdd, MdLogout } from 'react-icons/md';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        if(!user){
            const { 
                user: {refreshToken, providerData},
            } = await signInWithPopup(firebaseAuth, provider)
            dispatch({
                type : actionType.SET_USER,
                user : providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        }else{
            setIsMenu(!isMenu);
        }
    };

    const logout = () =>  {
        setIsMenu(false)
        localStorage.clear()

        dispatch({
            type: actionType.SET_USER,
            user: null,
        });
    };

  return (
    <header className='fixed z-50 w-screen bg-gray-500 px-4 md:14'>
        {/* Desktop Site */}
        <div className='hidden md:flex w-full h-full p-4 items-center justify-between'>
            <Link to={"/"} className='flex items-center gap-3'>
                <img src={Logo} className="w-4/12 object-cover" alt="logo" />
            </Link>

            <div className='flex items-center gap-8'>
                <motion.ul 
                initial={{ opacity: 0, x:200 }}
                animate={{ opacity: 1, x:0 }}
                exit={{ opacity: 0, x:200 }} 
                className='flex items-center gap-8'>
                    <li className='text-base text-white hover:text-lighttextGray duration-100 
                    transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-white  hover:text-lighttextGray duration-100 
                    transition-all ease-in-out cursor-pointer'>Product</li>
                    <li className='text-base text-white hover:text-lighttextGray duration-100 
                    transition-all ease-in-out cursor-pointer'>About Us</li>
                </motion.ul>

                <div className='relative flex items-center justify-center'>
                    <MdShoppingCart className='text-white text-2xl cursor-pointer hover:text-lighttextGray duration-100 
                    transition-all ease-in-out'/>
                    <div className='absolute -top-3 -right-3 w-5 h-5 rounded-full 
                    bg-slate-400 flex items-center justify-center'>
                        <p className='text-sm text-white font-semibold'>2</p>
                    </div>
                </div>

                <div className='relative'>
                    <motion.img
                    whileTap={{scale : 0.6 }}
                    src={user ? user.photoURL : Avatar} 
                    className='w-8 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                    alt="userprofile" 
                    onClick={login}
                    />
                    {isMenu && (
                        <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }} 
                        className='w-40 bg-grey-300 shadow-xl rounded-lg flex flex-col absolute top-10 right-0 cursor-pointer'>
                            {user && user.email === "hafizkalamabdillah@gmail.com" && (
                                <Link to={"/createItem"}>
                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer 
                                transition-all duration-100 ease-in-out text-base'>
                                    New Item <MdAdd/>
                                </p>
                                </Link>    
                            )}
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer 
                            transition-all duration-100 ease-in-out text-base'>Logout <MdLogout/></p>
                        </motion.div>
                        )
                    }
                </div>
            </div>
        </div>

        {/* Mobile Site */}
        <div className='flex md:hidden w-full h-full items-center justify-between'>
            <Link to={"/"} className='flex items-center gap-3'>
                <img src={Logo} className="w-4/12 object-cover" alt="logo" />
            </Link>

            <div className='relative flex items-center justify-between '>
                <MdShoppingCart className='text-white text-2xl cursor-pointer hover:text-lighttextGray'/>
                <div className='absolute -top-3 -right-3 w-5 h-5 rounded-full 
                bg-slate-400 flex items-center justify-center'>
                    <p className='text-xs text-white font-semibold'>2</p>
                </div>
            </div>

            <div className='relative'>
                <motion.img
                    whileTap={{scale : 0.6 }}
                    src={user ? user.photoURL : Avatar} 
                    className='w-8 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                    alt="userprofile" 
                    onClick={login}
                />
                {isMenu && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }} 
                        className='w-40 bg-grey-300 shadow-xl rounded-lg flex flex-col absolute top-10 right-0 cursor-pointer'>
                            {user && user.email === "hafizkalamabdillah@gmail.com" && (
                                <Link to={"/createItem"}>
                                <p className='px-4 py-3 flex items-center gap-3 cursor-pointer 
                                transition-all duration-100 ease-in-out text-base'>
                                    New Item <MdAdd/>
                                </p>
                                </Link>    
                            )}
                            <ul className='flex flex-col px-4 py-2 gap-3'>
                                <li className='text-base hover:text-lighttextGray duration-100 
                                transition-all ease-in-out cursor-pointer'>Home</li>
                                <li className='text-base hover:text-lighttextGray duration-100 
                                transition-all ease-in-out cursor-pointer'>Product</li>
                                <li className='text-base hover:text-lighttextGray duration-100 
                                transition-all ease-in-out cursor-pointer'>About Us</li>
                            </ul>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer 
                            transition-all duration-100 ease-in-out text-base'
                            onClick={logout}
                            >
                                Logout <MdLogout/>
                            </p>
                    </motion.div>
                    )
                    }
                </div>
        </div>
    </header>
  )
}

export default Header;