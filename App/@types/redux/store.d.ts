export interface StoreProps {
  accountReducers: AccountProps;
  loadingReducer: LoadingProps;
}

export interface AccountProps {
  user: {};
  deviceInfo: {
    isDarkMode: boolean;
  };
}

export interface LoadingProps {
  isLoading: boolean;
}
