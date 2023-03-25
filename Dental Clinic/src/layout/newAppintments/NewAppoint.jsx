import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { InputText } from '../../components/input/InputText';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { createAppointment } from '../../services/apiCall';


export const NewAppoint = () => {


  const credentialsRdx = useSelector(userData);
console.log(credentialsRdx.credentials.usuario)

  //const navigate = useNavigate();

  


  const [credencials, setCredencials]= useState ({
   

            doctor_id:'',
            patient_id : credentialsRdx.credentials.usuario.userId,
            intervention_id: '',
            date:'',
            comments:''
})


const inputHandler = (e) => {
  setCredencials((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
  }));
  }





//const [welcome, setWelcome] = useState("");





const checkError = (e) => {};





const buttonApp = () =>{

    createAppointment(credencials, credentialsRdx.credentials.token )
    .then ( result =>{
        setCredencials(result.data)
        //setWelcome(`Your appointment is...${credencials.date}`)
    }).catch(error => {setCredencials(error.message)})
}

console.log(credencials,'lolololoo')

  return (


  


    <div className='Reg'>
    <Container className='boody'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Doctor</Form.Label>

        <InputText  
        className={'InputBasic'}
        type={"number"}
        maxLength={20}
        name={'doctor_id'} 
        placeholder={""}
        changeFunction={(e) => inputHandler(e)}
        blurFunction={(e)=> checkError(e)} />
    </Form.Group>


    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Patient</Form.Label>
          <InputText
          className={'InputBasic'}
          type={'text'}
          name={'patient_id'}
          placeholder={''}
          changeFunction={(e) => inputHandler(e)}
          blurFunction={(e)=> checkError(e)}/>
</Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Intervention</Form.Label>
          <InputText
          className={'InputBasic'}
          type={'text'}
          name={'intervention_id'}
          placeholder={''}
          changeFunction={(e) => inputHandler(e)}
          blurFunction={(e)=> checkError(e)}/>
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Time slot</Form.Label>
          <InputText
          className={'InputBasic'}
          type={'date'}
          name={'date'}
          placeholder={''}
          changeFunction={(e) => inputHandler(e)}
          blurFunction={(e)=> checkError(e)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Reason for you visit</Form.Label>
          <InputText
          className={'InputBasic'}
          type={'text'}
          name={'comments'}
          placeholder={''}
          changeFunction={(e) => inputHandler(e)}
          blurFunction={(e)=> checkError(e)}/>
      </Form.Group>


      <div className='button2'>
      <Button 
      onClick={buttonApp} variant="primary">
        Submit
      </Button>
      </div>
    </Form>
    </Container>
    </div>

  );
}