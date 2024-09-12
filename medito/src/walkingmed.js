import { Button, Container, Row } from "react-bootstrap";
import Header from "./header";
import './App.css'

function WM(){
    return (
    
        
    
        
        <div className="parent">
           <><Header></Header></>
       <Container className="child">
        <h2 className="child1">Walking Meditation</h2>
        
        <Row><b><p className="child2">You don't have to stay still to meditate.</p></b></Row>
        <Row><p> A walking meditation can be a great way to check in with your mind and body. It allows you to use different sensations as the objects of your meditation, and it's a great way of practicing how to be more mindful in your day-to-day life.</p></Row>
        <Row><p>You can take your walking meditation outside and include sensations of temperature, sounds and sights as the objects of your meditation. Or you could stay inside and experiment with slow movement, allowing you to pay close attention to your body.</p></Row>
        <Row>
            <h3>Walking Inside</h3>
            <p>Walking at an extremely slow pace takes you away from your usual automatic way of moving and allows you to pay closer attention to your body, with a fresh perspective.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Walking%202%20-%20Inside%20-%2012_20.mp3" />
            <h3>Walking Outside</h3>
            <p>A walking meditation can transform a well-known route, as you become more acutely aware of the things around you. This is a great way of practicing how to be more mindful in your day-to-day life.</p>
            <audio controls src="https://meditofoundation.org/assets/mp3/Medito%20-%20Will%20-%20Walking%201%20-%20Outside%20-%2015_20.mp3" />
            </Row>
            
        <hr />
        <Row><p>For more session lengths, different voice options, unguided meditation timers and to keep track of your progress, you can download the
        <a href="https://meditofoundation.org/medito-app">Medito app</a>
        on the
        <a href="https://bit.ly/medito-iOS" rel="noreferrer" target="_blank">App Store</a>
        or
        <a href="https://bit.ly/medito-android" rel="noreferrer" target="_blank">Google Play</a>
        . It will be free forever.
        </p>
        </Row>
        </Container>
        
       </div>
    )
}
export default WM;