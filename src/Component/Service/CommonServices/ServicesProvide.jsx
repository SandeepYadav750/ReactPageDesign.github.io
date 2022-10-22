import React from 'react';
import Webdesign from "../../../images/webdesign.png";
import Webdevlop from "../../../images/webdevlop.jpg";
import Digital from "../../../images/digital.jpeg";
import Graphic from "../../../images/graphic.jpeg";
import Product from "../../../images/product.jpeg";
import Networking from "../../../images/networking.jpg";

const ServicesProvide = () => {
  return (
    <>
      <div className='service_provider my-5'>
        <div className='container'>
            <div className='row gy-4'>
                <div className='col-sm-4'>
                    <div className='servicecard'>
                        <img src={Webdesign} class="img-fluid" alt='serviceprovider' />
                        <div className='servicecardtext'>
                            <h4>Web Designing</h4>
                            <ul>
                                <li>Be your own critique</li>
                                <li>Draw inspiration</li>
                                <li>Mobile Friendly</li>
                                <li>Need some white space</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='servicecard'>
                        <img src={Graphic} class="img-fluid" alt='serviceprovider' />
                        <div className='servicecardtext'>
                            <h4>Graphic Designing</h4>
                            <ul>
                                <li>White Space</li>
                                <li>Contrast</li>
                                <li>Repetition</li>
                                <li>Alignment</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='servicecard'>
                        <img src={Webdevlop} class="img-fluid" alt='serviceprovider' />
                        <div className='servicecardtext'>
                            <h4>Web Development</h4>
                            <ul>
                                <li>Client Side Coding</li>
                                <li>Server Side Coding</li>
                                <li>Client+Server Side Coding</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='servicecard'>
                        <img src={Digital} class="img-fluid" alt='serviceprovider' />
                        <div className='servicecardtext'>
                            <h4>Digital Marketing</h4>
                            <ul>
                                <li>Focus on Digital Marketing Analytics</li>
                                <li>Content Planning</li>
                                <li>Strong Paid Media capabilities</li>
                                <li>Social Media Marketing strength</li>
                                <li>Audience Building</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='servicecard'>
                        <img src={Networking} class="img-fluid" alt='serviceprovider' />
                        <div className='servicecardtext'>
                            <h4>Network Marketing</h4>
                            <ul>
                                <li>Be Serious</li>
                                <li>Use Social Media</li>
                                <li>Invest in a Mentor</li>
                                <li>Use Automation Tools</li>
                                <li>Do Your Research</li>
                                <li>Prepare to Sponsor</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='servicecard'>
                        <img src={Product} class="img-fluid" alt='serviceprovider' />
                        <div className='servicecardtext'>
                            <h4>Product Manager</h4>
                            <ul>
                                <li>Talent for A/B testing</li>
                                <li>Knack for coding</li>
                                <li>Great written communication skills</li>
                                <li>Diplomacy</li>
                                <li>Persuasion</li>
                                <li>Delegation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default ServicesProvide;
