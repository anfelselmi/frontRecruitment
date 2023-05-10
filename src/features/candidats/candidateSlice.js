import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import {deletecandidate,getcandidates, updateCandidar,} from './candidatesApi';
const initialState = {
  allCandidate: [],
  deleteCandidate: '',
};
export const GetCandidates = createAsyncThunk(
  'candidate/getCandidate',
  async () => {
    const response = await getcandidates();
    return response.data;
  }
);


export const DeleteCandidate = createAsyncThunk(
  'candidate/deleteCandidate',
  async (id) => {
    const response = await deletecandidate(id);
    return response.data;
  }
);


export const UpdateCondidat = createAsyncThunk(
  'candidate/updateCandidate',
  async (data) => {
    const response = await updateCandidar(data);
    return response;
  }
);

export const candidateSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(GetCandidates.pending, (state) => {})
      .addCase(GetCandidates.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.allCandidate = action.payload.data;
          console.log(state.allCandidate, 'aaa');
        } else {
          console.log('failure');
        }
      })
      .addCase(GetCandidates.rejected, (state, action) => {
        console.log('rejected');
      })

      .addCase(DeleteCandidate.pending, (state) => {
        state.deleteCandidate = 'loading';
      })
      .addCase(DeleteCandidate.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.deleteCandidate = 'success';
          message.success('compte supprimé avec succées');
        } else {
          state.deleteCandidate = 'failure';
        }
      })
      .addCase(DeleteCandidate.rejected, (state, action) => {
        console.log('rejected');
      });
  },
});
export const {} = candidateSlice.actions;
export const selectAllCandidate = (state) => state.candidate.allCandidate;
export const selectdeletestatus = (state) => state.candidate.deleteCandidate;
export default candidateSlice.reducer;
