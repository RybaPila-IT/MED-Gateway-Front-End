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
        }),
        getProductsSummary: build.query({
            query: () => ({
                url: '/products',
                method: 'GET'
            })
        }),
        getProductDetails: build.query({
            query: (_id) => ({
                url: `/products/${_id}`,
                method: 'GET'
            })
        }),
        submitPredictionData: build.mutation({
            query: ({_id, data}) => ({
                url: `/products/${_id}`,
                method: 'POST',
                body: data
            })
        }),
        getHistory: build.query({
            query: _id => ({
              url: `/history/${_id}`,
              method: 'GET'
            })
        }),
        verifyAccount: build.mutation({
            query: email => ({
                url: '/verify/send',
                method: 'POST',
                body: {email}
            })
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useGetUserQuery,
    useGetProductsSummaryQuery,
    useGetProductDetailsQuery,
    useSubmitPredictionDataMutation,
    useGetHistoryQuery,
    useVerifyAccountMutation
} = backendApi;