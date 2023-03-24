import { Route, Routes } from "react-router-dom"
import { Navbar1 } from "../components/Navbar1"
import { Home } from "../layout/home/Home"
import { Register } from "../layout/register/Register"
import { Login } from "../layout/login/Login"
import { Footer1 } from "../components/footer/Footer1"
import { UserDetails } from "../layout/user/userDetails"
import { Profile1 } from "../layout/profile/Profile1"
import { Users } from "../layout/user/Users"




export const MainApp = () => {
return (
    <>
    <Navbar1/>
    <Routes>
    <Route path= '/' element={<Home/>}/>
    <Route path= '/login' element={<Login/>}/>
    <Route path= '/register' element={<Register/>}/>
    <Route path= '/userDetail' element={<UserDetails/>}/>
    <Route path= '/profile' element={<Profile1/>}/>
    <Route path= '/users' element={<Users/>}/>
    </Routes>
    <Footer1/>
    </>
)
}
