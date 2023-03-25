import React, {useState, useEffect} from 'react';
import { bringUsers } from "../../services/apiCall"; 
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';

export const Users = () => {

    const [usuarios, setUsuarios] = useState([]);

    const RdxCredentials = useSelector(userData);


    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(()=>{

        if(usuarios.length === 0){
            bringUsers(RdxCredentials.credentials.token)
                .then(
                    result => {
                        console.log(result.data, 'blaaaa')

                        setUsuarios(result.data)
                    }
                )
                .catch(error => console.log(error))
        }

        console.log(usuarios, 'lololololo')
    },[usuarios])

    const selected = (persona) => {
        
        //Primero guardo en RDX los datos escogidos...

        dispatch(addChoosen({ choosenObject: persona }))

        setTimeout(()=>{
            navigate("/userDetails");
        },250)
    }

    return (

<div>

{  usuarios.length > 0 ? 

    (<div>

        {
            usuarios.map(
                persona => {
                    return (
                        <div 
                            onClick={()=>selected(persona)} 
                            key={persona.id}>
                            {persona.name}
                            
                            
                        </div>
                    )
                }
            )
        }


    </div>)

    : 

    (<div>coming...</div>)

}

</div>
    )
}