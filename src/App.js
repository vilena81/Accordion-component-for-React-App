
import './App.css';
import React from "react";
import AccordionClass from './AccordionClass';
import AccordionFunc from './AccordionFunc';
import Home from './Home';
import { Link, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App' >
      <Link to="/"><h1 className='title1'>ACCORDION</h1></Link>
      
        <div className='link'>
          <Link to="/classComp" style={{color: "#607479"}}>ClassComponent</Link>
          <Link to="/function" style={{color: "#3b3f40"}}> Function</Link>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/classComp' element={<AccordionClass />} />
            <Route path='/function' element={<AccordionFunc />} />
          </Routes>
        </div>
      
    </div>

  );

}

export default App;
