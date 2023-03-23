import axios from 'axios';

const root = "http://localhost:4000"

export const logMe = async (body) =>{
    return await axios.post(`${root}/users/login`, body);
}

export const registUser = async (body) => {
    return await axios.post(`${root}/users`, body);
    }

export const getUserProfile = async (token) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token} `  
        }
    };
    return await axios.get(`${root}/profile`, config);
}
