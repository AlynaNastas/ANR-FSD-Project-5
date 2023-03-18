import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { InputText } from '../../components/input/InputText';
import './Register.css'



export const Register = () => {

  const [credencials, setCredencials]= useState ({
    name:'',
    surname:'',
    email: '',
    password: '',
})



const inputHandler = (e) => {
setCredencials((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
}));
}

useEffect(() =>{console.log('Credencials', credencials)},[credencials]);



  return (
    <>
    
    <Container className="registerCss">
      <Container>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <InputText  
          className={'inputBasic'}
          type={"text"}
          name={'name'} 
          placeholder={"Enter Name"}
          changeFunction={(e) => inputHandler(e)} />

        <Form.Text className="text-muted">
          We'll never share your private information with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Surname</Form.Label>
        <InputText 
          
          className={'inputBasic'}
          type={"text"}
          name={'surname'} 
          placeholder={"Enter Surname"}
          changeFunction={(e) => inputHandler(e)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email adress</Form.Label>
        <InputText  
        className={'inputBasic'}
        type={"email"}
        name={'email'} 
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
      
      <div className='button1'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
    </Container>
    </Container>
    </>
  );
}
