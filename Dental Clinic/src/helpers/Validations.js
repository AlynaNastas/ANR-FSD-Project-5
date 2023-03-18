
export const validation = (name, info, required) => {
switch (name){

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
    

            default:
            console.log("Fielt not recognized");
        }
    };
