import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: '#132C4A',
  color: '#FFFFFF',
  padding: theme.spacing(4),
}));

const SocialIconContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
}));

const ContactSection = () => {
  return (
    <div>
    <ContactContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body1">
            Address: 1234 Main Street, City, State 12345
          </Typography>
          <Typography variant="body1">Phone: (+234) 803-28590-22,(+234) 807-06675-53</Typography>
          <Typography variant="body1">Email: info@secureinmate.com</Typography>
        
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Office Hours
          </Typography>
          <Typography variant="body1">Monday - Friday: 9:00 AM - 5:00 PM</Typography>
          <Typography variant="body1">Saturday: 10:00 AM - 2:00 PM</Typography>
          <Typography variant="body1">Sunday: Closed</Typography>
        </Grid>
      </Grid>
      <SocialIconContainer>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', marginRight: '12px' }}
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', marginRight: '12px' }}
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white' }}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </SocialIconContainer>
      <Divider style={{ backgroundColor: '#FFFFFF', margin: '24px 0' }} />
      <Typography variant="body2" align="center" style={{ fontWeight: '300' }}>
        &copy; {new Date().getFullYear()} SecureInmate. All rights reserved.
      </Typography>
    </ContactContainer>
    </div>
  );
};

export default ContactSection;
