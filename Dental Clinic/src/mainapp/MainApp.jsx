import { Route, Routes } from "react-router-dom"
import { Navbar1 } from "../components/Navbar1"
import { Home } from "../layout/home/Home"
import { Register } from "../layout/register/Register"
import { Login } from "../layout/login/Login"
import { Footer1 } from "../components/footer/Footer1"



export const MainApp = () => {
return (
    <>
    <Navbar1/>
    <Routes>
    <Route path= '/' element={<Home/>}/>
    <Route path= '/login' element={<Login/>}/>
    <Route path= '/register' element={<Register/>}/>
    </Routes>
    <Footer1/>
    </>
)
}
