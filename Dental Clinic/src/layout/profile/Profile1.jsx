import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getUserProfile } from '../../services/apiCall';
import { userData } from '../userSlice';





export const Profile1 = () => {


    const credencialRdx = useSelector(userData);

    const [user, setUser] = useState({
        name: "",
        surname: "",
        nif: "",
        birth_date: "",
        direction: "",
        email: "",
        phone: ""
    });
   
    useEffect(() => {
       // const currentToken = credencialRdx?.credentials?.token

       console.log(credencialRdx.credentials, 'hola')
       console.log(credencialRdx, 'que te jodan redux')
       if (user.name === "") {
            getUserProfile(credencialRdx?.credentials?.token)
         
            .then((result) => {
                console.log(result.data);
                setUser({
                    name: result.data.user.name,
                    surname: result.data.user.surname,
                    nif: result.data.user.nif,
                    birth_date: result.data.user.birth_date,
                    direction: result.data.user.direction,
                    email: result.data.user.email,
                    phone: result.data.user.phone,
                    password: result.data.user.password
                });
            })
            .catch((error) => console.log(error));
            }
        }, []);
  return (
    <div>Profile</div>
  )
}