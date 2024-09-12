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
             <Header/>
        <div className="parent">
           
       <Container className="child">
        <Row><h2 className="child1"><b>Beginner Meditation Course</b></h2></Row>
        <Row><p className="child2">if you've had little or no meditation experience, these guided meditations will help you start a regular practice. Each session is about 10 minutes. Together, they will teach you the basics of mindfulness meditation.</p></Row>
        <Row><p className="p_1">ⓘ You can also find these meditations, plus many more, on the free-forever Medito app on the App Store or Google Play.</p></Row>
        <Row className="page">
            <h3>1. Your first session</h3>
            <p className="p_1">This is the first session in the Beginner pack, which will give you an introduction to mindfulness meditation, and will help you to start a regular practice.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Beginner%201%20-%20First%20session%20-%2010_00.mp3" />
            <h3>2. Mindfulness</h3>
            <p className="p_1">Mindfulness is the practice of developing your awareness of the present moment. By consciously noticing our thoughts, feelings and experiences, moment by moment, we can change the way we see ourselves and the world.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Beginner%202%20-%20Mindfulness%20-%2010_00.mp3" />
            <h3>3. Vipassana</h3>
            <p className="p_1">Mindfulness meditation has its roots in the ancient Buddhist tradition of Vipassana, which can be translated roughly as "clear seeing". It uses techniques to develop awareness and clarity in the present moment.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Beginner%203%20-%20Vipassana%20-%2010_00.mp3" />
            <h3>4. Non-judgment</h3>
            <p className="p_1">This session introduces the concept of non-judgment - observing thoughts and feelings as they arise, without judging them. The aim isn't to push thoughts away, or to clear your mind. It is to witness them clearly, without becoming too attached to them.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Beginner%204%20-%20Non%20judgement%20-%2010_00.mp3" />
            <h3>5. Mindful Living</h3>
            <p className="p_1">You can incorporate mindfulness into your daily life, not just into your meditation routine. The key is to become fully aware of your experiences in the present moment. Feel bodily sensations, notice the sounds around you, and observe thoughts and feelings as they come and go.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Beginner%205%20-%20Mindful%20living%20-%2010_00.mp3" />
            <h3>6. Science of meditation</h3>
            <p className="p_1">In this session, we'll consider the science behind meditation. Meditation has been shown to increase brain matter in the hippocampus, improve memory, increase density in the pre-frontal cortex, improve problem solving and regulation of emotions, and shrink the amygdala, reducing anxiety and stress</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Beginner%206%20-%20Science%20of%20meditation%20-%2010_00.mp3" />
            <h3>7. The present moment</h3>
            <p className="p_1">Mindfulness is all about grounding ourselves in the present moment. We tend to live our lives ruminating on the past or planning for the future. When we become aware of our thoughts in the present moment, we can learn to let them go, instead of getting endlessly caught up in them.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Beginner%207%20-%20The%20present%20moment%20-%2010_00.mp3" />
            <h3>8. Negative emotions</h3>
            <p className="p_1">Mindfulness can help us to manage difficult emotions more effectively. By learning to become aware of thoughts and feelings as they arise, we can transform our relationship with negative emotions, allowing us to process them in a healthier way.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Beginner%208%20-%20Negative%20emotions%20-%2010_00.mp3" />
            <h3>9. Sounds</h3>
            <p className="p_1">In this session, instead of using the breath as the point of focus, we will use sounds. Pay close attention to every detail of sounds as they arise. If you get distracted by thinking, just notice the thought and return to a careful, open awareness of the sounds around you.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Beginner%209%20-%20Sounds%20-%2010_00.mp3" />
            <h3>10. Conclusion</h3>
            <p className="p_1">This is the final session in the Medito beginner series. Whether you've completed these sessions in 1 week, 2 weeks or 1 month, the important thing is that you're learning a practice that you'll be able to benefit from for a lifetime.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Beginner%2010%20-%20Conclusion%20-%2010_00.mp3" />
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