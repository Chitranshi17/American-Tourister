import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/FooterComponents/Footer'
import Home from './Pages/Home';
import DiscoverPage from './Pages/DiscoverPage';
import { Luggage } from '@mui/icons-material';
import LuggagePage from './Pages/LuggagePage';
import BackPackPage from './Pages/BackPacksPage';
import DufflesPage from './Pages/DufflesPage';
import BrowseMorePage from './Pages/BrowseMorePage';
// import CardSlider from './Components/CardSlider'


const App = () => {
  return (
    <Router>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/discover' element={<DiscoverPage/>}/>
      <Route path='/luggage' element={<LuggagePage/>}/>
      <Route path='/backpacks' element={<BackPackPage/>}/>
      <Route path='/duffles' element={<DufflesPage/>}/>
      <Route path='/browsemore' element={<BrowseMorePage/>}/>
    </Routes>
    </Router>
  )
}

export default App
