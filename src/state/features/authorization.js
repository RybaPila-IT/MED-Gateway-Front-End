import {createSlice} from "@reduxjs/toolkit";
import {compareAsc} from "date-fns";

export const userDataSessionKey = 'med-gateway-user-data';

const createState = (_id = null, status = null, token = null) => ({
    user: {
        _id,
        status
    },
    token
})

const initialState = function () {
    const storedUserData = localStorage.getItem(userDataSessionKey);
    if (!storedUserData) {
        return createState();
    }
    const {_id, status, token, expires} = JSON.parse(storedUserData);
    if (!_id || !status || !token ||!expires) {
        return createState();
    }
    // If the data stored in local storage is expired,
    // we return empty state with user not being authenticated.
    if (compareAsc(Date.parse(expires), Date.now()) !== 1) {
        return createState();
    }
    return createState(_id, status, token);
}();

const authenticationSlice = createSlice({
    name: 'authenticate',
    initialState,
    reducers: {
        login(state, action) {
            const {_id, status, token} = action.payload;
            state.user._id = _id;
            state.user.status = status;
            state.token = token;
        },
        logout(state) {
            state.user._id = null;
            state.user.status = null;
            state.token = null;
        }
    }
})

export const {login, logout} = authenticationSlice.actions;
export default authenticationSlice.reducer;
