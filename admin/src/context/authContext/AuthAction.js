export const loginStart = () => ({
    type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
});

export const loginFailed = () => ({
    type: "LOGIN_FAILED",
})

//logout
export const logout = () => ({
    type: "LOGOUT_SUCCESS",
});

