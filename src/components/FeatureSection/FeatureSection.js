import React from 'react';
import Law from '../../assets/svg/law.svg';
import Jail from '../../assets/svg/jail.svg';

function FeatureSection() {
  return (
    <>
      <h1 style={{ color: '#6082B6' }}>Features</h1>
      <section id="secondary">
        <div class="cols container-lg">
          <section id="always-improving">
            <img
              src={Law}
              alt="Your SVG"
              style={{ width: '100px', height: '100px' }} // Adjust the size as needed
            />
            <h2 class="common-UppercaseText">Case Management </h2>

            <p class="common-BodyText">
              Efficiently manage legal cases and associated details for each
              inmate, facilitating tracking of court appearances, hearings, and
              legal processes for effective case handling.
            </p>
            <a
              class="common-BodyText common-Link common-Link--arrow"
              href="firewall"
            >
              Learn More
            </a>
          </section>

          <section id="global-scale">
            <img
              src={Jail}
              alt="Your SVG"
              style={{ width: '100px', height: '100px' }} // Adjust the size as needed
            />
            <h2 class="common-UppercaseText">Visitation Management</h2>
            <p class="common-BodyText">
              Simplify and optimize the visitation process, allowing easy
              scheduling, tracking, and coordination of visits for inmates and
              visitors, enhancing overall efficiency and security.
            </p>
            <a class="common-BodyText common-Link common-Link--arrow" href="ip">
              Learn More
            </a>
          </section>
        </div>
      </section>
      <br />
    </>
  );
}

export default FeatureSection;

// import React from 'react';
// import { Container, Grid, Typography } from '@mui/material';
// import BusinessIcon from '@mui/icons-material/Business';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import PersonIcon from '@mui/icons-material/Person';
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

// const featureDescriptionStyle = {
//   fontWeight: 300, // Adjust the font weight to make it thinner
// };

// const FeatureSection = () => {
//   return (
//     <div style={{ background: 'white', paddingTop: '30px', paddingBottom: '30px' }}>
//       <Container maxWidth="md">
//         <Grid container spacing={3} justifyContent="center">
//           {/* Feature 1 - Case Management */}
//           <Grid item xs={12} sm={3}>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <div
//                 style={{
//                   backgroundColor: 'orange',
//                   borderRadius: '50%',
//                   padding: '10px',
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 <BusinessIcon style={{ fontSize: '30px', color: 'white' }} />
//               </div>
//             </div>
//             <Typography variant="h6" component="h3" align="center" color="textPrimary">
//               Case Management
//             </Typography>
//             <Typography align="center" color="textSecondary" style={featureDescriptionStyle}>
//               Efficiently manage cases and workflows.
//             </Typography>
//           </Grid>

//           {/* Feature 2 - Analytics */}
//           <Grid item xs={12} sm={3}>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <div
//                 style={{
//                   backgroundColor: 'orange',
//                   borderRadius: '50%',
//                   padding: '10px',
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 <AnalyticsIcon style={{ fontSize: '30px', color: 'white' }} />
//               </div>
//             </div>
//             <Typography variant="h6" component="h3" align="center" color="textPrimary">
//               Analytics
//             </Typography>
//             <Typography align="center" color="textSecondary" style={featureDescriptionStyle}>
//               Gain insights through data analytics.
//             </Typography>
//           </Grid>

//           {/* Feature 3 - Visitation Management */}
//           <Grid item xs={12} sm={3}>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <div
//                 style={{
//                   backgroundColor: 'orange',
//                   borderRadius: '50%',
//                   padding: '10px',
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 <AssignmentIndIcon style={{ fontSize: '30px', color: 'white' }} />
//               </div>
//             </div>
//             <Typography variant="h6" component="h3" align="center" color="textPrimary">
//               Visitation Management
//             </Typography>
//             <Typography align="center" color="textSecondary" style={featureDescriptionStyle}>
//               Streamline visitation processes.
//             </Typography>
//           </Grid>

//           {/* Feature 4 - Profile Management */}
//           <Grid item xs={12} sm={3}>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <div
//                 style={{
//                   backgroundColor: 'orange',
//                   borderRadius: '50%',
//                   padding: '10px',
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 <PersonIcon style={{ fontSize: '30px', color: 'white' }} />
//               </div>
//             </div>
//             <Typography variant="h6" component="h3" align="center" color="textPrimary">
//               Profile Management
//             </Typography>
//             <Typography align="center" color="textSecondary" style={featureDescriptionStyle}>
//               Manage user profiles and access rights.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default FeatureSection;
