import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import Cars from "./pages/cars/Cars"
import Employees from "./pages/employees/Employees"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/employees' element={<Employees/>}/>
      </Routes>
    </Router>
  );
}

export default App;
