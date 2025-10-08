import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import NewReviewPage from './pages/NewReviewPage';
import UpdateReviewPage from './pages/UpdateReviewPage';
import DetailsPage from './pages/DetailsPage';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/details/:id" element={<DetailsPage/>} />
        <Route path="/new" element={<NewReviewPage/>} />
        <Route path="/update/:id" element={<UpdateReviewPage />} />
        <Route path="*" element={<ErrorPage/>} /> 
      </Routes>
      </>
  )
}

export default App
