import React, {useState, useEffect} from 'react';
import { viewDoctorappoint } from "../../services/apiCall"; 
import { useSelector } from "react-redux";
import { userData } from "../userSlice";



export const DoctorAppointments = () => {

    const [doctorApp, setdoctorApp] = useState([]);

    const RdxCredentials = useSelector(userData);


    // const dispatch = useDispatch();
    // const navigate = useNavigate();


    useEffect(()=>{
        if(RdxCredentials.credentials.token){
            viewDoctorappoint(RdxCredentials.credentials.token)
                .then(
                    result => {
                        console.log(result.data, 'blaaaa')

                        setdoctorApp(result.data)
                    }
                )
                .catch(error => console.log(error))
        }

        
    },[RdxCredentials.credentials.token])

    console.log(doctorApp, 'Hi')

    return (
<div> </div>
    )
    }