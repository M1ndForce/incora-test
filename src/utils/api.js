import axios from 'axios'

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getUsers = async () => {
    const {data} = await client.get('/users');
    return data
}

export const getPostForUser = async (userId) => {
    const {data} = await client.get(`/posts?userId=${userId}`);
    debugger
    return data;
}

export const createPost = async () => {
    const res = await client.post('/posts');
}

export const getPost = async (postId) => {
    const res = await client.get(`/comments?postId=${postId}`);
}

export const updatePost = async (postId) => {
    const res = await client.put(`/posts/${postId}`);
}

export const deletePost = async (postId) => {
    const res = await client.delete(`/posts/${postId}`);
}
