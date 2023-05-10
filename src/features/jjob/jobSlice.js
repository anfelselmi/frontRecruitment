import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
import {
  createannonce,
  deleteannonce,
  getannoncebyCompanyId,
  getannoncebyId,
  getannonces,
  updateannonce,
} from './jobApi';
const initialState = {
  AllAnnonce: [],
  addAnnonce: '',
  deleteAnnonce: '',
  updateAnnonce: '',
  errors: [],
  getId: '',
  getCompanyId: [],
};
export const GetAllAnnonce = createAsyncThunk(
  'Annonces/getallAnnonces',
  async () => {
    const response = await getannonces();
    return response.data;
  }
);
export const GetByCompany = createAsyncThunk(
  'annonces/getByCompany',
  async (id) => {
    const response = await getannoncebyCompanyId(id);
    return response;
  }
);
export const CreateAnnonce = createAsyncThunk(
  'Annonces/createAnnonces',
  async (data) => {
    const response = await createannonce(data);
    return response;
  }
);
export const DeleteAnnonce = createAsyncThunk(
  'annonce/deleteAnnonce',
  async (id) => {
    const response = await deleteannonce(id);
    return response.data;
  }
);
export const UpdateAnnonce = createAsyncThunk(
  'annonce/updateAnnonce',
  async (data) => {
    const response = await updateannonce(data);
    return response.data;
  }
);
export const GetAnnonceById = createAsyncThunk(
  'annonce/getAnnonceById',
  async (id) => {
    const response = await getannoncebyId(id);
    return response.data;
  }
);

export const annonceSlice = createSlice({
  name: 'annonce',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(GetAllAnnonce.pending, (state) => {
        console.log('zzz');
      })
      .addCase(GetAllAnnonce.fulfilled, (state, action) => {
        console.log('bbb');
        state.AllAnnonce = action.payload.data;
      })

      .addCase(GetAllAnnonce.rejected, (state, action) => {})

      .addCase(CreateAnnonce.pending, (state) => {
        state.addAnnonce = 'loading';
      })

      .addCase(CreateAnnonce.fulfilled, (state, action) => {
        console.log(action.payload, 'ooo');

        if (action.payload.status === 200) {
          state.addAnnonce = 'success';
          state.AllAnnonce.push(action.payload.data);
          window.alert('Annonce Annonceed successfuly');
          window.location.href('/offres');
        } else {
          state.addAnnonce = 'failure';
          state.errors = action.payload.response.data.errors.details;
        }
      })

      .addCase(CreateAnnonce.rejected, (state, action) => {})

      .addCase(UpdateAnnonce.pending, (state) => {})
      .addCase(UpdateAnnonce.fulfilled, (state, action) => {
        console.log(action.payload);

        if ((action.payload.status = 200)) {
          state.updateAnnonce = 'success';
        } else {
          state.updateAnnonce = 'failure';
        }
      })

      .addCase(UpdateAnnonce.rejected, (state, action) => {})

      .addCase(DeleteAnnonce.pending, (state) => {})
      .addCase(DeleteAnnonce.fulfilled, (state, action) => {
        if (action.payload.data) {
          state.deleteAnnonce = 'success';
          let index = state.AllAnnonce.findIndex(
            (AllAnnonce) => AllAnnonce._id === action.payload._id
          );
          state.AllAnnonce.splice(index, 1);
          message.success('Annonce supprimé avec succées');
        } else {
          state.deleteAnnonce = 'failure';
          message.failure('suppression echoué');
        }
      })

      .addCase(DeleteAnnonce.rejected, (state, action) => {})

      .addCase(GetAnnonceById.pending, (state) => {})
      .addCase(GetAnnonceById.fulfilled, (state, action) => {
        if ((state.getId = 'success')) {
          console.log(action.payload.data, 'ooo');
          state.getId = action.payload.data;
        } else {
          state.getId = 'failure';
        }
      })
      .addCase(GetAnnonceById.rejected, (state, action) => {})

      .addCase(GetByCompany.pending, (state) => {})

      .addCase(GetByCompany.fulfilled, (state, action) => {
        if ((state.getCompanyId = 'success')) {
          state.getCompanyId = action.payload.data.data;
          console.log(state.getCompanyId, 'loooog');
        } else {
          state.getCompanyId = 'failure';
        }
      })
      .addCase(GetByCompany.rejected, (state, action) => {});
  },
});

export const {} = annonceSlice.actions;
export const selectAnnonces = (state) => state.annonce.AllAnnonce;
export const selectAddAnnonces = (state) => state.annonce.addAnnonce;
export const selectdeleteAnnonces = (state) => state.annonce.deleteAnnonce;
export const selectupdateAnnonces = (state) => state.annonce.updateAnnonce;
export const selectgetbyId = (state) => state.annonce.getId;
export const selectgetbyCompanyId = (state) => state.annonce.getCompanyId;
export const selecterrors = (state) => state.annonce.errors;
export default annonceSlice.reducer;
