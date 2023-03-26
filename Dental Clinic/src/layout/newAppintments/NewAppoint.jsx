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


 /* const [treatments, setTreatments ] = useState([

  {  id:1,
    treatmentname: "Invisible orthodontics"
  },
  {
    id:2,
    treatmentname: "Dental cleaning"
  },
  {
    id:3,
    treatmentname: "Teeth whitening"
  }

  ]);*/

  const [doctors, setDoctors] = useState([
    {
      id: 1,
      doctorname: "Alyna Nastas Romaniuc"
    },
    {
      id: 3,
      doctorname: "María Josep Fernández"
    }
  ]);


  


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

console.log(credencials,'enviando cita a railway')

  return (


  


    <div className='Reg'>
    <Container className='boody'>
    <Form>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Doctor</Form.Label>

        <InputText  
        className={'InputBasic'}
        type={"number"}
        maxLength={10}
        name={'doctor_id'} 
        placeholder={""}
        changeFunction={(e) => inputHandler(e)}
        blurFunction={(e)=> checkError(e)} />
    </Form.Group> */}

    <Form.Label>Doctor:</Form.Label>
        <Form.Select name={"doctor_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                    <option>Choose Doctor:</option>
                                    {doctors.map((doctor) => {
                                        return (
                                            <option key={doctor.id} value={doctor.id}>{doctor.doctorname}</option>
                                        )
                                    })}
                                </Form.Select>


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

      {/* <Form.Label>Interventions:</Form.Label>
               <Form.Select name={"Intervention_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                    <option>Choose your Treatment:</option>
                                    {treatments.map((treatment) => {
                                        return (
                                            <option key={treatment.id} value={treatment.id}>{treatment.treatmentname}</option>
                                        )
                                    })}
                                </Form.Select> */}

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







