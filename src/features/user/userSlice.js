import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { updateUser, uploadAvatar } from './userApi';
const initialState = {
  avatarstatus: '',
  user: null,
};

//update user
export const UpdateUser = createAsyncThunk('users/updateUser', async (data) => {
  const response = await updateUser(data);
  return response;
});

// uploadd user avatar
export const uploadavatar = createAsyncThunk('users/avatar', async (data) => {
  const response = await uploadAvatar(data);
  return response;
});

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /// upload avaytar
      .addCase(uploadavatar.pending, (state, action) => {
        state.avatarstatus = 'loading';
      })
      .addCase(uploadavatar.fulfilled, (state, action) => {
        console.log(action.payload);

        if (action.payload.data) {
          state.avatarstatus = 'success';
          state.user = action.payload.data.data;
        } else {
          state.avatarstatus = 'failure';
        }
      })
      .addCase(uploadavatar.rejected, (state, action) => {});
  },
});
export const {} = userSlice.actions;
export const selectavatarstatus = (state) => state.user.avatarstatus;
export default userSlice.reducer;
