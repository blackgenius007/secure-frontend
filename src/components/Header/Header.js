import React,{useState} from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { RiArrowDownSLine } from 'react-icons/ri';
import Login from '../Register_Login/Login';
import { SlEarphonesAlt } from "react-icons/sl";
import { NavLink,useNavigate  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import workfilyLogo from '../../assets/img/bars.png';
import Register from '../Register_Login/Register';
// import Login from '../Authentication/Features/auth/authSlice/login';

const Header = () => {  
  const textStyle = {
    fontSize: '12px',
    color: '#0073e6',
    verticalAlign: 'middle',
  };

  const navigate = useNavigate();
  

  // State for dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {user , isSuccess } = useSelector(
    (state) => state.auth
  );
 
  const [home, setHome] = useState(false);
  const [register, setRegister] = useState(false);
  const [open, setOpen] = useState(false);
  //   const [welcomeOpen, setWelcomeOpen] = useState(false);
  
    const handleLoginOpen = () => {
      setOpen(true);
    };
  
    const handleLoginClose = () => {     
      setOpen(false);
    };
  
   

  // const handleHover = () => {
  //   setShowBees(true);
  // };

  // const handleLeave = () => {
  //   setShowBees(false);
  // };
  const handleRegister= () => {
   setHome(true)
  navigate('/register')
  };
  const handleHomeRoute= () => {
    setHome(false)
    navigate('/')
    };
  
 



//  const  gotoDashboard = ()=>{

//  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <AppBar position="static" style={{ background: 'white', boxShadow: 'none' }}>
      <Toolbar>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={workfilyLogo} alt="Workfily Logo" style={{ width: '45px', marginRight: '6px' }} />
          {/* Name */}
          <Typography variant="h6" component="div" sx={{ color: 'black', fontSize: '36px' }}>
            <span style={{ fontWeight: '900', color: '#6082B6' }}>SecureInmate</span>
          </Typography>
        </div>

        {/* Dropdown Menu */}
        <div style={{ marginLeft: '20px' }}>
          <Button
            id="services-menu"
            aria-controls="services-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
            style={{ color: 'black', '&:hover': { background: 'lightblue' } }}
            disableRipple
          >
            Services
            <RiArrowDownSLine
              style={{ marginLeft: '4px', fontSize: '20px', fontWeight: 'thin', verticalAlign: 'middle' }}
            />
          </Button>
          <Button
           
            
      
            // onClick={handleMenuOpen}
            color="inherit"
            style={{ color: 'black', '&:hover': { background: 'lightblue' } }}
           
          >
            About us
           
          </Button>
          <Menu id="services-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Service 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Service 1</MenuItem>
         
            {/* Add more menu items as needed */}
          </Menu>

          <Button
            id="services-menu"
          
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          
            disableRipple
          >
          
            <SlEarphonesAlt
              style={{ marginLeft: '4px', fontSize: '20px',color:'orange', fontWeight: 'thin', maxHeight: '19px',
              marginRight: '5px', verticalAlign: 'middle' }}
              
            />
          <span style={textStyle}>Connect</span>
          </Button><span>Database</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        
          <Typography variant="h6" component="div" sx={{ color: 'black', fontSize: '15px' }}>
            <span style={{ fontWeight: '300', color: '#00000' }}>Smart Solutions for Secure Rehabilitation</span>
          </Typography>
        </div>

        {/* Login Button */}
        <div style={{ marginLeft: 'auto', marginRight: '150px' }}>

  {!user ? (
 <Button color="inherit" style={{ color: 'black' }} onClick={handleLoginOpen}>
Login
</Button>
          ) : (
             
        'Online'       
            
          )}
         
          </div>
     
      </Toolbar>
    </AppBar>
         
    <Login
      open={open}
      close={handleLoginClose}
      /> 
    
      </>
  );
};

export default Header;






// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';
// import { styled } from '@mui/system';

// const ThinNavbar = styled(AppBar)`
//   background-color: #36454F;
//   height: 30px;
// `;

// const TabsContainer = styled(Toolbar)`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   height: 100%;
// `;

// const TabTypography = styled(Typography)`
//   && {
//     font-size: 14px;
//     color: #fff;
//     margin-left: 20px;
//     margin-right: 20px;
//     cursor: pointer;
//   }
// `;

// const Header = () => {
//   const linkStyle = {
//     color: '#fff', // Change to your desired color
//     textDecoration: 'none', // Remove underline
//   };
//   return (
//     <ThinNavbar position="static">
//    <TabsContainer>
//   <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
//     <TabTypography variant="body1" style={{ textTransform: 'lowercase' }}><Link to="/" style={linkStyle}>Home</Link></TabTypography>
//     <TabTypography variant="body1" style={{ textTransform: 'lowercase' }}>Services</TabTypography>
//     <TabTypography variant="body1" style={{ textTransform: 'lowercase' }}>Pricing</TabTypography>
//     <TabTypography variant="body1" style={{ textTransform: 'lowercase' }}>About</TabTypography>
//     <TabTypography variant="body1" style={{ textTransform: 'lowercase' }}><Link to="/register" style={linkStyle}>Register</Link></TabTypography>
//   </div>
// </TabsContainer>

//     </ThinNavbar>
//   );
// };

// export default Header;

