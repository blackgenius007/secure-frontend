import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedInmate: null,
  dialogOpen: false,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state, action) => {
      state.selectedInmate = action.payload;
      state.dialogOpen = true;
    },
    closeDialog: (state) => {
      state.selectedInmate = null;
      state.dialogOpen = false;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
