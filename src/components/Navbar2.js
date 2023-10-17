import React from 'react';
import { styled } from '@mui/system';
import Logos from '../assets/img/bars.png'; 
import {Button} from '@mui/material';
import Login from './Register_Login/Login'; 
import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  height: '80px', // Adjust the height as needed
}));

const Logo = styled('img')({
  height: '40px',
  marginRight: '10px',
});

const NavItem = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: 'black', // Set the font color to black
  marginRight: '10px',
}));

const Navbar = () => {
 
  const [openLogin, setOpenLogin]= React.useState(false);
  const {user , isSuccess } = useSelector(
    (state) => state.auth
  );
 

  const handleLoginOpen = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };



  return (
    <>
    <NavbarContainer position="static">
    <Toolbar>
      <Logo src={Logos} alt="Logo" style={{ maxHeight: '45px' }} />
      <Typography variant="h3" className="headfont" style={{ color: 'grey' }} component="div" sx={{ flexGrow: 1 }}>
        SecureInmate
      </Typography>
      {!isSuccess && !user ? (
            <Button variant="contained" onClick={handleLoginOpen}>
              Login
            </Button>
          ) : (
            <Button variant="contained" component={NavLink} to="/dashboard">
              Dashboard
            </Button>
          )}
      <NavItem variant="body1">Contact Us</NavItem>
      <NavItem variant="body1">Visit Status</NavItem>
    </Toolbar>
  </NavbarContainer>
  <Login
  open={openLogin}
  close={handleCloseLogin}
  />
 
  </>
  );
};

export default Navbar;
