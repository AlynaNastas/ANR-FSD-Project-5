
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import { useSelector } from 'react-redux';
import { viewDoctorappoint } from '../../services/apiCall';
import { userData } from '../userSlice';
import Card from 'react-bootstrap/esm/Card';



export const DoctorAppointments = () => {
    const credentialRdx = useSelector(userData)


    const [appointments, setAppointments] = useState([]);


    useEffect(() => {
    if(appointments.length === 0) {   
            viewDoctorappoint(credentialRdx.credentials?.token)
            .then( result => {
                    setAppointments(result.data)
                }
            )
            .catch(error => console.log(error));
        }
    }, [appointments])

    return (
                <div className="Center">
                    {appointments.length > 0 ? (
                        <div>
                            {
                                appointments.map(
                                    app => {
                                        return (
                                <>
                                    <Container className='Center' >
                                        <Card>
                                            <Card.Body
                                                onClick={() => selected(app)}
                                                key={app.id} >
                                                <Card.Title>Date:&nbsp; {app.date} </Card.Title>
                                                <Card.Title>Doctor ID:&nbsp; {app.doctor_id} </Card.Title>
                                                <Card.Title>Comments:&nbsp; {app.comments}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                    </Container>
                                </>
                                        );
                                    }
                                )
                            }
                        </div>
                    ) : (
                        <div>coming ... </div>
                    )}
                </div>
)
}