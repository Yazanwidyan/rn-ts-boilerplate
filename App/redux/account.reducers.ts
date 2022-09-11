import {createSlice} from '@reduxjs/toolkit';
import {AccountProps} from '@types';

const initialState: AccountProps = {
  user: {},
  deviceInfo: {
    isDarkMode: false,
  },
};

const slice = createSlice({
  name: 'accountReducer',
  initialState: initialState,
  reducers: {
    setDarkMode: (state = initialState, action) => {
      state.deviceInfo.isDarkMode = action.payload;
    },
    login: (state = initialState, action) => {
      state.user = action.payload;
    },
    logout: (state = initialState) => {
      state.user = {};
    },
  },
});

export default slice.reducer;

export const {login, logout, setDarkMode} = slice.actions;
