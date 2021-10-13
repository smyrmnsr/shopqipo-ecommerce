import React from "react";
import { Link } from 'react-router-dom';




const Footer = (props) => {
    return (
    
        <div className='main'>
            <footer>
                <div className='row'>
                    <div className='col'>
                        <p className='logo'>shopqipo</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit purus curae, cursus conubia diam torquent blandit sociis mattis integer himenaeos, scelerisque lacinia libero sapien</p>
                    </div>
                    <div className='col'>
                        <h2>Office <div className="underline"><span></span></div></h2>
                        <p>Avensis Office Park</p>
                        <p>Ferdinand Boulevard 12</p>
                        <p>Bucharest, 301356, Romania</p>
                        <p className="email-id">contact@shopqipo.com</p>
                        <h3>+40 - 0123456788</h3>
                    </div>
                    <div className='col'>
                        <h2>Links <div className="underline"><span></span></div></h2>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Contacts</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h2>Newsletter <div className="underline"><span></span></div></h2>
                        <form>
                            <i className="far fa-envelope"></i>
                            <input type='email' placeholder='Please enter your email' required></input>
                            <button type='submit'><i className="fas fa-arrow-right"></i></button>
                        </form>   
                        <div className='social-icons'>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </div>        
                </div>
                <hr/>
                <p className='copyright'>shopqipo @ 2021 - All Rights Reserved</p>        
            </footer>
        </div>

    );
};

export default Footer;
