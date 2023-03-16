
import Form from 'react-bootstrap/Form'
import './InputText.css'

export const InputText = ({className, type, name, placeholder, changeFunction}) => {
    return (
    <>
    <Form.Control
        className={className} 
        type={type}
        name={name}
        placeholder={placeholder}
    />
    </>
    )
}