import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logoutSuccess } from "./authSlice";
import { toast } from "react-toastify";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8080/api/auth/login", user);
        if (res && res.status === 200) {
            dispatch(loginSuccess(res.data));
            navigate("/")
            toast.success('Login success!')
        } if (res && res.status === 401) {
            toast.error('Err')
        }

    } catch (err) {
        dispatch(loginFailed())
        toast.error(err.response.data)
    }
}

export const logout = async (dispatch, navigate) => {
    dispatch(logoutSuccess());
    navigate("/login")
}