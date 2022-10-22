import React from 'react';
import { NavLink } from 'react-router-dom';
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/insta.jpg";
import Linkdin from "../../images/linkdin.jpg";
import Twitter from "../../images/twitter.jpg";

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-3">
                        <div className='footer_logo'>
                        <NavLink to="/" className="navbar-brand" >88ACADEMICS</NavLink>
                        </div>
                        <div className='footer_description'>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='footer_heading'>
                            <h5>Usefull Link</h5>
                        </div>
                        <div className='footer_list'>
                            <ul style={{listStyle: "none", paddingLeft: "0px"}}>
                                <li><NavLink exact to="/"><i class="fa-solid fa-chevron-right footericon"></i>Home</NavLink></li>
                                <li><NavLink exact to="/about"><i class="fa-solid fa-chevron-right footericon"></i>About</NavLink></li>
                                <li><NavLink exact to="/services"><i class="fa-solid fa-chevron-right footericon"></i>Service</NavLink></li>
                                <li><NavLink exact to="/portfolio"><i class="fa-solid fa-chevron-right footericon"></i>Portfolio</NavLink></li>
                                <li><NavLink exact to="/blog"><i class="fa-solid fa-chevron-right footericon"></i>Blog</NavLink></li>
                                <li><NavLink exact to="/terms&condition"><i class="fa-solid fa-chevron-right footericon"></i>Terms & Conditions</NavLink></li>
                                <li><NavLink exact to="/contact" ><i class="fa-solid fa-chevron-right footericon"></i>Contact Us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='footer_heading'>
                            <h5>Our Services</h5>
                        </div>
                        <div className='footer_list'>
                            <ul  style={{listStyle: "none", paddingLeft: "0px"}}>
                                <li><NavLink exact to="/web"><i class="fa-solid fa-chevron-right footericon"></i>Web Designing</NavLink></li>
                                <li><NavLink exact to="/designing"><i class="fa-solid fa-chevron-right footericon"></i>Designing</NavLink></li>
                                <li><NavLink exact to="/digital"><i class="fa-solid fa-chevron-right footericon"></i>Digital Marketing</NavLink></li>
                                <li><NavLink exact to="/graphics"><i class="fa-solid fa-chevron-right footericon"></i>Graphic Designing</NavLink></li>
                                <li><NavLink exact to="/product" ><i class="fa-solid fa-chevron-right footericon"></i>Product Management</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='footer_heading'>
                            <h5>Get In Touch</h5>
                        </div>
                        <div className='footer_content'>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                            <div className='newsletter'>
                                <form>
                                    <input type="text" placeholder='Enter your email' className='form-control'/>
                                    <button type='submit' className='btn btn-danger btnsandes' >Subscribe</button>
                                </form>
                            </div>
                            {/* <div className='social_media'>
                                
                                <a href='https://www.facebook.com/' ></a>
                            </div> */}
                            <ul className="social-menu">
                                <li><a href="https://www.facebook.com/" target="blank" alt="facebook"><img src={Facebook} className='img-fluid ' alt='social media icon' /></a></li>
                                <li><a href="https://twitter.com/" target="blank" alt="twitter"><img src={Twitter} className='img-fluid ' alt='social media icon' /></a></li>
                                <li><a href="https://www.instagram.com/" target="blank" alt="instagram"><img src={Instagram} className='img-fluid ' alt='social media icon' /></a></li>
                                <li><a href="https://www.linkedin.com/" target="blank" alt="linkedin"><img src={Linkdin} className='img-fluid ' alt='social media icon' /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
