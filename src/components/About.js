import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const About = () => {
  const containerStyle = {
    padding: '16px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  };

  const paragraphStyle = {
    marginBottom: '16px',
  };

  const servicesHeadingStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
  };

  return (
    <div style={containerStyle}>
      <Typography variant="h2" style={headingStyle}>
        About
      </Typography>
      <Typography variant="body1" style={paragraphStyle} style={{color:'grey'}}>
        SecureInmate is an inmate database management system to be used by correctional facilities and law enforcement agencies in Nigeria to maintain records and information about incarcerated individuals. These systems typically include details such as personal information, charges, sentencing, visitation logs, and other relevant data for managing the inmate population.
      </Typography>
     
    </div>
  );
};

export default About;



