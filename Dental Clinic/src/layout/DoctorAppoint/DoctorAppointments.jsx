
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
    if (credentialRdx.credentials.token) {   
            viewDoctorappoint(credentialRdx.credentials?.token)
            .then( (data) => {
                console.log(data); 
                    setAppointments(data)
                }
            )
            .catch(error => console.log(error));
        }
    }, [])
     console.log(credentialRdx.credentials.token, 'hhhhhh')
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
                                    console.log(appointments),
                                    (app) => {
                                        return (
                                            <div
                                                onClick={() => selected(app)}
                                                key={app.id} >
                                                {app.id}
                                                {app.data}
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