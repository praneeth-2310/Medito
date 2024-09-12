import { hover } from "@testing-library/user-event/dist/hover";
import { Container, Row } from "react-bootstrap";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./wm.css"

function Footer(){
    return(
    <div className="Foot">
        <div className="foot d-flex">
            <div className="foot_child"><h4><b>Navigate</b></h4><br></br>
                <ul className="hab">
                    <li><a class = "h" href="main">Main Page</a></li><br></br>
                    <li><p>App</p></li>
                    <li><p>Blog</p></li>
                    <li><p>Resources</p></li>
                    <li><p>About</p></li>
                </ul></div>   
            <div className="foot_child1"><h4><b>The Medito app</b></h4>
            <ul className="hab1">
                <li>Download on the App store</li>
                <li>Download on Google Play</li></ul></div>
            <div className="foot_child2">
                <h4><b>Foundation</b></h4>
                <ul className="hab2">
                    <li>About</li>
                    <li>License</li>
                    <li>Privacy Policy</li>
                    <li>Terms of service</li>
                    <li>Contact</li></ul></div>
        </div>

        <div className="foot1 d-flex">
            <div className="foot_child11">
            <TwitterIcon className="twit"/>
            <FacebookIcon className="face"/>
            <InstagramIcon className="insta"/>
            <LinkedInIcon className="lin"/>
            </div>
            <div className="foot_child12">
                <p>Medito Foundation or in Dutch, Medito Stichting / Stichting Medito
Non-profit organisation registered in the Netherlands 🇳🇱
hello@meditofoundation.org - KvK-nummer: 75284251 - RSIN: 860222627</p>
            </div>
        </div>
        
    </div>);
}
export default Footer;