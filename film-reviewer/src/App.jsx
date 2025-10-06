import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import NewReviewPage from './pages/NewReviewPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/details/:id" element={<HomePage/>} />*/}
        <Route path="/new" element={<NewReviewPage/>} />
        {/*<Route path="/update/:id" element={<HomePage/>} /> */}
        <Route path="*" element={<ErrorPage/>} /> 
      </Routes>
      </>
  )
}

export default App
