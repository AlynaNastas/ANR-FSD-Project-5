import React, {useState, useEffect} from 'react';
import { viewUsersappoint } from "../../services/apiCall"; 
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
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
                     

                        setAppointments(result.data)
                    }
                )
                .catch(error => console.log(error))
        }

        
    },[appointments])



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
                                <Container className='Center' >
                                    <Card>
                                        <Card.Body
                                            onClick={()=>selected(appoint)}
                                            key={appoint.id} >
                                            <Card.Title>Appointment number: &nbsp; {appoint.id} </Card.Title>
                                            <Card.Title>Treatment:&nbsp;{appoint.Intervention.name} </Card.Title>
                                            <Card.Title>Price:&nbsp;£{appoint.Intervention.price}</Card.Title>
                                            <Card.Title>Date:&nbsp;{appoint.date}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                </Container>
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