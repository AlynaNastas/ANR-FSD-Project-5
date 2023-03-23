import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { getUserProfile } from '../../services/apiCall';
import { userData } from '../userSlice';





export const Profile1 = () => {


    const credencialRdx = useSelector(userData);

    const [user, setUser] = useState({
        name: "",
        surname: "",
        nif: "",
        birth_date: "",
        direction: "",
        email: "",
        phone: ""
    });
   
    useEffect(() => {
       // const currentToken = credencialRdx?.credentials?.token

       console.log(credencialRdx.credentials, 'hola')
       console.log(credencialRdx, 'que te jodan redux')
       if (user.name === "") {
            getUserProfile(credencialRdx?.credentials?.token)
         
            .then((result) => {
                console.log(result.data, '--------');
                setUser({
                   
                    name: result.data.name,
                    surname: result.data.surname,
                    nif: result.data.nif,
                    birth_date: result.data.birth_date,
                    direction: result.data.direction,
                    email: result.data.email,
                    phone: result.data.phone,
                });
            })
            .catch((error) => console.log(error));
            }
            console.log(user.name, 'adios' )
        }, []);
  return (
    <>
       <Container>
      <Card>
        {/* <Card.Img variant="top" src={personaje.image}/> */}
        <Card.Body>
          <Card.Title>Name:{user.name} </Card.Title>
          <Card.Text>Surname:{user.surname} </Card.Text>
          <Card.Text>Nif:{user.nif} </Card.Text>
          <Card.Text>Birth date:{user.birth_date} </Card.Text>
          <Card.Text>Direction:{user.direction} </Card.Text>
          <Card.Text>Email:{user.email} </Card.Text>
          <Card.Text>Phone:{user.phone} </Card.Text>
        </Card.Body>
    </Card>
    </Container>

    </>
    )
}