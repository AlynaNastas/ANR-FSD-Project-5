
import dayjs from 'dayjs';

export const validation = (name, info, required) => {
switch (name){
        case "name":
        case "surname":
        case "nombre":
        case "apellido":


            if (info === "" && required === true) {
        
                return {message: "Please fill the field", validation: false};
        

            } else if (!/[a-z]/gi.test(info)) {
                return {message: "Please fill with a valid text", validation: false};
            }
        
            return {message: "", validation: true};
        

        case "email":
            if (info === "" && required === true) {
                return {message: "Please fill the field", validation: false};
            } else if (
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(info)
            ) {
                return {message: "Invalid e-mail format", validation: false};
            }

            return {message: "", validation: true};

        case "password":
            if (info === "" && required === true) {
                return {message: "Please fill the field", validation: false};
            } else if (!/[\d()+-]/g.test(info)) {
                return {message: "Invalid password format", validation: false};
            }
            return {message: "", validation: true};


            case "phone":
            case "teléfono":
            case "telephone number":
            case "tel":
                if (info === "" && required === true) {
                    return {message: "Please fill the field", validation: false};
                } else if (!/\+?\(?\d{2,4}\)?[\d\s-]{9}/.test(info)) {
                    return {message: "Invalid phone number", validation: false};
                }
                return {message: "", validation: true};

                case "Fecha de nacimiento":
                case "Date of Birth":
                case "birth_date":
                
                    /*if (info === "" && required === true) {
                        return {message: "Please fill the field", validation: false};
                    } else if (!/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(info)) {
                        
                        console.log("aqui llego")
                        return {message: "Invalid Date of Birth", validation: false};
                    }*/

                    let fecha_hoy = dayjs();

                    let years = fecha_hoy.diff(info, 'years');

                    if(years < 18 ){
                        return {message: "You must be 18", validation: false};

                    }


                    return {message: "", validation: true};

                case "Passport":
                case "DNI":
                case "nif":
                
                    if (info === "" && required === true) {
                        return {message: "Please fill the field", validation: false};
                    } else if (!/^[a-z]{1}[0-9]{8}?$/i.test(info)) {
                        return {message: "Invalid nif", validation: false};
                    }
                    return {message: "", validation: true};


                    case "adress":
                    case "direction":
                        
                            if (info === "" && required === true) {
                                return {message: "Please fill the field", validation: false};
                            } else if (!/[a-z]/gi.test(info)) {
                                return {message: "Invalid Date of Birth", validation: false};
                            }
                            return {message: "", validation: true};
    
    


    

            default:
            console.log("Fielt not recognized");
        }
    };
