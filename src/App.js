import React from 'react';
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { CreateContainer, Header, MainContainer } from './components';

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col' >
      <Header />

      <main className='mt-24 md:mt-24 p-8 w-full'>
        <Routes>
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  )
}

export default App;