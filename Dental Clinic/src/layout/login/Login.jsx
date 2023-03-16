import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import { InputText } from '../../components/input/InputText';
import './Login.css'
import { useEffect, useState } from 'react';



export const Login = () => {


  const [credenciales, setCredenciales]= useState ({
    email: '',
    password: '',
})



const inputHandler = (e) => {
setCredenciales((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
}));
}

useEffect(() =>{console.log('Credenciales', credenciales)},[credenciales]);


  return (
    <div className='Regi'>
    <Container className='boody'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>

        <InputText  
        className={'inputBasic'}
        type={"email"}
        name={'name'} 
        placeholder={"Enter email"}
        changeFunction={(e) => inputHandler(e)} />
      

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <InputText
        className={'inputBasic'}
        type={'password'}
        name={'password'}
        placeholder={'Introduce your password'}
        changeFunction={(e) => inputHandler(e)}/>
      </Form.Group>

      <div className='button2'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
    </Container>
    </div>

  );
}

