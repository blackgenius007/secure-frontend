import React, { Fragment } from 'react';
import Table from './inmatesTable';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Chip  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { PersonOutline } from '@mui/icons-material'



function Inmates() {
  const { user } = useSelector(
    (state) => state.auth
  );

  return (
    <Fragment>
  
<Table />


    </Fragment>
    
    
  )
}

export default Inmates