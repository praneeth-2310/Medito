import { Button, Container, Row } from "react-bootstrap";
import "./wm.css"
import "./App.css"

import eye from './logo5.png'
import man from './logo3.png'
import Footer from './Footer'
import Header from "./header";

function Beginner(){
    return (
        <div>
            <Header></Header> 
        <div className="parent">
           
       <Container className="child">
        <Row><h2 className="child1"><b>Meditation for Sleep</b></h2></Row>
        <Row><p className="child2">These guided sleep meditations will ease you into a peaceful and restful sleep.</p></Row>
        <Row><p className="p_1">Good sleep is a cornerstone of wellbeing, helping us to maintain our physical and mental health.</p></Row>
        <Row><p className="p_1">Getting a good night's sleep on a regular basis has been shown to reduce stress, improve emotional wellbeing, help maintain a healthy weight, enhance cognition and even extend our lives. The list of benefits goes on and on.</p></Row>
        <Row className="page">
            <h3>1. Gradual muscle relaxation</h3>
            <p className="p_1">In this session, we'll gently scan through the body, releasing any tension and preparing for a good night's sleep.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Sleep%201%20-%20Gradual%20muscle%20relaxation%20-%2008_00.mp3" />
            <h3>2. Mindful breathing</h3>
            <p className="p_1">his is a mindful breathing meditation that will help us to relax and unwind, leading to a deeply restful sleep.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Sleep%202%20-%20Mindful%20breathing%20-%2009_00.mp3" />
            <h3>3.Visualisation</h3>
            <p className="p_1">This session uses a visualisation meditation to help us drift off into a deep and peaceful sleep.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Sleep%203%20-%20Visualisation%20-%2008_00.mp3"/>
            <h3>4. Body Scan</h3>
            <p className="p_1">Scanning your body for sensations as you try to fall asleep will help you let go of stressful thoughts. Allow your body to go limp, take a breath and deeply exhale. Notice how relaxed your body feels and enjoy it!</p>
            <audio controls src="Mantra for Sleep://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Beginner%204%20-%20Non%20judgement%20-%2010_00.mp3"/>
            </Row>
        <hr />
        <Row><p className="p_1">For more session lengths, different voice options, unguided meditation timers and to keep track of your progress, you can download the Medito app on the App Store or Google Play. It will be free forever.</p></Row>
       </Container>
        
        <Container className="childs"><Row><p className="p1">Join our newsletter to receive the latest news, articles and wellbeing tips from Medito team & friends.</p></Row>
        <Row><label className="Email"><b>Email Address*</b></label><input type="text" className="input_email"></input></Row>
        <Row><button type="submit" className="Button"><b>Subscribe</b></button></Row></Container>


        <div className = "explore">

<div>
   <img className="man" src={man}></img>
   </div>
<div>
<img className="eye" src={eye}></img>
   </div>

</div>
<div className = "explore">

<div className="exp-mat1">
<h2 className="h3_3"><b>Body Scan Meditation</b></h2>
</div>
<div className="exp-mat2">
<h2 className="h3_3"><b>Body Scan Meditation</b></h2>
</div>

</div>
<div className="d-flex exp-para">
<div>
<p className="p_3">Body scan meditation involves focusing on bodily sensations, gradually and sequentially moving your attention through each part of the body. This type of …</p>
</div>
<div>
<p className="p_3">Body scan meditation involves focusing on bodily sensations, gradually and sequentially moving your attention through each part of the body. This type of …</p>
</div>
</div>



     
        <Footer></Footer>
       </div>
       
   </div> )
}
export default Beginner;