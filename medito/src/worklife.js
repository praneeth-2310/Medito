import { Button, Container, Row } from "react-bootstrap";
import "./wm.css"
import "./App.css"

import eye from './logo5.png'
import man from './logo3.png'
import Footer from './Footer'
import Header from "./header";
function WM(){
    return (
    
        
    
        
        <div className="parent">
           <><Header></Header></>
       <Container className="child">
        <h2 className="child1">Work Life Meditation Pack</h2>
        
        <Row><p className="child2">Meditation and mindfulness can have a transformative effect on all aspects of our lives. This pack is specifically designed to help you lead a happier, healthier work life. It covers topics such as managing conflict, improving productivity, and maintaining focus.</p></Row>
       
        <Row>
            <h3>1.Managing Conflict</h3>
            <p className="p_1">It's almost inevitable that most of us, at some point in our work lives, will encounter some kind of conflict. This session will explore how mindfulness meditation can help us deal it.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Work%20Life%201%20-%20Managing%20Conflict%20-%2011_00.mp3" />
            <h3>2.Managing Stress</h3>
            <p className="p_1">In this session, we'll consider the impact of mindfulness on stress. Meditation can have the immediate benefit of helping you relax by calming the initial stress response, but it can also have a long-lasting effect.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Work%20Life%202%20-%20Managing%20Stress%20-%2011_00.mp3" />
            <h3>3.Productivity</h3>
            <p className="p_1">Mindfulness meditation helps us to become more present in our day-to-day lives and this transfers very well to maintaining a mindful awareness on our work.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Work%20Life%203%20-%20Productivity%20-%2010_30.mp3" />
            <h3>4.Confidence</h3>
            <p className="p_1">Self confidence is important in all aspects of our lives. This meditation will explore on how mindfulness can help you recognise fear and self-doubt as they arise and instead stay focused on the present moment..</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Work%20Life%203%20-%20Productivity%20-%2010_30.mp3" />
            <h3>5.Creativity</h3>
            <p className="p_1">In this meditation, we'll think about the positive affect that mindfulness meditation can have on creativity</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Work%20Life%205%20-%20Creativity%20-%2010_30.mp3" />
            <h3>6.Focus</h3>
            <p className="p_1">It can be difficult for a lot of people to remain focused on their work for long periods of time, especially if the task at hand isn't so interesting. Mindfulness meditation is a way of training yourself to maintain your focus.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Work%20Life%206%20-%20Focus%20-%2010_30.mp3" />
            <h3>7.Work-life balance</h3>
            <p className="p_1">Having a good work / home life balance is extremely important for our mental health. In this session, we'll explore several ways that mindfulness meditation can help us with this.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Work%20Life%207%20-%20Work-Life%20Balance%20-%2011_00.mp3" />
            <h3>8.Motivation</h3>
            <p className="p_1">Introducing mindfulness into our work can make us more engaged in what we're doing and reinvigorate our interest. We can think of work as the object of our meditation, paying close attention to every aspect of it.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Work%20Life%208%20-%20Motivation%20-%2010_30.mp3" />
            <h3>9.Dealing with change</h3>
            <p className="p_1">In our work-lives, things will inevitably change. People come and go, processes evolve, technology develops. This can be daunting, but mindfulness can help us to deal with change and the emotions that it brings out in us.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Work%20Life%209%20-%20Dealing%20with%20Change%20-%2010_00.mp3" />
            <h3>10.Prioritization</h3>
            <p className="p_1">In this session, we'll practice using the 'labelling' technique during meditation, to help us learn to focus on the important things.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Work%20Life%2010%20-%20Prioritization%20-%2010_30.mp3" />
            <hr></hr>
        
            </Row>
            
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
       </div>)
}
export default WM;