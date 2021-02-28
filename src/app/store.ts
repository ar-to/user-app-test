import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export type AppDispatch = typeof store.dispatch
