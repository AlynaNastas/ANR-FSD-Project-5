import D9 from '../../assets/D9.jpeg'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../components/input/InputText';
import { validation } from '../../helpers/Validations';
import { registUser } from '../../services/apiCall';
import './Register.css'



export const Register = () => {



  const [credencials, setCredencials]= useState ({
    name:'',
    surname:'',
    email: '',
    password: '',
    nif: '',
    direction:'',
    birth_date:'',
    phone:'',
  
})



const inputHandler = (e) => {
setCredencials((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
}));
}

const [credencialsError, setCredencialsError] = useState({
    nameError:'',
    surnameError:'',
    emailError: '',
    passwordError: '',
    nifError: '',
    directionError:'',
    birth_dateError:'',
    phoneError:'',
  
});


const [validatedCredencials, setValidationCredentials] = useState({
    nameValidated:'',
    surnameValidated:'',
    emailValidated: '',
    passwordValidated: '',
    nifValidated: '',
    directionValidated:'',
    birth_dateValidated:'',
    phoneValidated:'',
  
})


const [registerAct, setRegisterAct] = useState(false);





useEffect(() => {

    for(let error in credencialsError){
      if(credencialsError[error] !== ""){
        setRegisterAct(false);
        return;
      }
    }
  
    for(let vacio in credencials){
      if(credencials[vacio] === ""){
        setRegisterAct(false);
        return;
      }
    }
  
    for(let validation in validatedCredencials){
      if(validatedCredencials[validation] === false){
        setRegisterAct(false);
        return;
      }
    }
  
  
    setRegisterAct(true);
  });  





  const checkError = (e) => {

    let error = "";
  
    const validat = validation(
        e.target.name,
        e.target.value,
        e.target.required
      );
      console.log(validat)
  
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
  

  const registerMe = () => {
    
  console.log(credencials)
    
   registUser (credencials)
       .then((results) => {
        console.log(results)
         setTimeout(() => {
           navigate("/login");
         }, 3000);
       })
       .catch(error => console.log(error));
  };




  return (
    <>
  
  <Container className="registerCss">
      <Container>
    <Form>
    <div>  <img className="d-block w-100" src={D9} alt="First slide" />
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <InputText  
          className={'inputBasic'}
          type={"text"}
          name={'name'} 
          placeholder={"Enter Name"}
          changeFunction={(e) => inputHandler(e)} 
          blurFunction={(e)=> checkError(e)}/>

        <Form.Text className="text-muted">
          We'll never share your private information with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label>Surname</Form.Label>
        <InputText 
          
          className={'inputBasic'}
          type={"text"}
          name={'surname'} 
          placeholder={"Enter Surname"}
          changeFunction={(e) => inputHandler(e)} 
          blurFunction={(e)=> checkError(e)}/>
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
        changeFunction={(e) => inputHandler(e)}
        blurFunction={(e)=> checkError(e)}/>

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <div className='RedError'>{credencialsError.emailError}</div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassport">
        <Form.Label>Passport</Form.Label>
        <InputText 
          
          className={'inputBasic'}
          type={"text"}
          name={'nif'} 
          placeholder={"Enter your passport or nif "}
          changeFunction={(e) => inputHandler(e)} 
          blurFunction={(e)=> checkError(e)}/>
        <Form.Text className="text-muted">
        </Form.Text>
        <div className='RedError'>{credencialsError.nifError}</div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAdress">
        <Form.Label>Address</Form.Label>
        
        <InputText 
          className={'inputBasic'}
          type={"text"}
          name={'direction'} 
          placeholder={"Enter your address"}
          changeFunction={(e) => inputHandler(e)} 
          blurFunction={(e)=> checkError(e)}/>
        <Form.Text className="text-muted">
        </Form.Text>
        <div className='RedError'>{credencialsError.directionError}</div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBirth">
        <Form.Label>Birth Date</Form.Label>
        <InputText 
          
          className={'inputBasic'}
          type={"date"}
          name={'birth_date'} 
          placeholder={"Enter your date of birth"}
          changeFunction={(e) => inputHandler(e)} 
          blurFunction={(e)=> checkError(e)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <InputText 
          
          className={'inputBasic'}
          type={"text"}
          name={'phone'} 
          placeholder={"Enter your phone number"}
          changeFunction={(e) => inputHandler(e)} 
          blurFunction={(e)=> checkError(e)}/>
        <Form.Text className="text-muted">
        </Form.Text>
        <div className='RedError'>{credencialsError.phoneError}</div>
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
      
      <div className='button1'>
      <Button  onClick= {
        //registerAct ? () => { registerMe(); }: () => {} 
        ()=>registerMe()
        } variant="primary" >

        Submit
      </Button>
      </div>
      </div> 
    </Form>
    </Container>
    </Container>
   
    </>
  );
}
