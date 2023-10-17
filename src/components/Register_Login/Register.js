import React, { useState,useRef,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { register } from '../Authentication/Features/auth/authSlice';
import VisibilityPasswordTextField from '../shared/components/VisibilityPasswordTextField'
import {
  Container,
  Typography,
  TextField,
  FormControl,
  Button,
  Grid,
  Paper,
} from '@mui/material';

const militaryStyle = {
  backgroundColor: '#fff', // Change background color to white
  color: 'black', // Change text color to black
  padding: '20px',
  borderRadius: '0px', // Remove borders
  fontSize: '16px', // Reduce font size
};

const  Register = ({status,open,close}) => {
  const [userData, setUserData] = useState({
    organizationName: '',
    address: '',
    contactPerson: '',
    email: '',
    contactNumber: '',
    country:'',
    password :'',
    password2 :'',
     
  });
 
  const [isLoading, setIsLoading] = useState(false);
  const [hasTermsOfServiceError, setHasTermsOfServiceError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const registerTermsCheckbox = useRef();
  const [error, setError] = useState('');
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData((userData) => ({ ...userData, [name]: value }));
  };

   
 
  const handleSubmit = (e) => {
    e.preventDefault();
 console.log(userData)
       dispatch(register(userData,navigate));
       console.log(userData);
       navigate('/welcome'); // Redirect to home route
 
  };

  return (
    <>
    <h3 style={{ color: '#6082B6' }}> Organization Registration</h3>
    <Container component="main" maxWidth="xs">
 
        <div>
          {/* <Typography component="h1" variant="h5" style={{ marginBottom: '20px' }}>
            Organization Registration
          </Typography> */}
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="organizationName"
              label="Organization Name"
              name="organizationName"
              autoFocus
              onChange={onChange}
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="country"
              label="Country"
              name="country"
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="contactPerson"
              label="Contact Person"
              name="contactPerson"
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Organisation Email"
              name="email"
              type="email"
              onChange={onChange}
            />
              <VisibilityPasswordTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                value={userData.password}
                error={
                  status === 'passwordTooShort' ||
                  status === 'passwordsDontMatch'
                }
                label="Password"
                autoComplete="off"
                onChange={onChange}
                helperText={(() => {
                  if (status === 'passwordTooShort') {
                    return 'Create a password at least 6 characters long.';
                  }
                  if (status === 'passwordsDontMatch') {
                    return 'Your passwords dont match.';
                  }
                  return null;
                })()}
                FormHelperTextProps={{ error: true }}
                isVisible={isPasswordVisible}
                onVisibilityChange={setIsPasswordVisible}
                // style={styles.textField}
              />
              <VisibilityPasswordTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password2"
                name="password2"
                value={userData.password2}
                error={
                  status === 'passwordTooShort' ||
                  status === 'passwordsDontMatch'
                }
                label="Repeat Password"
                autoComplete="off"
                onChange={onChange}
                helperText={(() => {
                  if (status === 'passwordTooShort') {
                    return 'Create a password at least 6 characters long.';
                  }
                  if (status === 'passwordsDontMatch') {
                    return 'Your passwords dont match.';
                  }
                })()}
                FormHelperTextProps={{ error: true }}
                isVisible={isPasswordVisible}
                onVisibilityChange={setIsPasswordVisible}
                // style={styles.textField}
              />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="contactNumber"
              label="Contact Number"
              name="contactNumber"
              onChange={onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
            >
              Register
            </Button>
          </form>
        </div>
     
    </Container>
    </>
  );
};

export default Register;
 