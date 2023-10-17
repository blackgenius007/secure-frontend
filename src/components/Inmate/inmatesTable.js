
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { ButtonBase } from '@mui/material';
import face from '../../assets/img/face-0.jpg';
 
import Box from '@mui/material/Box';
import RightSidebar from './RightSidebar';
import { RiFileExcel2Fill } from 'react-icons/ri';
import moment from 'moment';
import Swal from 'sweetalert2';
import {
  retrieveAllInmates,
  deleteInmateById,
} from '../InmateServices/inmateSlice';
import { Clear, FileCopy } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Dialog from '@mui/material/Dialog';
import { SlPieChart } from "react-icons/sl";
import {   FcOvertime } from 'react-icons/fc';
import {   GiDeliveryDrone } from 'react-icons/gi';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PersonOutline } from '@mui/icons-material';
import { Typography, Chip, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IconContext } from 'react-icons';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import { Popup } from 'semantic-ui-react';
import UploadPhoto from './uploadPhoto';
// import face from '../../../../assets/face-0.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  BsChevronDoubleLeft,
  BsFlagFill,
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleRight,
} from 'react-icons/bs';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

// Add futuristic styles here...
const futuristicStyles = {
  tableContainer: {
    background: '#222',
    borderRadius: '10px',
    padding: '1rem',
  },
  table: {
    color: '#fff',
    // width: '100%',
    // borderCollapse: 'collapse',
    textAlign: 'left',
    borderCollapse: 'separate', // Separate borders for cells
    borderSpacing: '0', // No spacing between cells
  },
  tableHead: {
    background: '#333',
  },
  tableHeadCell: {
    padding: '0.5rem',
    textAlign: 'center', // Align header cells to center
  },
  tableBodyRow: {
    borderBottom: '1px solid #444',
  },
  tableBodyCell: {
    // padding: '0.5rem',
    // textAlign: 'center', // Align body cells to center
    border: '1px solid #444', // Add border to each cell
    padding: '0.5rem',
    textAlign: 'center',
  },
  avatar: {
    borderRadius: '50%',
    width: '50px',
    height: '50px',
  },
  link: {
    background: 'none',
    border: 'none',
    color: '#00aaff',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '14px',
    fontFamily: 'inherit',
    padding: 0,
    margin: 0,
  },
  actionIcons: {
    fontSize: '1.1rem',
    color: '#fff',
    marginRight: '0.5rem',
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out',
  },
};

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const FilterableTable = ({ drawer }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hiddenFileInput = React.useRef(null);

  // get all inmates after retreival
  const { inmates, isLoading, isError, message } = useSelector(
    (state) => state.inmates
  );
  const tableRef = useRef(null);
  const requestSearch = (searchedVal) => {
    setSearched(searchedVal);
  };

  const cancelSearch = () => {
    setSearched('');
  };

  const [searched, setSearched] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedInmate, setSelectedInmate] = useState(null);
  const [isUploadVisible, setUploadVisible] = useState(false);

  const [images, setImages] = useState({});
  const [url, setUrl] = useState({});
  const [uploadedFile, setUploadedFile] = useState({});
  const [preview, setPreview] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [dateOffset, setDateOffset] = useState(7);
  const [open, setOpen] = useState(false);
    // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    // Function to update filteredRows based on search
    const updateFilteredRows = () => {
      const filtered = inmates.filter((row) => {
        return Object.values(row).some((value) =>
          String(value).toLowerCase().includes(searched.toLowerCase())
        );
      });
      setFilteredRows(filtered);
    };

    // Call the function whenever search term or inmates data changes
    updateFilteredRows();
  }, [searched, inmates]);
 
 





  //user details
  const { ownerEmail } = useSelector((state) => state.auth.user.data);

  // user role
  // const userEmail = role === 'owner' || role === 'admin' ? ownerEmail : email;
  // console.log(userEmail);

  // Photo onChanged function
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const resume = event.target.files[0];
    const fileUploaded = event.target.files[0];
    const url = URL.createObjectURL(fileUploaded);
    setUrl(url);
    setImages(fileUploaded);
    console.log(fileUploaded.name);   
    console.log(fileUploaded);
    console.log('images : ',images);
    setPreview(true);
  };    
  // function to upload inmate picture
  const onSubmitPhoto = async () => {
    try {
      if (images) {
        console.log('photo+', selectedInmate._id);
        const id = selectedInmate._id
        const formData = new FormData();
        formData.append('file', images, images.name);
        console.log(formData.has('file')); // This will log true if the image key exists in the FormData

        console.log('formData:', formData);  // Log the formData object
  
        const response = await axios.post(
          `/api/v1/images/upload/${id}`,
          formData
        );
  
        console.log('Server response:');
        console.log(response.data);     
  
        // Handle success scenario
        alert('Uploaded successfully');
      } else {
        alert('Please select an image');
      }
    } catch (error) {
      console.log('Error uploading image:', error);
      // Handle error scenario
      alert('Image upload failed. Please try again.');
    }
  };
  
  

  // Toggle function
  const toggleUpload = () => {
    setUploadVisible((prevState) => !prevState);
  };

  // retrieve all inmates from API
  useEffect(() => {
    // Dispatch retrieveAllInmates action
    dispatch(retrieveAllInmates(ownerEmail));
  }, [dispatch, ownerEmail]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {message}</div>;
  }



  const handleSearch = (e) => {
    setSearched(e.target.value);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = filteredRows.slice(startIndex, endIndex);

 
  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);

    const year = date.getFullYear().toString().slice(-2); // Extract the last two digits of the year
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    let hour = date.getHours();
    const minute = date.getMinutes();
    const amOrPm = hour >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hour = hour % 12 || 12;

    const formattedDate = `${day} ${month} ${year}, ${hour}:${minute
      .toString()
      .padStart(2, '0')} ${amOrPm}`;

    return formattedDate;
  };

  // Dialogue box
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // function handles update
  const handleUpdate = (inmateId) => {
    navigate(`/inmates-update/${inmateId}`);
  };

  // function handles delete
  const handleDelete = (id) => {
    dispatch(deleteInmateById(id));

    // function opens Dialog
  };
  const handleOpenDialog = (inmate) => {
    // Open the dialog and pass the inmate data
    setOpenDialog(true);
    setSelectedInmate(inmate);
  };

  const handleEditClick = () => {
    setOpenEditDialog(true);
  };
  const closeEditClick = () => {
    setOpenEditDialog(false);
  };

  const handleCloseDialog = () => {
    // Close the dialog
    setOpenDialog(false);
    setSelectedInmate(null);
  };
  const calculateAge=(dateOfBirth)=>{
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextField
          value={searched}
          onChange={(e) => requestSearch(e.target.value)}
          label="Search database"
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {searched && (
                  <IconButton onClick={() => requestSearch('')}>
                    <Clear />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      </div>
      <br />
      <label>
        <Popup
          trigger={
            <Button variant="info" color="primary">
              <IconContext.Provider value={{ color: 'grey', size: '25px' }}>
                <GiDeliveryDrone />
              </IconContext.Provider>
            </Button>
          }
          position="top left"
        >
         Lunch Surveillance drone
        </Popup>

        <IconButton>
          <Popup
            trigger={
              <Link>
                 <SlPieChart/>
              </Link>
            }
            position="top center"
          >
            Charts
          </Popup>
        </IconButton>

        <Button
          variant="contained"
          onClick={drawer}
          style={{ backgroundColor: '#E97451' }}
        >
          Case Files
        </Button>
        {/* Button to toggle the sidebar */}
        <Button variant="contained" onClick={drawer}>
          How it works
        </Button>
        {/* Render totalRemunerationForAll in a separate table row */}
      </label>
      <div style={futuristicStyles.tableContainer}>
        <table style={futuristicStyles.table}>
          <thead style={futuristicStyles.tableHead}>
            <tr>
              <th style={futuristicStyles.tableHeadCell}>Photo</th>
              <th style={futuristicStyles.tableHeadCell}>Inmate</th>
              <th style={futuristicStyles.tableHeadCell}>Offence category</th>
              <th style={futuristicStyles.tableHeadCell}>Booking Date</th>
              <th style={futuristicStyles.tableHeadCell}>Booking Officer</th>              
              <th style={futuristicStyles.tableHeadCell}>Arrest location</th>
              <th style={futuristicStyles.tableHeadCell}>Status</th>
              <th style={futuristicStyles.tableHeadCell}>Action</th>   
            </tr>
          </thead>
          <tbody>
            {paginatedRows.map((row) => {
              return (
                <tr key={row.id} style={futuristicStyles.tableBodyRow}>
                  <td style={futuristicStyles.tableBodyRow}>
                    <Link
                      to={`/employee-detail/${row.imagePath}`}
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                     <Avatar alt="Remy Sharp" src={row.imagePath} />
                    </Link>{' '}
                  </td>
               
                  <td style={futuristicStyles.tableBodyCell}>
                             <ButtonBase onClick={() => handleOpenDialog(row)}>
         {row.inmate_name}
                    </ButtonBase>
                  </td>

                  <td style={futuristicStyles.tableBodyCell}>
                    {row.offence_category}
                  </td>

                  <td style={futuristicStyles.tableBodyCell}>
                    {formatDate(row.bookingDate)}
                  </td>
                  <td style={futuristicStyles.tableBodyCell}>
                    {row.booking_officer}
                  </td>

                  <td style={futuristicStyles.tableBodyCell}>
                    {row.arrest_location}
                  </td>
                  <td style={futuristicStyles.tableBodyCell}>
                    {row.status}
                  </td>
                  <td style={futuristicStyles.tableBodyCell}>
                  <span
                    style={{
                      ...futuristicStyles.actionIcons,
                      color: '#00aaff',
                    }}
                    onClick={() => handleUpdate(row._id)}
                  >
                    <Edit />
                  </span>
                  <span
                    style={{
                      ...futuristicStyles.actionIcons,
                      color: '#ff0000',
                    }}
                    onClick={() => handleDelete(row._id)}
                  >
                    <Delete />
                  </span>
                </td>
                </tr>

              );
            })}
          </tbody>
        </table>
      </div>
      <br />

      {
  selectedInmate && <div>
   <BootstrapDialog
  onClose={handleCloseDialog}
  aria-labelledby="customized-dialog-title"
  open={openDialog}
>
  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseDialog}>
    {selectedInmate.inmate_name}
  </BootstrapDialogTitle>
  <DialogContent dividers>
    <Box display="flex" alignItems="center" marginBottom={2}>
      <Avatar
        alt={selectedInmate.inmate_name}
        src={selectedInmate.imagePath}
        sx={{ width: 100, height: 100, marginRight: 2 }}
      />
      <Box>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
        Age: {calculateAge(selectedInmate.date_of_birth)}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
          Ethnicity: {selectedInmate.ethnicity}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
          Height: {selectedInmate.height}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
          Weight: {selectedInmate.weight}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
          Gender: {selectedInmate.gender}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
          SSN: {selectedInmate.social_security}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: 'grey' }}>
          Inmate Nos: {selectedInmate.inmate_number}   
        </Typography>
      </Box>
    </Box>
    <Typography variant="body2" gutterBottom style={{ color: 'grey' }}>
      {selectedInmate.description}
    </Typography>
  </DialogContent>
  <DialogActions>
    <Button onClick={toggleUpload}>Upload Inmate Photo</Button>
  </DialogActions>
  {isUploadVisible && (
    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
      
      {/* <UploadPhoto id={selectedInmate._id} />   */}
        <IconButton onClick={handleClick}>
        <Popup
          trigger={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-upload"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9e9e9e"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <polyline points="7 9 12 4 17 9" />
              <line x1="12" y1="4" x2="12" y2="16" />
            </svg>
          }
          position="bottom center"
        >
          Upload existing picture
        </Popup>
      </IconButton> 
       <label>
        {preview ? (
          <img src={url} width="80px" height="80px" alt="" />
        ) : (
          <img src={face} width="80px" height="80px" alt="" />
        )}
        <input
    type="file"
    name="file "
    accept=".jpg,.png,.jpeg"
    ref={hiddenFileInput}
    onChange={handleChange}
    style={{ display: 'none' }}
        />
      </label>  
     <Button variant="contained" color="primary" onClick={onSubmitPhoto} >
        Submit
      </Button>   
    </Box>     
  )}
 </BootstrapDialog>    

 </div>

}
      {/* Pagination controls */}
      <div>
        <button
          onClick={() => setPage(Math.max(0, page - 1))}
          disabled={page === 0}
        >
          Previous
        </button>
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
          disabled={page === totalPages - 1}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default function MainPage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Horizontally center the content
    justifyContent: 'center', // Vertically center the content
    // height: '75vh', // Set the height of the container to full viewport height
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#6082B6' }}>Inmate Database</h1>
      <FilterableTable drawer={toggleSidebar} />
      {/* Right Sidebar */}
      <RightSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
}

 