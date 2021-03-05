import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from "lodash";

import { RootState } from 'app/store';
import { User } from 'features/usersList/types';

interface UserFormState {
  selectedUser: User;
  form: User[];
}

const initialState: UserFormState = {
  selectedUser: {
    id: 0,
    name: '',
    status: false,
  },
  form: []
};

// const initialState: User | {} = {};

const userFormSlice = createSlice({
  name: 'userForm',
  initialState,
  reducers: {
    setSelectedUser(state, action: PayloadAction<User>) {
      state.selectedUser = action.payload;
    },
    /**
     * differs from usersList in that this tracks only the updated record of users and not all of the users available
     * @param state 
     * @param action 
     */
    setUserForLaterProcessing(state, action: PayloadAction<User>) {
      /**
       * TODO:: needs some work and unit testing!
       */
      // find and update existing user updates so only the most recent ones are set for processing and avoid redundancy
      const userExists = state.form.find((u) => u.id === action.payload.id);
      if (action.payload.id !== 0 && !_.isEqual(state.form, action.payload)) {
        if (userExists) {
          // check all values are different before updating to avoid redundancy and uncessary processing
          // if (!_.isEqual(state.form, action.payload)) {
            const index = state.form.findIndex((u) => u.id === action.payload.id);
            let newUsersList = [...state.form]
            newUsersList[index] = action.payload;
            state.form = newUsersList
          // }
        } else {
          state.form.push(action.payload);
        }
      }
    },
  },
});

export const { setSelectedUser, setUserForLaterProcessing } = userFormSlice.actions;

// selectors
export const userForm = (state: RootState) => state.userForm;
export const selectedUser = (state: RootState) => state.userForm.selectedUser;

export default userFormSlice.reducer;
