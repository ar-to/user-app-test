import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch, RootState } from 'app/store'
import { User } from 'features/usersList/types';

// api
import { getUsersList } from 'api'

interface UsersListState {
    value: User[];
  }
  
  const initialState: UsersListState = {
    value: [],
  };

// const initialState : User[] = [];

const usersListSlice = createSlice({
    name: 'usersList',
    initialState,
    reducers: {
        usersList(state, action: PayloadAction<User[]>) {
            state.value = action.payload;
        },
    }
});

export const { usersList } = usersListSlice.actions;

export const getUsersListAsync = (): AppThunk => async (dispatch: AppDispatch) => {
    const res: User[] = await getUsersList("/api/users")
    dispatch(usersList(res));
};

// selectors
export const selectUsersList = (state: RootState) => state.usersList;

export default usersListSlice.reducer;  