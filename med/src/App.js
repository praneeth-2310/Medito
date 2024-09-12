import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './login'
import Home from './homepage'
import Create from './createacc'
import Mainp from './mainpage'
import Payments from "./payments";
import WM from "./WM";
function Main(){
    return(
        
        
        
        <BrowserRouter>
        <Routes>
            <Route path = "/login" element = {<Login/>}></Route>
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/createacc" element = {<Create/>}></Route>
            <Route path = "/main" element = {<Mainp/>}></Route>
            <Route path="/payments" element={<Payments />}></Route>
            <Route path="/WM" element={<WM />}></Route>
        </Routes>
        </BrowserRouter>
        
    );
}

export default Main;