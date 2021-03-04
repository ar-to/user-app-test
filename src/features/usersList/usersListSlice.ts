import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch, RootState } from 'app/store';
import { User } from 'features/usersList/types';

// api
import { getUsersList } from 'api';

interface UsersListState {
  value: User[];
}

const initialState: UsersListState = {
  value: [],
};

const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    usersList(state, action: PayloadAction<User[]>) {
      state.value = action.payload;
    },
    updateUsersList(state, action: PayloadAction<User>) {
      // let toUpdate:User = state.value.find(e => e.id === action.payload)
      const index = state.value.findIndex((u) => u.id === action.payload.id);
      let newUsersList = [...state.value]
      newUsersList[index] = action.payload;
      state.value = newUsersList
    },
  },
});

export const { usersList, updateUsersList } = usersListSlice.actions;

export const getUsersListAsync = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  const res: User[] = await getUsersList('/api/users');
  dispatch(usersList(res));
};

// selectors
export const selectUsersList = (state: RootState) => state.usersList;

export default usersListSlice.reducer;
