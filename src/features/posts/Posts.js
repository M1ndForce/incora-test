import React, {useEffect} from 'react';

import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getPostsForUserAction} from "./postSlice";

const Posts = () => {
        const{userId} = useParams()
        const dispatch = useDispatch()

        useEffect(()=>{
            dispatch(getPostsForUserAction(userId))
        },[])

        const {posts} = useSelector(state=> state.posts)
        console.log(posts);

        return <div>post</div>
    }
;

export default Posts;
