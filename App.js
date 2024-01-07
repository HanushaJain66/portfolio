import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import {useState} from 'react'
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Project';
import Services from './Components/Services';
import Education from './Components/Education';
// import AboutUs from './Components/AboutUs';


function App() {
 return<BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Skills' element={<Skills/>}/>
  <Route path='/Education' element={<Education/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Project' element={<Project/>}/>
  {/* <Route path='/Services' element={<Services/>}/> */}
 </Routes>
 </BrowserRouter>

 
    
}

export default App;
