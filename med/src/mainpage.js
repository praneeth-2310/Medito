import React from 'react'
import a from "./logo1.png"
import b from "./logo2.png"
import c from "./logo3.png"
import d from "./logo4.png"
import e from "./logo5.png"
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Spinner from 'react-bootstrap/Spinner';
import Header from './Header'
import Collapse from 'react-bootstrap/Collapse';
import { Fade } from 'react-bootstrap'

function Replace3(){
  window.location.replace('/createacc')
}
function Replace4(){
  window.location.replace('/WM')
}
function Mainpage() {
  const [show, setShow] = useState(false);
  const [open1,setOpen1]=useState(false)
  const [open2,setOpen2]=useState(false)
  const [open3,setOpen3]=useState(false)
  const [open,setOpen]=useState(false)



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
<div>
  
      
<>
      
   
      
      

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Login</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
                

        <div class="bg-color lp">
   
   <div  class="align-items-center login-page">
       <div class="box-width mx-auto in-box p-4 ">
       
         <b>  <h1>
               Sign in
           </h1></b>
           <h6 class="mt-3 a-text-bold">Email or mobile phone number</h6>
           <div class = "w-auto" >
           <input   class="w-100 form-control" placeholder="" ></input>
           <h6 class="mt-3 a-text-bold">Password</h6>
           <input   class="w-100 form-control" placeholder="" ></input>
       </div>
           
           <div class="d-flex justify-content-center w-100">
           <button   class=" form-control btcolor mt-3 w-100 p-1 " type="submit">Continue</button>
       </div>
       <p class="para mt-3">By continuing, you agree to Medito's Conditions of Use and Privacy Notice.</p>
             
       </div>

       <div class="w-100"> <div class="mx">New to Medito?</div>
   </div>
   <div class="d-flex justify-content-center w-100 ">
       <button  class=" mt-3 p-1 a-button" onClick={()=>Replace3()} >Create your Medito account</button>
   </div>
      
           </div>
           

     
       </div>




        </Offcanvas.Body>
      </Offcanvas>
    </>

<div class="navbar-light">
  <Header></Header>
</div>
    <div className = "App bgcol">
            
            
         <div className="meditation">
         <h1 className = "med">Meditations</h1>
            <h2 className='colo'>Here you can find some of our meditations to help you learn how to meditate or deepen your practice.</h2>
            <a onClick={handleShow}> <h2 className='log'>Login Now & Get Our Courses</h2></a>

         </div>


         </div>


         <div>

           <div>
            <h3 className='course'>OUR COURSES</h3>
           </div>


           <div className="container1">
        <div className="row1">
          <div className="col1">
            <img 
              src={b}  
              onMouseEnter={() => setOpen(!open)}
              onMouseLeave={() => setOpen(!open)}
              aria-controls="example-fade-text"
              aria-expanded={open}
            />
            <Fade in={open}>
              <div className="with" id="example-fade-text">
                <h3>Meditation for Sleep</h3>
                <p>These guided sleep meditations will ease you into a peaceful and restful sleep. Good sleep is a cornerstone of wellbeing, helping us to maintain our physical …</p>
              </div>
            </Fade>
          </div>
          <div className="col1" onClick={()=>Replace4()}>
            <img 
              src={c}  
              onMouseEnter={() => setOpen1(!open1)} 
              onMouseLeave={() => setOpen1(!open1)} 
              aria-controls="example-fade1-text" 
              aria-expanded={open1}
            />
            <Fade in={open1}>
              <div className="with" id="example-fade1-text">
                <h3>Walking Meditation</h3>
                <p>You don't have to stay still to meditate. A walking meditation can be a great way to check in with your mind and body. It allows you to use different …</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="container1">
        <div className="row1">
          <div className="col1">
            <img 
              src={d}  
              onMouseEnter={() => setOpen2(!open2)}
              onMouseLeave={() => setOpen2(!open2)}
              aria-controls="example-fade2-text"
              aria-expanded={open2}
            />
            <Fade in={open2}>
              <div className="with" id="example-fade2-text">
                <h3>Meditation for Stress & Anxiety</h3>
                <p>This pack is designed to help you manage stress and anxiety. Mindfulness meditation can help us deal with these negative emotions by transforming the way we …</p>
              </div>
            </Fade>
          </div>
          <div className="col1" >
            <img 
              src={e}  
              onMouseEnter={() => setOpen3(!open3)}
              onMouseLeave={() => setOpen3(!open3)}
              aria-controls="example-fade3-text"
              aria-expanded={open3}
            />
            <Fade in={open3}>
              <div className="with" id="example-fade3-text">
                <h3>Body Scan Meditation</h3>
                <p>Body scan meditation involves focusing on bodily sensations, gradually and sequentially moving your attention through each part of the body. This type of …</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>

         </div>

         </div>
  );
}

export default Mainpage;