import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

export const backendApi = createApi({
    reducerPath: 'backendApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
        prepareHeaders: (headers, {getState}) => {
            const {token} = getState().authentication;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: build => ({
        registerUser: build.mutation({
            query: (userData) => ({
                url: '/users/register',
                method: 'POST',
                body: userData
            })
        }),
        loginUser: build.mutation({
            query: (userData) => ({
                url: '/users/login',
                method: 'POST',
                body: userData
            })
        }),
        getUser: build.query({
            query: () => ({
                url: '/users/me',
                method: 'GET',
            })
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useGetUserQuery
} = backendApi;