import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Grid, Button, TextField, Typography, MenuItem } from '@mui/material';
import { registerInmate } from '../InmateServices/inmateSlice';
import Nationality from '../Inmate/dropdownOptions/nationality';
import Ethnicity from '../Inmate/dropdownOptions/ethnicity';
import Offence from '../Inmate/dropdownOptions/offenceCategories';
import Gender from '../Inmate/dropdownOptions/gender';
import YesNo from './dropdownOptions/yesNo';
import EyeColors from './dropdownOptions/eyeColor';
import HairColors from './dropdownOptions/hairColor';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  overflowX: 'hidden',
};

const formStyle = {
  width: '100%',
};

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const smallInputStyle = {
  width: '200px',
};

const NewInmates = () => {
  const [formData, setFormData] = useState({
    inmate_name: '',
    date_of_birth: '',
    gender: '',
    socialSecurityNumber: ' ',
    raceEthnicity: '',
    nationality: '',
    homeAddress: ' ',
    height: '',
    weight: '',
    eye_color: '',
    hair_color: '',
    distinguishingMarks: '',
    disabilities: '',
    bookingDateTime: '',
    bookingNumber: '',
    bookingOfficer: '',
    arrestingAgency: '',
    arrestingOfficer: '',
    offence_category: '',
    arrestDate: '',
    arrestLocation: '',
    arrestJurisdiction: '',
    personalItems: '',
    contactInformation: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Handle special case for date inputs
    if (
      event.target.type === 'date' ||
      event.target.type === 'datetime-local'
    ) {
      setFormData({
        ...formData,
        [name]: value, // Update directly for date inputs
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleGenderChange = (event) => {
    setFormData({
      ...formData,
      gender: event.target.value,
    });
  };

  const handleEthnicityChange = (event) => {
    setFormData({
      ...formData,
      raceEthnicity: event.target.value,
    });
  };

  const handleNationalityChange = (event) => {
    setFormData({
      ...formData,
      nationality: event.target.value,
    });
  };

  const handleOffencesChange = (event) => {
    setFormData({
      ...formData,
      offence_category: event.target.value,
    });
  };

  const handleDistinguishingMarksChange = (event) => {
    setFormData({
      ...formData,
      distinguishingMarks: event.target.value,
    });
  };

  const handleDisabilitiesChange = (event) => {
    setFormData({
      ...formData,
      disabilities: event.target.value,
    });
  };

  const handleEyeColorChange = (event) => {
    setFormData({
      ...formData,
      eye_color: event.target.value,
    });
  };

  const handleHairColorChange = (event) => {
    setFormData({
      ...formData,
      hair_color: event.target.value,
    });
  };

    const { user } = useSelector((state) => state.auth);
 

  const dispatch = useDispatch();

    const handleSubmit = (values) => {
    const inmateId = user.data._id;
    // Handle form submission
    console.log(user.data._id);
    // Dispatch registerInmate action
    dispatch(registerInmate({ inmateData: formData, inmateId }));
    alert('submit successful!!')
  };
  

  return (
    <div style={containerStyle}>
      <Typography variant="h5" component="h1" style={{ color: 'grey' }}>
        NEW INMATE BOOKING FORM
      </Typography>
      <br/>
      <form onSubmit={handleSubmit} style={formStyle}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} style={columnStyle}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Full Name"
              name="inmate_name"
              value={formData.inmate_name}
              onChange={handleInputChange}
            />
            <TextField
              name="date_of_birth"
              label="Birthday"
              type="date"
              variant="outlined"
              fullWidth
              value={formData.date_of_birth || ''} // Ensure value is not undefined
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleGenderChange}
              variant="outlined"
              fullWidth
            >
              {Gender.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Ethnicity"
              name="raceEthnicity"
              value={formData.raceEthnicity}
              onChange={handleEthnicityChange}
              variant="outlined"
              fullWidth
            >
              {Ethnicity.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleNationalityChange}
              variant="outlined"
              fullWidth
            >
              {Nationality.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Home Address"
              name="homeAddress"
              value={formData.homeAddress}
              onChange={handleInputChange}
            />

                <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Social Security Number"
              name="socialSecurityNumber"
              value={formData.socialSecurityNumber}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={4} style={columnStyle}>
            
          <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Height"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Weight"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
            />
  <TextField
              select
              label="Eye color"
              name="eye_color"
              value={formData.eye_color}
              onChange={ handleEyeColorChange }
              variant="outlined"
              fullWidth
            >
              {EyeColors.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            {/* <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Eye color"
              name="eye_color"
              value={formData.eye_color}
              onChange={handleInputChange}
            /> */}

<TextField
              select
              label="Hair color"
              name="hair_color"
              value={formData.hair_color}
              onChange={handleHairColorChange}
              variant="outlined"
              fullWidth
            >
              {HairColors.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            {/* <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Hair color"
              name="hair_color"
              value={formData.hair_color}
              onChange={handleInputChange}
            /> */}
            <TextField
              select
              label="Distinguishing Marks"
              name="distinguishingMarks"
              value={formData.distinguishingMarks}
              onChange={handleDistinguishingMarksChange}
              variant="outlined"
              fullWidth
            >
              {YesNo.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            {/* <TextField
              variant="outlined"
              size="small"
              fullWidth
              label=" Distinguishing Marks"
              name="distinguishingMarks"
              value={formData.distinguishingMarks}
              onChange={handleInputChange}
            /> */}
             <TextField
              select
              label="Disabilities"
              name="disabilities"
              value={formData.disabilities}
              onChange={handleDisabilitiesChange}
              variant="outlined"
              fullWidth
            >
              {YesNo.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            {/* <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Disabilities"
              name="disabilities"
              // value={formData.disabilities}
              onChange={handleInputChange}
            /> */}
            <TextField
              label="Booking Date and Time"
              name="bookingDateTime"
              value={formData.bookingDateTime}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              type="datetime-local"
            />
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Booking Number"
              name="bookingNumber"
              value={formData.bookingNumber}
              onChange={handleInputChange}
            />

            <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Booking Officer"
              name="bookingOfficer"
              value={formData.bookingOfficer}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={4} style={columnStyle}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Arresting agency"
              name="arrestingAgency"
              value={formData.arrestingAgency}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Arresting Officer"
              name="arrestingOfficer"
              value={formData.arrestingOfficer}
              onChange={handleInputChange}
            />
            <TextField
              select
              label="Offence category"
              name="offence_category"
              value={formData.offence_category}
              onChange={handleOffencesChange}
              variant="outlined"
              fullWidth
            >
              {Offence.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Arrest Date and Time"
              name="arrestDate"
              value={formData.arrestDate}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              type="datetime-local"
            />
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Arrest Location"
              name="arrestLocation"
              value={formData.arrestingLocation}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Court or Jurisdiction Issuing the Arrest Warrant"
              name="arrestJurisdiction"
              value={formData.arrestJurisdiction}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Tag number for personal belongings"
              name="personalItems"
              value={formData.personalItems}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              label="Contact Information"
              name="contactInformation"
              value={formData.contactInformation}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{ marginTop: '20px' }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewInmates;

// const containerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '16px',
//   overflowX: 'hidden', // Remove side scroll
// };

// const formStyle = {
//   width: '100%',
// };

// const inputContainerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '8px',
// };

// const columnStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '8px',
// };

// const smallInputStyle = {
//   width: '200px',
// };

// const NewInmates = () => {

//   const [nationality, setSelectedNationality] = useState('');
//   const [ gender, setSelectedGender] = useState('');
//   const [raceEthnicity, setSelectedEthnicity] = useState('');

//   const handleNationalityChange = (event) => {
//     setSelectedNationality(event.target.value);
//   };
//   const handleGenderChange = (event) => {
//     setSelectedGender(event.target.value);
//   };
//   const handleEthnicityChange = (event) => {
//     setSelectedEthnicity(event.target.value);
//   };
//   const initialValues = {
//     inmate_name: '',
//     date_of_birth: '',
//     gender: '',
//     socialSecurityNumber: '',
//     raceEthnicity: '',
//     nationality: '',
//     homeAddress: '',
//     contactInformation: '',
//     height: '',
//     weight: '',
//     eye_color: '',
//     hair_color: '',
//     distinguishingMarks: '',
//     disabilities: '',
//     bookingDateTime: '',
//     bookingNumber: '',
//     bookingOfficer: '',
//     arrestingAgency: '',
//     arrestingOfficer: '',
//     offence_category: '',
//     arrestDate: '',
//     arrestLocation: '',
//     arrestJurisdiction: '',
//   };

//   const { user } = useSelector((state) => state.auth);
//   // const { message } = useSelector((state) => state.inmate);

//   const dispatch = useDispatch();

//   const handleSubmit = (values) => {
//     const inmateId = user.data._id;
//     // Handle form submission
//     console.log(user.data._id);
//     // Dispatch registerInmate action
//     dispatch(registerInmate({ inmateData: values, inmateId }));
//     alert('submit successful!!')
//   };
//   return (
//     <Fragment>
//       <h2 className='headfont' style={{ color: 'grey' }}>NEW INMATE BOOKING FORM</h2>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form>
//         {/* {message && (
//         <div className={message.type === 'success' ? 'success' : 'error'}>
//           {message.text}
//         </div>
//       )} */}
//           <Grid container component="main" maxWidth="xs" style={containerStyle}>
//             <Typography component="h1" variant="h5">
//               Inmate Booking Form
//             </Typography>
//             <Grid container spacing={2} style={formStyle}>
//               <Grid item xs={12} sm={4} style={columnStyle}>
//                 <div style={inputContainerStyle}>
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="inmate_name"
//                     label="Full Name"
//                     name="inmate_name"
//                   />
//                <TextField
//                   name="date_of_birth"
//                   label="Birthday"
//                   type="date"
//                   variant="outlined"
//                   fullWidth
//                   // value={employee.joinDate }
//                   // onChange={handleInputChange}
//                   required
//                   InputLabelProps={{ shrink: true }}
//                 />
// {/* <TextField
//   id="date_of_birth"
//   label="Birthday"
//   type="date"
//   name="date_of_birth" // Updated name attribute
//   defaultValue="2017-05-24"
//   InputLabelProps={{
//     shrink: true,
//   }}
//   sx={{ width: '100%', height: '20%' }} // Adjust the width as per your requirement
// /> */}
// <TextField
//         select
//         label="Gender"
//         value={gender}
//         onChange={handleGenderChange}
//         variant="outlined"
//         fullWidth
//       >
//         {Gender.map((option) => (
//           <MenuItem key={option} value={option}>
//             {option}
//           </MenuItem>
//         ))}
//       </TextField>

//                   {/* <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="gender"
//                     label="Gender"
//                     name="gender"
//                   /> */}
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="socialSecurityNumber"
//                     label="Social Security Number"
//                     name="socialSecurityNumber"
//                   />

// <TextField
//         select
//         label="Ethnicity"
//         value={raceEthnicity}
//         onChange={handleEthnicityChange}
//         variant="outlined"
//         fullWidth
//       >
//         {Ethnicity.map((option) => (
//           <MenuItem key={option} value={option}>
//             {option}
//           </MenuItem>
//         ))}
//       </TextField>
//                   {/* <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="raceEthnicity"
//                     label="Race/Ethnicity"
//                     name="raceEthnicity"
//                   /> */}

// <TextField
//         select
//         label="Nationality"
//         value={nationality}
//         onChange={handleNationalityChange}
//         variant="outlined"
//         fullWidth
//       >
//         {Nationality.map((option) => (
//           <MenuItem key={option} value={option}>
//             {option}
//           </MenuItem>
//         ))}
//       </TextField>
//                   {/* <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="nationality"
//                     label="Nationality"
//                     name="nationality"
//                   /> */}
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="homeAddress"
//                     label="Home Address"
//                     name="homeAddress"
//                   />
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="contactInformation"
//                     label="Contact Information"
//                     name="contactInformation"
//                   />
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={4} style={columnStyle}>
//                 <div style={inputContainerStyle}>
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="height"
//                     label="Height"
//                     name="height"
//                   />
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="weight"
//                     label="Weight"
//                     name="weight"
//                   />
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="eye_color"
//                     label="Eye Color"
//                     name="eye_color"
//                   />
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="hair_color"
//                     label="Hair Color"
//                     name="hair_color"
//                   />
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="distinguishingMarks"
//                     label="Distinguishing Marks"
//                     name="distinguishingMarks"
//                   />
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="disabilities"
//                     label="Physical Disabilities or Medical Conditions"
//                     name="disabilities"
//                   />
//                     <TextField
//         label="Booking Date and Time"
//         // value={selectedDate}
//         // onChange={handleDateChange}
//         variant="outlined"
//         fullWidth
//         InputLabelProps={{ shrink: true }}
//         type="datetime-local"
//       />
//                   {/* <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="bookingDateTime"
//                     label="Booking Date and Time"
//                     name="bookingDateTime"
//                   /> */}
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="bookingNumber"
//                     label="Booking Number"
//                     name="bookingNumber"
//                   />
//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={4} style={columnStyle}>
//                 <div style={inputContainerStyle}>
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="bookingOfficer"
//                     label="Booking Officer's Name or Badge Number"
//                     name="bookingOfficer"
//                   />
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="arrestingAgency"
//                     label="Arresting Agency"
//                     name="arrestingAgency"
//                   />
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="arrestingOfficer"
//                     label="Arresting Officer's Name"
//                     name="arrestingOfficer"
//                   />
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="offence_category"
//                     label="Reason for Arrest"
//                     name="offence_category"
//                   />
//                   <TextField
//         label="Arrest Date and Time"
//         // value={selectedDate}
//         // onChange={handleDateChange}
//         variant="outlined"
//         fullWidth
//         InputLabelProps={{ shrink: true }}
//         type="datetime-local"
//       />
//                  {/* <Field
//   as={TextField}
//   variant="outlined"
//   size="small"
//   fullWidth
//   id="arrestDate"
//   label="Arrest Date and Time"
//   name="arrestDate" // Updated name attribute
// /> */}
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="arrestLocation"
//                     label="Arrest Location"
//                     name="arrestLocation"
//                   />
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="arrestJurisdiction"
//                     label="Court or Jurisdiction Issuing the Arrest Warrant"
//                     name="arrestJurisdiction"
//                   />
//                   <Field
//                     as={TextField}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     id="personalItems"
//                     label="List of personal Belongings"
//                     name="personalItems"
//                   />
//                 </div>
//               </Grid>
//             </Grid>
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
//               Submit
//             </Button>
//           </Grid>
//         </Form>
//       </Formik>
//     </Fragment>
//   );
// };

// export default NewInmates;
