import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import inmateService from '../InmateServices/inmateService';
import { useNavigate } from 'react-router-dom';

const InmateUpdateForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inmate, setInmate] = useState(null);
  const [formData, setFormData] = useState({
    inmate_name: '',
    reg_officer: '',
    booking_time: '',
    arrest_location: '',
    disability:'',
    verdict: '',
    belongings: '',
    Age: '',
    eye_color:'',
    hair_color:'',
    ethnicity: '',
    height: '',
    weight: '',
    gender: '',
    inmate_number: '',
    social_security: '',
  });


  const handleBackButtonClick = () => {
    navigate(-1); // Go back to the previous page
  };

  useEffect(() => {
    const fetchInmate = async () => {
      try {
        const response = await inmateService.retrieveInmate(id);
        setInmate(response);
        setFormData({
          // Update the form data state with the retrieved inmate data
          inmate_name: response.inmate_name,
          reg_officer: response.reg_officer,
          booking_time: response.booking_time,
          arrest_location: response.arrest_location,
          eye_color: response.eye_color,
          hair_color: response.hair_color,
          verdict: response.verdict,
          belongings: response.belongings,
          ethnicity: response.ethnicity,
          Age:response.Age,
          height: response.height,
         weight: response.weight,
          gender: response.gender,
          inmate_number: response.inmate_number,
          social_security: response.social_security,
        });
      } catch (error) {
        console.error('Error retrieving inmate:', error);
      }
    };

    fetchInmate();
  }, [id]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call your update API endpoint with the updated form data
      await inmateService.updateInmate(id, formData);

      // Handle successful update
      console.log('Inmate updated successfully!');
    } catch (error) {
      // Handle error
      console.error('Error updating inmate:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
       Update - {formData.inmate_name} 
      </Typography>

      {inmate ? (
        <form onSubmit={handleFormSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="inmate_name"
            value={formData.inmate_name}
            onChange={(e) => setFormData({ ...formData, inmate_name: e.target.value })}
            margin="normal"
          />
           <TextField
            fullWidth
            label="Booking Officer"
            name="reg_officer"
            value={formData.reg_officer}
            onChange={(e) => setFormData({ ...formData, reg_officer: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Booking Time"
            name="booking_time"
            value={formData.booking_time}
            onChange={(e) => setFormData({ ...formData, booking_time: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Arrest Location"
            name="arrest_location"
            value={formData.arrest_location}
            onChange={(e) => setFormData({ ...formData, arrest_location: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Verdict"
            name="verdict"
            value={formData.verdict}
            onChange={(e) => setFormData({ ...formData, verdict: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Belongings"
            name="belongings"
            value={formData.belongings}
            onChange={(e) => setFormData({ ...formData, belongings: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Age"
            name="Age"
            value={formData.Age}
            onChange={(e) => setFormData({ ...formData, Age: e.target.value })}
            margin="normal"
          />
             <TextField
            fullWidth
            label="Eye_color"
            name="eye_color"
            value={formData.eye_color}
            onChange={(e) => setFormData({ ...formData, eye_color: e.target.value })}
            margin="normal"
          />
             <TextField
            fullWidth
            label="Hair color"
            name="hair_color"
            value={formData.hair_color}
            onChange={(e) => setFormData({ ...formData, hair_color: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Ethnicity"
            name="ethnicity"
            value={formData.ethnicity}
            onChange={(e) => setFormData({ ...formData, ethnicity: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Height"
            name="height"
            value={formData.height}
            onChange={(e) => setFormData({ ...formData, height: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Weight"
            name="weight"
            value={formData.weight}
            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Inmate Number"
            name="inmate_number"
            value={formData.inmate_number}
            onChange={(e) => setFormData({ ...formData, inmate_number: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Social Security"
            name="social_security"
            value={formData.social_security}
            onChange={(e) => setFormData({ ...formData, social_security: e.target.value })}
            margin="normal"
          />

<Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Update
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleBackButtonClick}
        sx={{ mt: 2, ml: 2 }}
      >
        Back
      </Button>
        </form>
      ) : (
        <Typography>Loading inmate data...</Typography>
      )}
    </Box>
  );
};

export default InmateUpdateForm;










