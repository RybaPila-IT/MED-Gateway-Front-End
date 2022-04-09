import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from "@reduxjs/toolkit/query";

import {backendApi} from "../api/backend";
import authenticationReducer from './features/authorization';

export const store = configureStore({
    reducer: {
        [backendApi.reducerPath]: backendApi.reducer,
        // Start of the regular reducers.
        authentication: authenticationReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(backendApi.middleware),
})

setupListeners(store.dispatch);

