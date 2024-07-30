import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlinkerPage from './pages/BlinkerPage';
import HomePage from './pages/HomePage';
import Exam from './pages/Exam';
import Result from './pages/Result';
import Secreat from './pages/secreat';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blinker' element={<BlinkerPage/>}/>
          <Route path='/exam' element={<Exam/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/secreat' element={<Secreat/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App