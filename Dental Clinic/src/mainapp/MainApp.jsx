import { Route, Routes } from "react-router-dom"
import { Home } from "../layout/home/Home"



export const MainApp = () => {
return (
    <>
    <Routes>
    <Route path= '/home' element={<Home/>}/>
    </Routes>
    </>
)
}
