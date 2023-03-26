import React, {useState, useEffect} from 'react';
import { bringUsers, viewUsersappoint } from "../../services/apiCall"; 
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';


export const ViewAppoint = () => {

    const [appointments, setAppointments] = useState([]);

    const RdxCredentials = useSelector(userData);


    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(()=>{

        if(appointments.length === 0){
            viewUsersappoint(RdxCredentials.credentials.token)
                .then(
                    result => {
                        console.log(result.data, 'blaaaa')

                        setAppointments(result.data)
                    }
                )
                .catch(error => console.log(error))
        }

        
    },[appointments])

    console.log(appointments, 'Hi')

    return (
        <>
        <div>
        {  appointments.length > 0 ?
            (<div>
                {
                    appointments.map(
                        appoint => {
                            return (
                                <>
                                {/* <div
                                    onClick={()=>selected(appoint)}
                                    key={appoint.id}>
                                    {appoint.hour} &nbsp;
                                    {appoint.date} &nbsp;
                                    {appoint.Employee.User.name}
                                </div> */}
                                <div
                                    onClick={()=>selected(appoint)}
                                    key={appoint.id}>
                                    <ul>
                                        <li>{appoint.id}</li>
                                        <li>{appoint.Intervention.name} &nbsp;</li>
                                        <li>£ {appoint.Intervention.price}</li>
                                        <li>{appoint.date} &nbsp;</li>
                                    </ul>
                                </div>
                                </>
                            )
                        }
                    )
                }
            </div>)
            :
            (<div>coming ... </div>)
        }
     </div>
     </>
    )
    }