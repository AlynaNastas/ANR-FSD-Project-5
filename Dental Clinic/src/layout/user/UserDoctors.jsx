import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';
import { bringUsersDoctor } from '../../services/apiCall';

export const UserDoctors = () => {

    const [user, setUser] = useState([]);

    const RdxCredentials = useSelector(userData);


    const dispatch = useDispatch();
   // const navigate = useNavigate();


    useEffect(()=>{

        if(user.length === 0){
            bringUsersDoctor(RdxCredentials.credentials.token)
                .then(
                    result => {
                        console.log(result.data, 'blaaaa')

                        setUser(result.data)
                    }
                )
                .catch(error => console.log(error))
        }

        console.log(user, 'lololololo')
    },[user])

    const selected = (persona) => {
        
        //Primero guardo en RDX los datos escogidos...

        dispatch(addChoosen({ choosenObject: persona }))

       /* setTimeout(()=>{
            navigate("/home");
        },250)*/
    }

    return (

<div>

{  user.length > 0 ? 

    (<div>

        {
            user.map(
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

