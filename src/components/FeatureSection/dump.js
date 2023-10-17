import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import F1 from '../../assets/img/f1.png';
import F3 from '../../assets/img/f2.png';
import F2 from '../../assets/img/f3.png';
import F4 from '../../assets/img/f1.png';

const EqualPartsComponent = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap' }}>
          <Card style={{ margin: '10px', width: 'calc(50% - 20px)' }}>
            <CardMedia
              component="img"
              height="80"
              image={F1}
              alt="Image 1"
            />
          </Card>
          <Card style={{ margin: '10px', width: 'calc(50% - 20px)' }}>
            <CardMedia
              component="img"
              height="80"
              image={F2}
              alt="Image 2"
            />
          </Card>
          <Card style={{ margin: '10px', width: 'calc(50% - 20px)' }}>
            <CardMedia
              component="img"
              height="80"
              image={F3}
              alt="Image 3"
            />
          </Card>
          <Card style={{ margin: '10px', width: 'calc(50% - 20px)' }}>
            <CardMedia
              component="img"
              height="80"
              image={F4}
              alt="Image 4"
            />
          </Card>
        </div>
        <div>
          <Typography variant="h6">John Doe</Typography>
          <Typography variant="body2">Testimonial 1...</Typography>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">Jane Smith</Typography>
          <Typography variant="body2">Testimonial 2...</Typography>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">Bob Johnson</Typography>
          <Typography variant="body2">Testimonial 3...</Typography>
        </div>
      </Paper>
    </Container>
  );
};

export default EqualPartsComponent;










// import React from 'react';
// import './FeatureSection.css'; // Import your CSS file for styling
// import Feature1 from '../../assets/img/f1.png';
// import Feature2 from '../../assets/img/f2.png';
// import Feature3 from '../../assets/img/f3.png';
// import Feature4 from '../../assets/img/f4.png';
      

// const FeatureSection = () => {
//   return (
//     <div className="feature-container">
//       {/* First Feature Item */}
//       <div className="feature-item">
//         <img src={Feature1} alt="Feature 1" style={{ maxWidth: '100%', height: 'auto' }} />
//         {/* <h3>Feature 1</h3>
//         <p>Description of feature 1.</p> */}
//       </div>

//       {/* Second Feature Item */}
//       <div className="feature-item">
//         <img src={Feature2} alt="Feature 2" style={{ maxWidth: '100%', height: 'auto' }} />
//         {/* <h3>Feature 2</h3>
//         <p>Description of feature 2.</p> */}
//       </div>

//       {/* Third Feature Item */}
//       <div className="feature-item">
//         <img src={Feature3} alt="Feature 3" style={{ maxWidth: '100%', height: 'auto' }} />
//         {/* <h3>Feature 3</h3>
//         <p>Description of feature 3.</p> */}
//       </div>

//       {/* Fourth Feature Item */}
//       <div className="feature-item">
//         <img src={Feature4} alt="Feature 4" style={{ maxWidth: '100%', height: 'auto' }} />
//         {/* <h3>Feature 4</h3>
//         <p>Description of feature 4.</p> */}
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;