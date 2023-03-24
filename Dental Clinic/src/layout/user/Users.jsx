import React, {useState, useEffect} from 'react';
import { bringUsers } from "../../services/apiCall"; 
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

export const Users = () => {

    const [usuarios, setUsuarios] = useState([]);

    const RdxCredentials = useSelector(userData);

    useEffect(()=>{

        if(usuarios.length === 0){
            bringUsers(RdxCredentials.credentials.token)
                .then(
                    result => {
                        console.log(result)

                        setUsuarios(result.data)
                    }
                )
                .catch(error => console.log(error))
        }

        console.log(usuarios)
    },[usuarios])

    return (

        <div>soy alyna y soy divina</div>
    )
}