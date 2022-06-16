import React from 'react';
import '../img/emilflower.jpg'

const MainContainer = () => {
  return (
    <div className='relative w-full h-96'>
      <img src="../img/emilflower.jpg" className='w-full h-full object-cover absolute mix-blend-overlay'/>
      <div className='p-24'>
        <h1 className='text-black text-6xl text-center'>NIER</h1>
        <h2 className='text-black text-center'>Kini Tersedia</h2>
      </div>
    </div>
  )
}

export default MainContainer;