import {createSlice} from "@reduxjs/toolkit";

const createState = (_id = null, status = null, token = null) => ({
    user: {
        _id,
        status
    },
    token
})

const initialState = function () {
    const storedUserData = localStorage.getItem('user-data');
    if (!storedUserData) {
        return createState();
    }
    const {_id, status, token} = JSON.parse(storedUserData);
    if (!_id || !status || !token) {
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
