import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './create';
import Erase from './erase';
import Update from './update';
import Home from './Home';
import Navbar from './nav';

function Application() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path= '/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/erase' element={<Erase />}></Route>
          <Route path='/update' element={<Update />}></Route>
        </Routes>
      </Router>

    </>
  )

}



export default Application;
