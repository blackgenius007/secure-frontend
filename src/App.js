import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import authService from './components/Authentication/Features/auth/authService';
import Navbar2 from './components/Navbar2';
import { useDispatch, useSelector } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import InmateForm from './components/Inmate/newInmateForm';
import FilterableTable from './components/Inmate/inmatesTable';
import Home from './components/Home';  
import Products from './components/Products';
import About from './components/About';
import ServicesSection from './components/ServiceCards'
import Services from './components/Services';
import { reset } from './components/Authentication/Features/auth/authSlice';
import Pricing from './components/Pricing';
 
import Footer from './components/Footer/footer';
import HighlightSection from './components/Footer/HighlightSection'
import Header from './components/Header/Header.js';
import ImageSlider from './components/Carousel';
import Contact from './components/Footer/contact';
import Dashboard from './components/Dashboard/dashboard';
import InmateUpdateForm from './components/Inmate/inmateUpdateForm'
import { Link, useLocation } from 'react-router-dom'; 
import Welcome from './components/Register_Login/Welcome/welcome';
import './App.css';
import Register from './components/Register_Login/Register';
import Sidebar from './logged_out/sidebar';

function App() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [browseOpen, setBrowseOpen] = useState(false);

  const handleLogout = () => {
    authService.logout(navigate);
    dispatch(reset());
    //Refresh the window after logout   
    window.location.reload();
  };

  const toggleDrawer = (open) => () => {
    setBrowseOpen(open);
  };

  const location = useLocation();
  const isHomeRoute = location.pathname === '/';

  return (
    <div className="App">
        <Header/> 
      {/* <Navbar2/> */}
      {user && !isHomeRoute && (
        <Sidebar
          handleLogout={handleLogout}
          isOpen={browseOpen}
          toggleDrawer={toggleDrawer}
        />
      )}

        
 <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="services" element={<Services/>} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Products" element={<Products />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="new" element={<InmateForm />} />
        <Route path="inmates" element={<FilterableTable  />} />
        <Route path="register" element={<Register/>} />
        <Route path="welcome" element={<Welcome/>} />
        <Route path="/inmates-update/:id" element={<InmateUpdateForm />} />
      </Routes>
      </div>
      {/* <div className="footer">
      <div >
      <br/>
      <br/>
    
         <Contact />
      </div>
      </div> */}
    </div>
  );
}

export default App;
