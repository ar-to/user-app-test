import { combineReducers } from '@reduxjs/toolkit'
// reducers
import counterReducer from '../features/counter/counterSlice';
import usersListReducer from '../features/usersList/usersListSlice';
import userFormReducer from '../features/userForm/userFormSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  usersList: usersListReducer,
  userForm: userFormReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer