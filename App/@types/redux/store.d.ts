export interface StoreProps {
  accountReducers: AccountProps;
  loadingReducer: LoadingProps;
}

export interface AccountProps {
  user: {};
}

export interface LoadingProps {
  isLoading: boolean;
}
