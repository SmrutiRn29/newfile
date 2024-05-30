import { myAxios } from "./helper";


export const currentUser = (token) => {
    return myAxios.get("/current-user/", { headers: { authorization: token } }).then((response) => response.data);
};

export const generateToken = (logindata) => {
    return myAxios.post("/generate-token", logindata).then((response) => response.data);
};

export const loginUser = (token) => {
    localStorage.setItem('token', token);
    return token;
};
export const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};