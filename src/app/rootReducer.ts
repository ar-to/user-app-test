import { combineReducers } from '@reduxjs/toolkit'
// reducers
import usersListReducer from '../features/usersList/usersListSlice';
import userFormReducer from '../features/userForm/userFormSlice';

const rootReducer = combineReducers({
  usersList: usersListReducer,
  userForm: userFormReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer