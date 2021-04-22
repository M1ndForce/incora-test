import {createSlice} from '@reduxjs/toolkit';
import {getUsers} from "../../utils/api";

const initialState = {
    users: [],
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
    },
});

export const {setUsers} = usersSlice.actions;

export const getUsersAction = () => async dispatch => {
    const res = await getUsers()
    dispatch(setUsers(res))
};

export default usersSlice.reducer;
