import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { AppThunk, AppDispatch } from 'app/store'
import { User } from 'features/usersList/types';

const initialState : User | {} = {};

const usersListSlice = createSlice({
    name: 'usersList',
    initialState,
    reducers: {
        selectedUser(state, action: PayloadAction<User[]>) {
            state = action.payload;
        },
    }
});

export const { selectedUser } = usersListSlice.actions;

export default usersListSlice.reducer;  