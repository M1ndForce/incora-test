import {createSlice} from "@reduxjs/toolkit";
import {getPostForUser} from "../../utils/api";

const initialState = {
    posts: []
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        }
    }
})

export const {setPosts} = postSlice.actions;

export const getPostsForUserAction = userId => async dispatch =>{
    const res = await getPostForUser(userId)
    dispatch(setPosts(res))
}

export default postSlice.reducer;
