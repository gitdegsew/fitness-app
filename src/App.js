import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import ExerciseDetails from './pages/ExerciseDetails'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'


const App = () => {
  return (
    <div className="App bg-[#f4f8f4]">
       <ScrollToTop/>
      <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/exercise/:id" element={<ExerciseDetails/>} />
     </Routes>
     <Footer/>
    </div>
  )
}

export default App