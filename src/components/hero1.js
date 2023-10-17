import React, { useState } from 'react';
import { Container, Button } from '@mui/material';
import ServicesSection from '../components/ServiceCards'

import office from '../assets/img/code.png';
import ImageSlider from './Carousel';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../components/Register_Login/Login';
// import Welcome from '../Home/Welcome/welcome';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  // const buttonStyle = {
  //   backgroundColor: 'orange',
  //   borderRadius: '50%',
  //   width: '80px',
  //   height: '80px',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'relative',
  //   cursor: 'pointer',
  //   marginLeft:'400px',
  //   boxShadow: '0px 0px 10px 0px #333',
  // };


  const buttonStyle = {
    display: 'block',
    fontWeight:200,
    position: 'relative',
    padding: '20px 40px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    color: '#333',
    borderRadius: '50px',
    border: '1px solid white',
    boxShadow: '0px 2px 0px rgba(2, 136, 209, 0.1)',
    transition: 'all 0.2s',
    zIndex: 1,
    outline: 'none',
    WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
  };
  
  const liveIconStyle = {
    display: 'inline-block',
    position: 'relative',
    top: 'calc(50% - 5px)',
    backgroundColor: 'red',
    width: '10px',
    height: '10px',
    marginLeft: '20px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '50%',
    zIndex: 1,
  };
  
  const liveIconAnimation = {
    content: "''",
    display: 'block',
    position: 'absolute',
    backgroundColor: 'rgba(255, 0, 0, 0.6)',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    animation: 'live 2s ease-in-out infinite',
    zIndex: -1,
  };
  

  const toolbarStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  
 
 
  const transparentButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderColor: '#40B5AD',
  };
  
  const liveTextStyle = {
    fontWeight: 'bold', // Make the text bold
    marginRight: '20px', // Adjust spacing from the icon
    color:'grey'
  };
  
 
  // const buttonStyle = {
  //   background: 'linear-gradient(to bottom, #FFD700, #FFA500)',
  //   borderRadius: '50%',
  //   width: '120px',
  //   height: '120px',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'relative',
  //   cursor: 'pointer',
  //   marginLeft:'400px',
  //   boxShadow: isHovered
  //     ? '0px 8px 16px 0px rgba(255,165,0,1), 0px 4px 8px 0px rgba(255,165,0,0.4)'
  //     : '0px 4px 8px 0px rgba(0,0,0,0.2)',
  //   transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  //   transition: 'transform 0.3s, box-shadow 0.3s',
  // };

 
  const textStyle = {
    fontSize: '18px',
    color: '#ffff',
    fontWeight: '200px',
  };
 const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const additionalSectionStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    backgroundColor: 'blue',
    color: '#fff',
    display: isHovered ? 'block' : 'none',
    zIndex: '1000',
  };

 
  const { user, isSuccess } = useSelector((state) => state.auth);

  const [open, setOpen] = useState(false);
//   const [welcomeOpen, setWelcomeOpen] = useState(false);

  const handleLoginOpen = () => {
    setOpen(true);
  };

  const handleLoginClose = () => {     
    setOpen(false);
  };

 
 
  return (
    <div
      style={{ background: 'white', paddingTop: '30px', paddingBottom: '30px' }}
    >
      <Container maxWidth="md">
        <div style={{ position: 'relative' }}>   
            <ImageSlider/>

           <br/>
           <br/>
{/* 
<div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    > */}
    
        
{/* <div style={toolbarStyle}>
      <a href="/" style={transparentButtonStyle}>
        What's New
      </a>
      <a href="/" style={transparentButtonStyle}>
        Support
      </a>
      <a href="/" style={transparentButtonStyle}>
        Link
      </a>
      <div className="toolbar">
      <button style={buttonStyle} onClick={handleLoginOpen}>
        <span style={liveTextStyle}>ACCESS </span>
        <span style={liveIconStyle} className="live-icon">
          <span style={liveIconAnimation}></span>
                    
        </span>

      </button>
    
    </div>
    <span>   <img src={office} alt="" width={'230px'} /></span>
    </div> */}
 
    {/* <div className="app">
      <div
        className="icon-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="hover-icon">
          <span className="tooltip">Hover Me</span>
        </div>
      </div> */}
      {/* {isHovered && (
        <div className="hidden-section">
          <p>This is the hidden section that appears when you hover the icon.</p>
        </div>
      )} */}
    {/* </div> */}
      {/* <Button variant="contained" size="large" style={buttonStyle} onClick={handleLoginOpen}>
        <span style={textStyle}>Login</span>
      </Button> */}
      <br/>
      <br/> 
      {/* {isHovered && (
        <div  >
        <h2 style={{ color: 'grey', fontSize: '30px', fontWeight: '300',marginLeft:'90px' }}>SERVICES</h2>


          <br/>
           <ServicesSection /> 
        </div>
      )} */}
    {/* </div> */}

{/* 

<Button variant="contained" size="large" style={buttonStyle} onClick={handleLoginOpen}>
      <span style={textStyle}>Login</span>
    </Button>
 */}



    
          {/* <Button
            variant="contained"
            size="large"
            // color="primary"
            style={{
                backgroundColor:'orange',
              position: 'absolute',
              top: '120%',
              right: '50%',
              transform: 'translate(50%, -50%)',
            }}
            onClick={handleRegisterOpen}
          >
       Login
          </Button> */}
        </div>
      </Container>
  
<Login
      open={open}
      close={handleLoginClose}
      /> 
    </div>
  );
};

export default HeroSection;
