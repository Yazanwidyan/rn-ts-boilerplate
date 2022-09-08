import {StoreProps} from '@types';

export const getUserInfo = (state: StoreProps) => state.accountReducers.user;
