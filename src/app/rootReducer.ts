import { combineReducers } from '@reduxjs/toolkit'
// reducers
import counterReducer from '../features/counter/counterSlice';
import usersListReducer from '../features/usersList/usersListSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  usersList: usersListReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer