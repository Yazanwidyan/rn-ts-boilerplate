import {createSlice} from '@reduxjs/toolkit';
import {AccountProps} from '@types';

const initialState: AccountProps = {
  user: {},
};

const slice = createSlice({
  name: 'accountReducer',
  initialState: initialState,
  reducers: {
    login: (state = initialState, action) => {
      state.user = action.payload;
    },
    logout: (state = initialState) => {
      state.user = {};
    },
  },
});

export default slice.reducer;

export const {login, logout} = slice.actions;
