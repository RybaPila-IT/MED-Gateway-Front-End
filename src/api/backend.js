import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

export const backendApi = createApi({
    reducerPath: 'backendApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api'}),
    endpoints: build => ({
        registerUser: build.mutation({
            query: (userData) => ({
                url: '/users/register',
                method: 'POST',
                body: userData
            })
        })
    })
})

export const {useRegisterUserMutation} = backendApi;