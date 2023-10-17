import React, { useState,useEffect } from 'react';
import { login } from '../Authentication/Features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { Navigate, useNavigate, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, Link, FormControlLabel, Checkbox } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Paper, Typography } from '@mui/material';
import Draggable from 'react-draggable';
import MyImage from '../../assets/img/bars.png';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const Login = ({ open, close }) => {
  const navigate = useNavigate();   
 
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [userLogin, setLogin] = useState({
    email: '',
    password: '',
  });
  
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin((userLogin) => ({ ...userLogin, [name]: value }));
  };


  const handleSubmitLogin = (e) => {
   
        // Login API
        dispatch(login(userLogin));
        navigate('/dashboard'); // Redirect to home route
        return close();
      };

  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle
          style={{
            cursor: 'move',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fffff',
            color: '#7393B3',
          }}
          id="draggable-dialog-title"
        >
          <img src={MyImage} alt="logo" style={{ maxHeight: '19px' }} />
        </DialogTitle>
        {/* <Typography style={{ color: 'blue' }}>Login</Typography> */}
        <div style={{ overflowY: 'hidden', pb: 2 }}>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 1,
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleLoginChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"  
                  id="password"
                  autoComplete="current-password"
                  onChange={ handleLoginChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3 }}
                  onClick={ handleSubmitLogin}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>
        <DialogActions>
          <Button autoFocus onClick={close}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  ); 
};

export default Login; 