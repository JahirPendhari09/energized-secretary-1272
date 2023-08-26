import {Routes,Route} from "react-router-dom"
import { Home } from "../Pages/Home"
import { Login} from "../Pages/Login"
import { SignUp } from "../Pages/SignUp"
import { AddCard } from "../Pages/AddCard"
import { DashBoard } from "../Pages/DashBoard"
import { PrivateRouter } from "../ContexProvider/PrivateRouter"
const AllRoutes=()=>{
    return <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/add" element={<AddCard/>}/>
        <Route path="/dashboard" element={<PrivateRouter><DashBoard/></PrivateRouter>}/>
      </Routes>
    </>
}

export default AllRoutes