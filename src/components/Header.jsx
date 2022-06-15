import React from 'react';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';

import { MdShoppingCart } from 'react-icons/md';

function Header() {
  return (
    <header className='fixed z-50 w-screen bg-gray-700'>
        {/* Desktop Site */}
        <div className='hidden md:flex w-full h-full p-4 items-center justify-between'>
            <div className='flex items-center gap-3'>
                <img src={Logo} className="w-4/12 object-cover" alt="logo" />
            </div>

            <div className='flex items-center'>
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-white hover:text-lighttextGray duration-100 
                    transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-white  hover:text-lighttextGray duration-100 
                    transition-all ease-in-out cursor-pointer'>Product</li>
                    <li className='text-base text-white hover:text-lighttextGray duration-100 
                    transition-all ease-in-out cursor-pointer'>About Us</li>
                </ul>

                <div className='relative flex items-center justify-center'>
                    <MdShoppingCart className='text-white text-2xl ml-8 cursor-pointer'/>
                    <div className='absolute -top-1 -right-2 w-6 h-6 rounded-full bg-slate-400 flex items-center justify-center'>
                        <p className='text-sm text-white font-semibold'>2</p>
                    </div>
                </div>

                <img 
                src={Avatar} 
                className='w-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                alt="userprofile" />
            </div>
        </div>

        {/* Mobile Site */}
        <div className='flex md:hidden w-full h-full '></div>
    </header>
  )
}

export default Header;