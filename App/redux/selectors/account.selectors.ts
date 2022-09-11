import {StoreProps} from '@types';

export const getUserInfo = (state: StoreProps) => state.accountReducers.user;
export const getIsDarkMode = (state: StoreProps) =>
  state.accountReducers.deviceInfo.isDarkMode;
