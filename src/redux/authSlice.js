import { createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice( {
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false,
        },
        signup: {
            isFetching: false,
            error: false,
            success: false,
        },
        logout: {
            isFetching: false,
            error: false,
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.currentUser = action.payload;
            state.login.isFetching = false;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
        signupStart: (state) => {
            state.signup.isFetching = true;
        },
        signupSuccess: (state) => {
            state.signup.success = true;
            state.signup.isFetching = false;
            state.signup.error = false;
        },
        signupFailed: (state) => {
            state.signup.isFetching = false;
            state.signup.error = true;
            state.signup.sucess = false;
        },
        logoutStart: (state) => {
            state.logout.isFetching = true;
        },
        logoutSuccess: (state) => {
            state.logout.isFetching = false;
            state.login.currentUser = null;
            state.logout.error = false;
        },
        logoutFailed: (state) => {
            state.logout.isFetching = false;
            state.logout.error = true;
        }
    }
})

export const {
    loginStart,
    loginFailed,
    loginSuccess,
    signupStart,
    signupFailed,
    signupSuccess,
    logoutStart,
    logoutFailed,
    logoutSuccess,

} = authSlice.actions;

export default authSlice.reducer;