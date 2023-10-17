import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveInmateById } from '../InmateServices/inmateSlice';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { openDialog, closeDialog } from '../Dialog/dialogSlice';

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

export default function InmateDetailPage() {
  const dispatch = useDispatch();
  const { selectedId, dialogOpen } = useSelector((state) => state.dialog);

  const handleOpenDialog = (selectedId) => {
    dispatch(openDialog(selectedId));
  };

  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };

  useEffect(() => {
    // Perform any additional actions when the dialog opens or closes
    if (dialogOpen) {
      alert('SecureInmate');
    } else {
      // Additional logic for dialog close
    }
  }, [dialogOpen]);

  return (
    <div>
      {/* <Button variant="outlined" onClick={() => handleOpenDialog(selectedId)}>
        Open draggable dialog
      </Button> */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Inmate Details
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Inmate ID: {selectedId}</DialogContentText>
          workin...workin
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDialog}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
