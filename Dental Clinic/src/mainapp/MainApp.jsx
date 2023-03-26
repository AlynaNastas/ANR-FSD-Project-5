import { Route, Routes } from "react-router-dom"
import { Navbar1 } from "../components/Navbar1"
import { Home } from "../layout/home/Home"
import { Register } from "../layout/register/Register"
import { Login } from "../layout/login/Login"
import { Footer1 } from "../components/footer/Footer1"
import { Profile1 } from "../layout/profile/Profile1"
import { Users } from "../layout/user/Users"
import { UserDoctors } from "../layout/user/UserDoctors"
import { NewAppoint } from "../layout/newAppintments/NewAppoint"
import { ViewAppoint } from "../layout/newAppintments/ViewAppoint"
import { DoctorAppointments } from "../layout/DoctorAppoint/DoctorAppointments"
import { Aboutus } from "../layout/about/Aboutus"




export const MainApp = () => {
return (
    <>
    <Navbar1/>
    <Routes>
    <Route path= '/home' element={<Home/>}/>
    <Route path= '/login' element={<Login/>}/>
    <Route path= '/register' element={<Register/>}/>
    <Route path= '/userDoctor' element={<UserDoctors/>}/>
    <Route path= '/createappointment' element={<NewAppoint/>}/>
    <Route path= '/viewdoctorappointment' element={<DoctorAppointments/>}/>
    <Route path= '/viewyourappoint' element={<ViewAppoint/>}/>
    <Route path= '/profile' element={<Profile1/>}/>
    <Route path= '/users' element={<Users/>}/>
    <Route path= '/about' element={<Aboutus/>}/>

    </Routes>
    <Footer1/>
    </>
)
}
