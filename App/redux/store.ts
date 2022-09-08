import {configureStore, combineReducers} from '@reduxjs/toolkit';
import accountReducers from './account.reducers';
import loadingReducer from './loading.reducer';

const reducer = combineReducers({
  accountReducers,
  loadingReducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
