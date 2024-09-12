import React from 'react'
import Header from './header'
import Footer from './Footer'
import m from './medvdo.mp4'
import "./App.css"
import "./vdo.css"
function Replace(){
  window.location.replace('/main')
}

function Homepage() {
  return (
    <div className='App'>
      <Header></Header>
    
    
    <div className = "App">
            
             
            <video className='vdo' autoPlay muted loop>
        <source  src={m} type='video/mp4' />
        </video>

              <div className="main-content">

        

         <h1 className = "title ">Building a more mindful & compassionate world</h1>
         <br></br>
         <br></br>
         <br></br>
           <p ><b>Meditation and mindfulness can greatly improve mental wellbeing and can have a transformative effect on all of us as individuals and on society as a whole.</b> </p>
            <p><b>Help us improve mental wellbeing by ensuring mindfulness and meditation resources are available to everyone, for free.</b></p>
            
         </div>
              
          
      
          
        

         
      
         
              
        
      
        
         </div>
         <div className='bot'>
         <div className="bt-body"><button className = 'btcolor form-control bot1' onClick={()=>{Replace()}}><b>Book Session Now !</b></button></div>
         </div>
         <Footer></Footer>
         </div>
    
  );
}

export default Homepage;