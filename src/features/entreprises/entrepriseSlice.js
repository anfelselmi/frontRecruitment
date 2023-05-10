import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import { deletecompany, getcompanys, updateCompany } from './entrepriseApi';
const initialState = {
  allCompany: [],
  deleteCompany: '',
};

export const GetCompanys = createAsyncThunk(
  'entreprise/getCompany', 
  async () => {
  const response = await getcompanys();
  return response.data;
});



export const DeleteCompany = createAsyncThunk(
  'entreprise/delete',
   async (id) => {
  const response = await deletecompany(id);
  return response.data;
});


export const UpdateCompany = createAsyncThunk(
  'entreprise/updateCompany',
  async (data) => {
    const response = await updateCompany(data);
    return response;
  }
);

export const entrepriseSlice = createSlice({
  name: 'entreprise',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

 
      .addCase(GetCompanys.pending, (state) => {})
      .addCase(GetCompanys.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.allCompany = action.payload.data;
          console.log(state.allCompany, 'aaa');
        } else {
          console.log('failure');
        }
      })

      .addCase(GetCompanys.rejected, (state, action) => {
        console.log('rejected');
      })

  

      .addCase(DeleteCompany.pending, (state) => {
        state.deleteCompany = 'loading';
      })

      .addCase(DeleteCompany.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.deleteCompany = 'success';
          message.success('compte supprimé avec succées');
        } else {
          state.deleteCompany = 'failure';
        }
      })
      .addCase(DeleteCompany.rejected, (state, action) => {
        console.log('rejected');
      });
  },
});

export const {} = entrepriseSlice.actions;
export const selectAllCompany = (state) => state.entreprise.allCompany;
export const selectdeletestatus = (state) => state.entreprise.deleteCompany;
export default entrepriseSlice.reducer;
