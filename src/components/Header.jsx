import React from 'react'

function Header() {
  return (
    <div className='fixed z-50 w-screen p-6 py-10'>
        {/* Desktop Site */}
        <div className='hidden md:flex w-full h-full p-4 bg-gray-600'>

        </div>

        {/* Mobile Site */}
        <div className='flex md:hidden w-full h-full bg-gray-600'></div>
    </div>
  )
}

export default Header;