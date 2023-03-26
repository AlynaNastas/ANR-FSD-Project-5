import React, {useState, useEffect} from 'react';
import { bringUsers } from "../../services/apiCall"; 
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { addChoosen } from '../detailSlice';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';


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
                        setUsuarios(result.data)
                    }
                )
                .catch(error => console.log(error))
        }

    },[usuarios])

    const selected = (persona) => {

        dispatch(addChoosen({ choosenObject: persona }))

        setTimeout(()=>{
            navigate("/viewdoctorappointment");
        },250)
    }

    return (

<div>
    <Container> 

{  usuarios.length > 0 ? 

    (<div> 
        {
            usuarios.map(
                persona => {
                    return (

                        <>
                        <Container className='Center' >
                            <Card>
                                <Card.Body
                                    onClick={() => selected(persona)}
                                    key={persona.id} >
                                    <Card.Title>Name:&nbsp; {persona.name} </Card.Title>
                                    <Card.Title>Surname:&nbsp; {persona.surname} </Card.Title>
                                    <Card.Title>Email:&nbsp; {persona.email} </Card.Title>
                                    <Card.Title>NIF:&nbsp; {persona.nif} </Card.Title>
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

    (<div>coming...</div>)

}

    </Container>
</div>
    )
}