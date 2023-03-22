import axios from 'axios';

const root = "https://gh-fsd-2023-p4-bbdd-production.up.railway.app/"

export const logMe = async (body) =>{

    return await axios.post(`${root}users/login`, body);
}

export const registUser = async (body) => {
    console.log(body, "el body llega")
    return await axios.post(`${root}users`, body);
    }
