import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { userData } from '../../pages/userSlice';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const datosCredencialesRedux = useSelector(userData);

    const navigate = useNavigate();

useEffect(()=>{
    console.log(datosCredencialesRedux);
    })

    return (
    <div className="">
        {datosCredencialesRedux.credentials.token ? (
        <div>
            <div>{datosCredencialesRedux?.credentials?.usuario?.name}</div>
            <div>logout</div>
            <div onClick={()=>navigate("/users")}>users</div>
        </div>
        ) : (
        <div>
            <div>login</div>
            <div>register</div>
        </div>
        )}
    </div>
    );
};