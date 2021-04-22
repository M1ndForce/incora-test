import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsersAction} from "./usersSlice";
import {Link} from "react-router-dom";

const Users = () => {
        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(getUsersAction())
        }, [])

        const {users} = useSelector(state => state.users)

        const isLoading = users.length === 0;

        return <div>
            {isLoading ?
                <div>Loading...</div>
                : users.map(user => <div key={user.id}>
                    <Link to={`/posts/${user.id}`}>{user.name}</Link>
                </div>)
            }
        </div>
    }
;

export default Users;
