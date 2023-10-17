import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Person, Gavel, Schedule, BarChart } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
}));

const ColoredIcon = styled('div')(({ theme, color }) => ({
  color: color,
}));

const ServiceCard = ({ title, description, icon, color }) => {
  return (
    <>
    
    <br/>
    <StyledCard>
      
      <CardContent>
        <ColoredIcon color={color}>{icon}</ColoredIcon>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
    </>
  );
};

const ServicesSection = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          title="Profile Management"
          description="The system provides tools for creating and maintaining inmate profiles, including personal details, booking information, etc."
          icon={<Person fontSize="large" />}
          color="#3f51b5" // Set your desired color
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          title="Case Management"
          description="It assists in managing and tracking inmate cases, including charges, court appearances, sentencing, and release dates."
          icon={<Gavel fontSize="large" />}
          color="#f44336" // Set your desired color
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          title="Visitation Management"
          description="The system facilitates scheduling and tracking inmate visitations, allowing visitors to request and receive approval for visits."
          icon={<Schedule fontSize="large" />}
          color="#2196f3" // Set your desired color
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ServiceCard
          title="Reporting and Analytics"
          description="The system provides reporting capabilities to generate statistical data, track trends, and aid in decision-making."
          icon={<BarChart fontSize="large" />}
          color="#4caf50" // Set your desired color
        />
      </Grid>
    </Grid>
  );
};

export default ServicesSection;





// import React from 'react';
// import { Card, CardContent, Typography, Grid } from '@mui/material';
// import { styled } from '@mui/system';
// import { Person, Gavel, Schedule, BarChart } from '@mui/icons-material';

// const StyledCard = styled(Card)(({ theme }) => ({
//   transition: 'transform 0.3s',
//   '&:hover': {
//     transform: 'scale(1.05)',
//   },
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
// }));

// const ServiceCard = ({ title, description, icon }) => {
//   return (
//     <StyledCard>
//       <CardContent>
//         {icon}
//         <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {description}
//         </Typography>
//       </CardContent>
//     </StyledCard>
//   );
// };

// const ServicesSection = () => {
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6} md={3}>
//         <ServiceCard
//           title="Profile Management"
//           description="The system provides tools for creating and maintaining inmate profiles, including personal details, booking information, etc."
//           icon={<Person fontSize="large" />}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <ServiceCard
//           title="Case Management"
//           description="It assists in managing and tracking inmate cases, including charges, court appearances, sentencing, and release dates."
//           icon={<Gavel fontSize="large" />}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <ServiceCard
//           title="Visitation Management"
//           description="The system facilitates scheduling and tracking inmate visitations, allowing visitors to request and receive approval for visits."
//           icon={<Schedule fontSize="large" />}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3}>
//         <ServiceCard
//           title="Reporting and Analytics"
//           description="The system provides reporting capabilities to generate statistical data, track trends, and aid in decision-making."
//           icon={<BarChart fontSize="large" />}
//         />
//       </Grid>
//     </Grid>
//   );
// };

// export default ServicesSection;
