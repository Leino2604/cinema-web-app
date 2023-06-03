import axios from "axios";
import { loginFailed, loginStart, loginSuccess, signupFailed, signupStart, signupSuccess, logoutFailed, logoutStart, logoutSuccess } from "./authSlice";

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart());

    try {
        const res = await axios.post("http://localhost:5000/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        console.log(res.data.role);
        console.log(typeof res.data.role);
        console.log(res.data.role === "Guest");

        if(res.data.role === "Admin") {
            navigate("/payment");
        }else if(res.data.role === "Guest") {
            
            navigate("/")
        }else if(res.data.role === "Manage") {
            // navigate("/movieManagement")
            navigate("/revenue")
        }else if (res.data.role === "Employee") {
            navigate("/")
        }
    }catch(err) {
        dispatch(loginFailed(err));
        alert(err.response.data)
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
        alert(err.response.data)
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