import axios from "axios";
import { loginStart, loginSuccess, loginFailed } from "./AuthAction"

export const login = async (user, dispatch) => {
    dispatch(loginStart);
    try {
        const res = await axios.post("http://localhost:8080/api/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailed)
    }
}