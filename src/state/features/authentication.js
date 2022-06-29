import {createSlice} from "@reduxjs/toolkit";
import {compareAsc} from "date-fns";

export const userDataSessionKey = 'med-gateway-user-data';

const createState = (token = null) => ({
    token
})

const initialState = function () {
    const storedUserData = localStorage.getItem(userDataSessionKey);
    if (!storedUserData) {
        return createState();
    }
    const {token, expires} = JSON.parse(storedUserData);
    if (!token ||!expires) {
        return createState();
    }
    // If the data stored in local storage is expired,
    // we return empty state with user not being authenticated.
    if (compareAsc(Date.parse(expires), Date.now()) !== 1) {
        return createState();
    }
    return createState(token);
}();

const authenticationSlice = createSlice({
    name: 'authenticate',
    initialState,
    reducers: {
        login(state, action) {
            const {token} = action.payload;
            state.token = token;
        },
        logout(state) {
            state.token = null;
        }
    }
})

export const {login, logout} = authenticationSlice.actions;
export default authenticationSlice.reducer;
