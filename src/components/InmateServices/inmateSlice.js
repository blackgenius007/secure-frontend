import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import inmateService from './inmateService';

const initialState = {
  inmates: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Register inmate
export const registerInmate = createAsyncThunk(
  'inmates/register',
  async ({ inmateData, inmateId }, thunkAPI) => {
    try {
      return await inmateService.register(inmateData, inmateId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Retrieve all inmates
export const retrieveAllInmates = createAsyncThunk(
  'inmates/retrieveAll',
  async (ownerEmail, thunkAPI) => {
 
    try {
      return await inmateService.retrieveInmates(ownerEmail);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Retrieve a single inmate by ID
export const retrieveInmateById = createAsyncThunk(
  'inmates/retrieveById',
  async (inmateId, thunkAPI) => {
    try {
      return await inmateService.retrieveInmate(inmateId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update a single inmate
export const updateInmateById = createAsyncThunk(
  'inmates/updateById',
  async ({ inmateId, formData }, thunkAPI) => {
    try {
      return await inmateService.updateInmate(inmateId, formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete a single inmate
export const deleteInmateById = createAsyncThunk(
  'inmates/deleteById',
  async (inmateId, thunkAPI) => {
    try {
      await inmateService.deleteInmate(inmateId);
      return inmateId;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const inmateSlice = createSlice({
  name: 'inmates',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerInmate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerInmate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Assuming the response contains the registered inmate data
        state.inmates.push(action.payload);
      })
      .addCase(registerInmate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(retrieveAllInmates.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(retrieveAllInmates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.inmates = action.payload;
      })
      .addCase(retrieveAllInmates.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(retrieveInmateById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(retrieveInmateById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const retrievedInmate = action.payload;
        const inmateIndex = state.inmates.findIndex(
          (inmate) => inmate.id === retrievedInmate.id
        );
        if (inmateIndex !== -1) {
          // If the inmate already exists, update their details
          state.inmates[inmateIndex] = retrievedInmate;
        } else {
          // If the inmate doesn't exist, add them to the list
          state.inmates.push(retrievedInmate);
        }
      })
      .addCase(retrieveInmateById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateInmateById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateInmateById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const updatedInmate = action.payload;
        const inmateIndex = state.inmates.findIndex(
          (inmate) => inmate.id === updatedInmate.id
        );
        if (inmateIndex !== -1) {
          // Update the inmate details
          state.inmates[inmateIndex] = updatedInmate;
        }
      })
      .addCase(updateInmateById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteInmateById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteInmateById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const deletedInmateId = action.payload;
        state.inmates = state.inmates.filter(
          (inmate) => inmate.id !== deletedInmateId
        );
      })
      .addCase(deleteInmateById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = inmateSlice.actions;
export default inmateSlice.reducer;















// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import inmateService from './inmateService';

// const initialState = {
//   inmates: [],
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: '',
// };

// // Register inmate
// export const registerInmate = createAsyncThunk(
//   'inmates/register',
//   async ({ inmateData, inmateId }, thunkAPI) => {
//     try {
//       return await inmateService.register(inmateData, inmateId);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// // Retrieve all inmates
// export const retrieveAllInmates = createAsyncThunk(
//   'inmates/retrieveAll',
//   async (_, thunkAPI) => {
//     try {
//       return await inmateService.retrieveInmates();
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// // Retrieve a single inmate by ID
// export const retrieveInmateById = createAsyncThunk(
//   'inmates/retrieveById',
//   async (inmateId, thunkAPI) => {
//     try {
//       return await inmateService.retrieveInmate(inmateId);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// // Update a single inmate
// export const updateInmateById = createAsyncThunk(
//   'inmates/updateById',
//   async ({ inmateId, formData }, thunkAPI) => {
//     try {
//       return await inmateService.updateInmate(inmateId, formData);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const inmateSlice = createSlice({
//   name: 'inmates',
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.isLoading = false;
//       state.isSuccess = false;
//       state.isError = false;
//       state.message = '';
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerInmate.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerInmate.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         // Assuming the response contains the registered inmate data
//         state.inmates.push(action.payload);
//       })
//       .addCase(registerInmate.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       })
//       .addCase(retrieveAllInmates.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(retrieveAllInmates.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.inmates = action.payload;
//       })
//       .addCase(retrieveAllInmates.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       })
//       .addCase(retrieveInmateById.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(retrieveInmateById.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         const retrievedInmate = action.payload;
//         const inmateIndex = state.inmates.findIndex(
//           (inmate) => inmate.id === retrievedInmate.id
//         );
//         if (inmateIndex !== -1) {
//           // If the inmate already exists, update their details
//           state.inmates[inmateIndex] = retrievedInmate;
//         } else {
//           // If the inmate doesn't exist, add them to the list
//           state.inmates.push(retrievedInmate);
//         }
//       })
//       .addCase(retrieveInmateById.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       })
//       .addCase(updateInmateById.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(updateInmateById.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         const updatedInmate = action.payload;
//         const inmateIndex = state.inmates.findIndex(
//           (inmate) => inmate.id === updatedInmate.id
//         );
//         if (inmateIndex !== -1) {
//           // Update the inmate details
//           state.inmates[inmateIndex] = updatedInmate;
//         }
//       })
//       .addCase(updateInmateById.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       });
//   },
// });

// export const { reset } = inmateSlice.actions;
// export default inmateSlice.reducer;










// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import inmateService from './inmateService';

// const initialState = {
//   inmates: [],
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: '',
// };

// // Register inmate
// export const registerInmate = createAsyncThunk(
//   'inmates/register',
//   async ({ inmateData, inmateId }, thunkAPI) => {
//     try {
//       return await inmateService.register(inmateData, inmateId);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// // Retrieve all inmates
// export const retrieveAllInmates = createAsyncThunk(
//   'inmates/retrieveAll',
//   async (_, thunkAPI) => {
//     try {
//       return await inmateService.retrieveInmates();
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// // Retrieve a single inmate by ID
// export const retrieveInmateById = createAsyncThunk(
//   'inmates/retrieveById',
//   async (inmateId, thunkAPI) => {
//     try {
//       return await inmateService.retrieveInmate(inmateId);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const inmateSlice = createSlice({
//   name: 'inmates',
//   initialState,
//   reducers: {
//     reset: (state) => {
//       state.isLoading = false;
//       state.isSuccess = false;
//       state.isError = false;
//       state.message = '';
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerInmate.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerInmate.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         // Assuming the response contains the registered inmate data
//         state.inmates.push(action.payload);
//       })
//       .addCase(registerInmate.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       })
//       .addCase(retrieveAllInmates.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(retrieveAllInmates.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.inmates = action.payload;
//       })
//       .addCase(retrieveAllInmates.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       })
//       .addCase(retrieveInmateById.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(retrieveInmateById.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         const retrievedInmate = action.payload;
//         const inmateIndex = state.inmates.findIndex(
//           (inmate) => inmate.id === retrievedInmate.id
//         );
//         if (inmateIndex !== -1) {
//           // If the inmate already exists, update their details
//           state.inmates[inmateIndex] = retrievedInmate;
//         } else {
//           // If the inmate doesn't exist, add them to the list
//           state.inmates.push(retrievedInmate);
//         }
//       })
//       .addCase(retrieveInmateById.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       });
//   },
// });

// export const { reset } = inmateSlice.actions;
// export default inmateSlice.reducer;





