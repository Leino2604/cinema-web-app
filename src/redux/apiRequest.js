import axios from "axios";
import { loginFailed, loginStart, loginSuccess, signupFailed, signupStart, signupSuccess, logoutFailed, logoutStart, logoutSuccess } from "./authSlice";

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart());

    try {
        const res = await axios.post("http://localhost:5000/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    }catch(err) {
        dispatch(loginFailed(err));
    }
}

export const signupUser = async(user, dispatch, navigate) => {
    dispatch(signupStart());

    try {
        const res = await axios.post("http://localhost:5000/v1/auth/signup", user);
        dispatch(signupSuccess(res.data));
        navigate("/login");
    }catch(err) {
        dispatch(signupFailed(err));
    }
}

export const logoutUser = async(dispatch, id, navigate, accessToken, axiosJWT) => {
   dispatch(logoutStart());
   try {
        await axiosJWT.post("http://localhost:5000/v1/auth/logout", id, {
            headers: {token: `Bearer ${accessToken}`}},
        );
        dispatch(logoutSuccess());
   } catch(err) {
     dispatch(logoutFailed());
   }
}