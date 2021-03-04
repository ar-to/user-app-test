import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'app/store';
import { User } from 'features/usersList/types';

interface UserFormState {
  selectedUser: User;
  form: User;
}

const initialState: UserFormState = {
  selectedUser: {
    id: 0,
    name: '',
    status: false,
  },
  form: {
    id: 0,
    name: '',
    status: false,
  }
};

// const initialState: User | {} = {};

const userFormSlice = createSlice({
  name: 'userForm',
  initialState,
  reducers: {
    setSelectedUser(state, action: PayloadAction<User>) {
      state.selectedUser = action.payload;
    },
    setUserForm(state, action: PayloadAction<User>) {
      state.form = action.payload;
    },
  },
});

export const { setSelectedUser, setUserForm } = userFormSlice.actions;

// selectors
export const userForm = (state: RootState) => state.userForm;
export const selectedUser = (state: RootState) => state.userForm.selectedUser;

export default userFormSlice.reducer;
