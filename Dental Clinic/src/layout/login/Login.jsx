import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { InputText } from '../../components/input/InputText';
import { useEffect, useState } from 'react';
import './Login.css';
import { validation } from '../../helpers/Validations';



export const Login = () => {


  const [credencials, setCredencials]= useState ({
    email: '',
    password: '',
})

const inputHandler = (e) => {
  setCredencials((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
  }));
  }
  


  const [credencialsError, setCredencialsError] = useState({
  emailError: '',
  passwordError: '',
});


const [validatedCredencials, setValidationCredentials] = useState({
  emailValidated: false,
  passwordValidated: false,
})



const [loginAct, setLoginAct] = useState(false);





useEffect(() => {

console.log('Credencials')
  for(let error in credencialsError){
    if(credencialsError[error] !== ""){
      setLoginAct(false);
      return;
    }
  }

  for(let vacio in credencials){
    if(credencials[vacio] === ""){
      setLoginAct(false);
      return;
    }
  }

  for(let validation in validatedCredencials){
    if(validatedCredencials[validation] === false){
      setLoginAct(false);
      return;
    }
  }


  setLoginAct(true);
});

const checkError = (e) => {


  let error = "";

  const validat = validation(
      e.target.name,
      e.target.value,
      e.target.required
    );

  error = validat.message;



  setValidationCredentials((previousState) => ({
    ...previousState,
    [e.target.name + "Validated"]: validat.validation,
  }));


  setCredencialsError((previouState) => ({
    ...previouState,
    [e.target.name + "Error"]: error,
  }));
};

const fakelog = () => {
  console.log("victoria");
};





useEffect(() =>{console.log('Credencials', credencials)},[credencials]);


  return (
    <div className='Regi'>
    <Container className='boody'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>

        <InputText  
        className={'inputBasic'}
        type={"email"}
        name={'email'} 
        placeholder={"Enter email"}
        changeFunction={(e) => inputHandler(e)}
        blurFunction={(e)=> checkError(e)} />
      

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
        changeFunction={(e) => inputHandler(e)}
        blurFunction={(e)=> checkError(e)}/>
      </Form.Group>

      <div>{credencialsError.emailError}</div>


      <div className='button2'>
      <Button 
      onClick= {loginAct ? () => { fakelog(); }: () => {} } variant="primary">
        Submit
      </Button>
      </div>
    </Form>
    </Container>
    </div>

  );
}

