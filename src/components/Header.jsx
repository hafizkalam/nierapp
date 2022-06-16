import React from 'react';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdShoppingCart } from 'react-icons/md';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = useStateValue();

    const login = async () => {
        const { user : {refreshToken, providerData}} 
        = await signInWithPopup(firebaseAuth, provider)
        dispatch({
            type : actionType.SET_USER,
            user : providerData[0],
        })
    };

  return (
    <header className='fixed z-50 w-screen bg-gray-700'>
        {/* Desktop Site */}
        <div className='hidden md:flex w-full h-full p-4 items-center justify-between'>
            <Link to={"/"} className='flex items-center gap-3'>
                <img src={Logo} className="w-4/12 object-cover" alt="logo" />
            </Link>

            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-white hover:text-lighttextGray duration-100 
                    transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-white  hover:text-lighttextGray duration-100 
                    transition-all ease-in-out cursor-pointer'>Product</li>
                    <li className='text-base text-white hover:text-lighttextGray duration-100 
                    transition-all ease-in-out cursor-pointer'>About Us</li>
                </ul>

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
                </div>
            </div>
        </div>

        {/* Mobile Site */}
        <div className='flex md:hidden w-full h-full '></div>
    </header>
  )
}

export default Header;