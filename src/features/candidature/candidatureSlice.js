import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { create,getCandidatureByCandidat, getCandidatures,} from './candidatureApi';
import Swal from 'sweetalert2';
const initialState = {
  candidatures: [],
  create: '',
  condCondidat: [],
};
//create candidature
export const createCandidature = createAsyncThunk(
  'candidatures/create',
  async (data) => {
    const response = await create(data);
    return response;
  }
);



export const getAllCandidature = createAsyncThunk(
  'candidatures/getcandidature',
  async () => {
    const response = await getCandidatures();
    return response;
  }
);

export const getCandidatureBYCANDIDAT = createAsyncThunk(
  'candidatures/getbyCondidat',
  async (id) => {
    const response = await getCandidatureByCandidat(id);
return response;
  }
);

export const candidatureSlice = createSlice({
  name: 'candidatures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
  
      .addCase(createCandidature.pending, (state) => {
        state.create = 'loading';
      })
      .addCase(createCandidature.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.create = 'success';
          Swal.fire({
            title: 'Success',
            text: 'condidature  envoyé avec succées',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        } else {
          console.log('failure');
        }
      })
      .addCase(createCandidature.rejected, (state, action) => {
        state.create = 'rejected';
      })
   
      .addCase(getAllCandidature.pending, (state) => {})
      .addCase(getAllCandidature.fulfilled, (state, action) => {
        state.candidatures = action.payload.data.data;
      })
      .addCase(getAllCandidature.rejected, (state, action) => {
        
      })
  

      .addCase(getCandidatureBYCANDIDAT.pending, (state) => {})
      .addCase(getCandidatureBYCANDIDAT.fulfilled, (state, action) => {
        state.condCondidat = action.payload.data.data;
      })
      .addCase(getCandidatureBYCANDIDAT.rejected, (state, action) => {});
  },
});
export const {} = candidatureSlice.actions;
export const selectCandidatures = (state) => state.candidatures.candidatures;
export const selectRegisterStatus = (state) => state.candidatures.create;
export const selectcondCondidatStatus = (state) =>state.candidatures.condCondidat;
export default candidatureSlice.reducer;
