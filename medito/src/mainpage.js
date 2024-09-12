import React from 'react'
import a from "./logo1.png"
import b from "./logo2.png"
import c from "./logo3.png"
import d from "./logo4.png"
import e from "./logo5.png"
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Header from './header'
import Footer from './Footer'

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';






function Mainpage() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);


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
       <button  class=" mt-3 p-1 a-button" >Create your Medito account</button>
   </div>
      
           </div>
           

     
       </div>




        </Offcanvas.Body>
      </Offcanvas>
    </>

<Header></Header>
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


         <div class="container1">
          <div class="row1">
          <div class="col1">
<a href='mmm'><img 
 src={b}  ></img></a>
<div className='with'>
<a><h3 onClick={() => setOpen3(!open3)}>Beginner Meditation Course</h3></a> 


</div>





<Collapse in={open3}>
<div id="example-collapse-text">
These guided sleep meditations will ease you into a peaceful and restful sleep. Good sleep is a cornerstone of wellbeing, helping us to maintain our physical …
</div>
</Collapse>

</div>
<div class="col1">
<a href='wlm'><img 
 src={c}  ></img></a>
<div className='with'>
<a><h3 onClick={() => setOpen4(!open4)}>Work Life Meditation Pack</h3></a> 


</div>





<Collapse in={open4}>
<div id="example-collapse-text">
You don't have to stay still to meditate. A walking meditation can be a great way to check in with your mind and body. It allows you to use different …
</div>
</Collapse>

</div>
    </div>
  </div>

  <div class="container1">
          <div class="row1">
          <div class="col1">
                   <a href='mfs'> <img 
                     src={d}  ></img></a>
                    <div className='with'>
                   <a><h3 onClick={() => setOpen(!open)}>Meditation for Sleep  #Free
                    </h3></a> 
                    

                    </div>
                  
                   
        
       
     
      <Collapse in={open}>
        <div id="example-collapse-text">
        These guided sleep meditations will ease you into a peaceful and restful sleep. Good sleep is a cornerstone of wellbeing, helping us to maintain our physical …
        </div>
      </Collapse>

           </div>
           <div class="col1">
<img 
 src={e}  ></img>
<div className='with'>
<a><h3 onClick={() => setOpen2(!open2)}>Body Scan Meditation</h3></a> 


</div>





<Collapse in={open2}>
<div id="example-collapse-text">
Body scan meditation involves focusing on bodily sensations, gradually and sequentially moving your attention through each part of the body. This type of …
</div>
</Collapse>

</div>
    </div>
  </div>

         </div>
        

         <Footer></Footer>  

         </div>
               
             



  );
}

export default Mainpage;