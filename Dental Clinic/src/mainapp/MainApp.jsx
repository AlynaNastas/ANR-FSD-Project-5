import { Route, Routes } from "react-router-dom"
import { Home } from "../layout/home/Home"
import { Login } from "../layout/login/Login"



export const MainApp = () => {
return (
    <>
    <Routes>
    <Route path= '/home' element={<Home/>}/>
    <Route path= '/' element={<Login/>}/>
    </Routes>
    </>
)
}
