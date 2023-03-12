import { Route, Routes } from "react-router-dom"
import { Navbar1 } from "../components/Navbar1"
import { Home } from "../layout/home/Home"



export const MainApp = () => {
return (
    <>
    <Navbar1/>
    <Routes>
    <Route path= '/home' element={<Home/>}/>
    </Routes>
    </>
)
}
