import axios from 'axios';

const root = "http://localhost:3000/"

export const logMe = async (body) =>{

    return await axios.post(`${root}users/login`, body);
}
export const registUser = async (body) => {
    console.log(body, "el body llega")
    return await axios.post(`${root}users`, body);
    }
