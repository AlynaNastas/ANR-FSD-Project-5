import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { InputText } from '../../components/input/InputText';
import { useEffect, useState } from 'react';
import './Login.css';
import { validation } from '../../helpers/Validations';
import { logMe } from '../../services/apiCall';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, userData } from '../userSlice';
import { decodeToken } from "react-jwt";
import D11 from '../../assets/D11.jpg'





export const Login = () => {

  const credentialsRdx = useSelector(userData);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  


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


const [welcome, setWelcome] = useState("");



useEffect(() => {

console.log(credencials)
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


useEffect(() => {
  if (credentialsRdx.credentials.token) {
    navigate("/");
  }
}, []);

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




const logmee = () => {

  logMe(credencials)
      .then(
          respuesta => { 
              let decodificado = decodeToken(respuesta.data)
              console.log(respuesta.data,'esto es hola')
              let datosBackend = {
                  token: respuesta.data,
                  usuario: decodificado
                
                
        
              }
          
        
              dispatch(login({credentials: datosBackend}));


              setWelcome(`Hi, there! ${datosBackend.usuario.name}`);

              setTimeout(() => {
                navigate("/home");
              }, 3000);
          }
      )
      .catch(error => console.log(error))

};



  return (



    <div className='Regi'>
    <Container className='boody'>

    <div> <img  className="d-block w-100" src={D11} alt="First slide" /> 
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>

        <InputText  
        className={'InputBasic'}
        type={"email"}
        name={'email'} 
        placeholder={"Enter email"}
        changeFunction={(e) => inputHandler(e)}
        blurFunction={(e)=> checkError(e)} />
      

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <div className='RedError'>{credencialsError.emailError}</div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputText
          className={'InputBasic'}
          type={'password'}
          name={'password'}
          placeholder={'Introduce your password'}
          changeFunction={(e) => inputHandler(e)}
          blurFunction={(e)=> checkError(e)}/>
        <div className='RedError'>{credencialsError.passwordError} </div>
      </Form.Group>
      <div className='button2'>
      <Button 
      onClick= {loginAct ? () => { logmee(); }: () => {} } variant="primary">
        Submit
      </Button>
      </div>
    </Form>
    </div>
    </Container>
    </div>

  );
}
