import { configureStore } from '@reduxjs/toolkit';
import annonceReducer from '../features/jjob/jobSlice';
import candidatureReducer from '../features/candidature/candidatureSlice';
import user from '../features/user/userSlice';
import entrepriseReducer from '../features/entreprises/entrepriseSlice';
import candidatReducer from '../features/candidats/candidateSlice';

export const store = configureStore({
  reducer: {

    annonce: annonceReducer,
    candidatures:candidatureReducer,
    user:user,
    entreprise:entrepriseReducer,
    candidate:candidatReducer
  },

});
