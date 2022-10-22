import React from 'react';
import Banner from "../CommonComponent/Banner";
import MainHeading from "../CommonComponent/MainHeading";
import ExpertTeam from "./CommonAboutUs/ExpertTeam";
import PricingPlan from "./CommonAboutUs/PricingPlan";
import WorkingProcess from "./CommonAboutUs/WorkingProcess";
import Expertbg from "../../images/expertbg.jpg";
import Expert1 from "../../images/expert1.jpg";
import Expert2 from "../../images/expert2.jpg";
import Expert3 from "../../images/expert3.jpg";
import Facebook48 from "../../images/facebook48.png";
import Twitter48 from "../../images/twitter48.png";
import Insta48 from "../../images/insta48.png";
import Process1 from "../../images/process1.jpeg";
import Process2 from "../../images/process2.jpeg";
import Process3 from "../../images/process3.jpg";
import Process4 from "../../images/process4.jpg";
import Price1 from "../../images/price1.png";
import Price3 from "../../images/price3.png";
import Price4 from "../../images/price4.png";

const About = () => {
  return (
    <>
      <div id='Aboutuspage'>
        <Banner 
          heading1= "This is About us page which tell you about the site and our work."
        />
        
        <MainHeading 
          heading ="About Us Detail"
          subheading = "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />

        <div className='aboutdetailpage'>
            <section className='section_wrap text-bg-primary'>
                <div className='container'>              
                    <div className='expertteam text-white'>
                    <div className='main_heading text-center mb-5'>
                        <h1 className='heading text-capitalize'>Expert It Consultant</h1>
                    </div>
                        <div className='row'>
                          <ExpertTeam 
                            Expert ={Expert1}
                            name = "Lisa Thakkar"
                            designation ="co-owner"
                            Facebook48 ={Facebook48}
                            Twitter48 ={Twitter48}
                            Insta48 ={Insta48}
                          />
                          <ExpertTeam 
                            Expert ={Expert2}
                            name = "Pankaj Pant"
                            designation ="Director"
                            Facebook48 ={Facebook48}
                            Twitter48 ={Twitter48}
                            Insta48 ={Insta48}
                          />
                          <ExpertTeam 
                            Expert ={Expert3}
                            name = "Serena Williamson"
                            designation ="specialist"
                            Facebook48 ={Facebook48}
                            Twitter48 ={Twitter48}
                            Insta48 ={Insta48}
                          />
                        </div>
                      </div>
                </div>  
            </section> 
            <section className='section_wrap'>
                <div className='container'>              
                    <div className='expertteam'>
                    <div className='main_heading text-center mb-5'>
                        <h1 className='heading text-capitalize'>Our Working Process</h1>
                    </div>
                        <div className='row'>
                          <WorkingProcess 
                            Process ={Process1}
                            name ="Discovery"
                          />
                          <WorkingProcess 
                            Process ={Process2}
                            name ="Planning"
                          />
                          <WorkingProcess 
                            Process ={Process3}
                            name ="Discount"
                          />
                          <WorkingProcess 
                            Process ={Process4}
                            name ="deliver"
                          />
                          
                        </div>
                      </div>
                </div>  
            </section>  
            <section className='price_section'>
              <div className='container'>              
                <div className='expertteam'>
                  <div className='main_heading text-center mb-5'>
                      <h1 className='heading text-capitalize'>Our Pricing Plan</h1>
                  </div>
                  <div className='row'>
                    <PricingPlan 
                      PackageName = "package"
                      Price = {Price1}
                      priceno = "29.99"
                      li1 ="Free Help Desk"
                      li2 ="24*7 services"
                      li3 ="Free Home Delivery"
                      li4 ="Discount Available"
                      li5 ="Free Supprot"
                      li6 ="Free Ticket Raise Facilty"
                    />
                    <PricingPlan 
                      PackageName = "package"
                      Price = {Price3}
                      priceno = "33.99"
                      li1 ="Free Help Desk"
                      li2 ="24*7 services"
                      li3 ="Free Home Delivery"
                      li4 ="Discount Available"
                      li5 ="Free Supprot"
                      li6 ="Free Ticket Raise Facilty"
                    />
                    <PricingPlan 
                      PackageName = "package"
                      Price = {Price4}
                      priceno = "79.99"
                      li1 ="Free Help Desk"
                      li2 ="24*7 services"
                      li3 ="Free Home Delivery"
                      li4 ="Discount Available"
                      li5 ="Free Supprot"
                      li6 ="Free Ticket Raise Facilty"
                    />
                    
                  </div>
                </div>
              </div>  
            </section>          
          </div>
      </div>
    </>
  )
}

export default About;
