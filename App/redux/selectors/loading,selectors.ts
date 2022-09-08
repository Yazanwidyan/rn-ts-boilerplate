import {StoreProps} from '@types';

export const getIsLoading = (state: StoreProps) =>
  state.loadingReducer.isLoading;
