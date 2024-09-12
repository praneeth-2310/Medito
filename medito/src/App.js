import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './login'
import Home from './homepage'
import Create from './createacc'
import Mainp from './mainpage'
import Wm from './walkingmed'
import Mm from './Beginner'
import Mf from './medforsleep'
import Wl from './worklife'
function Main(){
    return(
        
        
        
        <BrowserRouter>
        <Routes>
            <Route path = "/login" element = {<Login/>}></Route>
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/creacc" element = {<Create/>}></Route>
            <Route path = "/main" element = {<Mainp/>}></Route>
            <Route path = "/wm" element = {<Wm/>}></Route>
            <Route path = "/mmm" element = {<Mm/>}></Route>
            <Route path = "/mfs" element = {<Mf/>}></Route>
            <Route path = "/wlm" element = {<Wl/>}></Route>
        </Routes>
        </BrowserRouter>
        
    );
}

export default Main;