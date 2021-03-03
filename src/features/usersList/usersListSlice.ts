import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from 'app/store'
import { User } from 'features/usersList/types';

// api
import { getUsersList } from 'api'

const initialState : User[] = [];

const usersListSlice = createSlice({
    name: 'usersList',
    initialState,
    reducers: {
        usersList(state, action: PayloadAction<User[]>) {
            state = action.payload;
        },
    }
});

export const { usersList } = usersListSlice.actions;

export const getUsersListAsync = (): AppThunk => async (dispatch: AppDispatch) => {
    const res: User[] = await getUsersList("/users")
    dispatch(usersList(res));
};

export default usersListSlice.reducer;  