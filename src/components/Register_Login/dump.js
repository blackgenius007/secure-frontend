import React, { useState, useRef, Fragment } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, Box } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { register } from '../../components/Authentication/Features/auth/authSlice';
 
import HighlightedInformation from '../../shared/components/HighlightedInformation';
import VisibilityPasswordTextField from '../shared/components/VisibilityPasswordTextField';
import {
  FormHelperText,
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
} from '@mui/material';

const styles = {
  dialogPaper: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '16px',
    maxWidth: 400,
  },
  actions: {
    marginTop: '16px',
  },
  dialogPaperScrollPaper: {
    maxHeight: 'none',
  },
  dialogContent: {
    paddingTop: '16px',
    paddingBottom: '16px',
    overflowY: 'hidden', // Prevent vertical scrolling
  },
  textField: {
    width: '100%',
    marginBottom: '8px', // Adjust the spacing between each TextField
    height: '40px', // Adjust the height of the TextField
  },
};
function FormDialog(props) {
  const {
    open,
    onClose,
    close,
    loading,
    headline,
    onFormSubmit,
    content,
    actions,
    hideBackdrop,
  } = props;

  const { setStatus, theme, openTermsDialog, status, classes } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [hasTermsOfServiceError, setHasTermsOfServiceError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const registerTermsCheckbox = useRef();
  const [error, setError] = useState('');
  const [userData, setUserData] = useState({
    email: '',
    businessName: '',
    businessSector: '',
    password: '',
    password2: '',
    country:'',
    currency:''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData((userData) => ({ ...userData, [name]: value }));
  };

  const {
    email,
    businessName,
    businessSector,
    password,
    password2,
    country,
    currency
  } = userData;

  const RegistrationData={
    email,
    businessName,
    businessSector,
    password,
    password2,
    country,
    currency
  }

 const moreInfo=(e)=>{
  close();
  alert('more information')

 }

  const onSubmit = (e) => {
    e.preventDefault();
 moreInfo()
    dispatch(register(RegistrationData,navigate));
    navigate('/welcome'); // Redirect to home route
     return close();
     
  };

    return (
    <Dialog
      open={open}
      onClose={close}
      disableBackdropClick={loading}
      disableEscapeKeyDown={loading}
      classes={{
        paper: styles.dialogPaper,
        paperScrollPaper: styles.dialogPaperScrollPaper,
      }}
      hideBackdrop={hideBackdrop ? hideBackdrop : false}
    >
      <DialogTitle title={headline} onClose={onClose} disabled={loading} />
      <DialogContent style={styles.dialogContent}>
        <form onSubmit={onFormSubmit}>
          <div>
            <Fragment>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={status === 'invalidEmail'}
                label="Email Address"
                autoFocus
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                FormHelperTextProps={{ error: true }}
                style={styles.textField}
              />
              <VisibilityPasswordTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                value={password}
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
                style={styles.textField}
              />
              <VisibilityPasswordTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password2"
                name="password2"
                value={password2}
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
                style={styles.textField}
              />
              <FormControlLabel
                style={{ marginRight: 0 }}
                control={
                  <Checkbox
                    color="primary"
                    inputRef={registerTermsCheckbox}
                    onChange={() => {
                      setHasTermsOfServiceError(false);
                    }}
                  />
                }
                label={
                  <Typography variant="body1">
                    I agree to the{' '}
                    <span
                      onClick={isLoading ? null : openTermsDialog}
                      tabIndex={0}
                      role="button"
                      onKeyDown={(event) => {
                        // For screenreaders listen to space and enter events
                        if (
                          (!isLoading && event.keyCode === 13) ||
                          event.keyCode === 32
                        ) {
                          openTermsDialog();
                        }
                      }}
                    >
                      terms of service
                    </span>
                  </Typography>
                }
              />
              {hasTermsOfServiceError && (
                <FormHelperText
                  error
                  style={{
                    display: 'block',
                    marginTop: '2px',
                  }}
                >
                  In order to create an account, you have to accept our terms of
                  service.
                </FormHelperText>
              )}
              {status === 'accountCreated' ? (
                <HighlightedInformation>
                  We have created your account. Please click on the link in the
                  email we have sent to you before logging in.
                </HighlightedInformation>
              ) : (
                ''
              )}
            </Fragment>
          </div>
  
          <Box width="100%" style={styles.actions}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              color="secondary"
              disabled={isLoading}
              onClick={onSubmit}
            >
              Register
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}

FormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  headline: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  content: PropTypes.element.isRequired,
  actions: PropTypes.element.isRequired,
  hideBackdrop: PropTypes.bool.isRequired,
};

export default FormDialog;