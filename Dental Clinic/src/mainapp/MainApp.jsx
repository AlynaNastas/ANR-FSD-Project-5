import { Route, Routes } from "react-router-dom"
import { Navbar1 } from "../components/Navbar1"
import { Home } from "../layout/home/Home"
import { Login } from "../layout/login/Login"



export const MainApp = () => {
return (
    <>
    <Navbar1/>
    <Routes>
    <Route path= '/home' element={<Home/>}/>
    <Route path= '/' element={<Login/>}/>
    </Routes>
    </>
)
}
