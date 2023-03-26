
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { useSelector } from 'react-redux';
import { viewDoctorappoint } from '../../services/apiCall';
import { userData } from '../userSlice';



export const DoctorAppointments = () => {
    const credentialRdx = useSelector(userData)


    const [appointments, setAppointments] = useState([]);


    useEffect(() => {
    if(appointments.length === 0) {   
            viewDoctorappoint(credentialRdx.credentials?.token)
            .then( result => {
                console.log(result, 'HOLAAAAAAAA TU'); 
                    setAppointments(result.data)
                }
            )
            .catch(error => console.log(error));
        }
    }, [appointments])

console.log(appointments, ' HEHE')

  return (
    <>
    <Container className="appoinment">
        <Row>
            <Col>
                <div className="Lo">
                    {appointments.length > 0 ? (
                        <div>
                            {
                                appointments.map(
                                    app => {
                                        return (
                                            <div
                                                onClick={() => selected(app)}
                                                key={app.id} >
                                                <div>{app.date}</div> 
                                                <div>{app.doctor_id}</div>
                                                <div>{app.comments}</div>
                                            </div>
                                        );
                                    }
                                )
                            }
                        </div>
                    ) : (
                        <div>coming ... </div>
                    )}
                </div>
            </Col>
        </Row>
    </Container>
</>
)
}