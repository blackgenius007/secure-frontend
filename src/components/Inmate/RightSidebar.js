import React from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

const RightSidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ width: 250, padding: '1rem' }}>
        <Typography variant="h6">How it works</Typography>

        <Typography variant="body1">
          The inmate table page provides an organized display of inmates and their key information in tabular format. Each row represents an inmate, and columns contain details such as inmate name, ID, gender, status, and more.
        </Typography>

        <Typography variant="body1">
          Users can easily search for specific inmates or information using the search bar provided. As they type in the search bar, the table dynamically updates to display only the rows that match the search criteria, making it convenient to find the desired information.
        </Typography>

        <Typography variant="body1">
          Clicking on an inmate's name or a designated link/icon associated with each inmate in the table redirects the user to a detailed information page specific to that inmate. Here, users can access comprehensive details about the inmate, such as personal information, case history, legal status, and more.
        </Typography>

        <Typography variant="body1">
          The "Case File" button, likely positioned alongside each inmate's entry, allows users to quickly access or download the complete case file or related legal documents for that particular inmate. This feature provides a straightforward way to review and manage legal records associated with the inmate.
        </Typography>
      </div>
    </Drawer>
  );
};

export default RightSidebar;


 