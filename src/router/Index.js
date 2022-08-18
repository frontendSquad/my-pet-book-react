import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer';
import {Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Home from '../views/Home/Index';
import About from '../views/About/Index'
function Index() {
  return (
    <div>
        
      <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}

export default Index
