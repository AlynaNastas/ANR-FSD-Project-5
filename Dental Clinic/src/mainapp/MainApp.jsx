import { Route, Routes } from "react-router-dom"
import { Home } from "../layout/home/Home"
import { Register } from "../layout/register/Register"



export const MainApp = () => {
return (
    <>
    <Routes>
    <Route path= '/home' element={<Home/>}/>
    <Route path= '/' element={<Register/>}/>
    </Routes>
    </>
)
}
