import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { getUserProfile } from '../../services/apiCall';
import { userData } from '../userSlice';
import'./Profile1.css'
import '../../assets/D3.jpeg'






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

    <Container className='Center' >
      <Card> 
        <Card.Body>
          <Card.Title>Name:&nbsp; {user.name} </Card.Title>
          <Card.Title>Surname:&nbsp; {user.surname} </Card.Title>
          <Card.Title>Nif:&nbsp; {user.nif} </Card.Title>
          <Card.Title>Birth date:&nbsp; {user.birth_date} </Card.Title>
          <Card.Title>Direction:&nbsp; {user.direction} </Card.Title>
          <Card.Title>Email:&nbsp; {user.email} </Card.Title>
          <Card.Title>Phone:&nbsp; {user.phone} </Card.Title>
        </Card.Body>
    </Card>
  </Container>

    </>
  )
}