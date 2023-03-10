import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <>
            <footer>
                <hr/><hr/>
                <p id="footText">&copy; Developer cm</p>
                <div id="footMain">
                    <div class="footDiv">
                        <p>Contact Us</p>
                        <p>About Us</p>
                    </div>
                    <div class="footDiv">
                        <p>Contact Us</p>
                        <p>About Us</p>
                    </div>
                    <div class="footDiv noBorder">
                        <p>Contact Us</p>
                        <p>About Us</p>
                    </div>
                </div>
                <hr/>
                <div class="social">
                    <a href="www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/wyH9JxS/facebook.png" alt="fb" class="socialIcon"/>
                    </a>
                    <a href="www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/w0kZ5Hf/insta.png" alt="fb" class="socialIcon"/>
                    </a>
                    <a href="www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/wyH9JxS/facebook.png" alt="fb" class="socialIcon"/>
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer