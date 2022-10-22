import React from 'react';
import Banner from "../CommonComponent/Banner";
import FeatureAction from "./CommonServices/FeatureAction";
import BeatPlanning from "./CommonServices/BeatPlanning";
import Reviews from "./CommonServices/Reviews";
import Feature1 from "../../images/feature1.png";
import Feature2 from "../../images/feature2.png";
import Feature3 from "../../images/feature3.png";
import Feature4 from "../../images/feature4.png";
import Avatar from "../../images/avatar.jpg";
import Womenavatar from "../../images/womenavtar.jpg";
import { AiOutlineArrowRight } from 'react-icons/ai';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const Action = () => {

  const options = {
    loop: true,
      margin: 0,  
      className:"owl-theme",
      dots: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      margin:8,
      responsive: {
          0: {
              items: 1.3,
              center: true,
          },
          767: {
              items: 2,
              center: false,
              dots: true,
          },
          992: {
              items: 3,
              dots: true,
          }
      }
};


  return (
    <>
      <div id='serviceactionspage'>
        <Banner 
          heading1= "This is Service Action page which tell you about the Service Action site and our work."
        />
        <section className='best_feature my-4 mt-5'>
                <div className='container'>              
                    <div className='bestfeatures_wrap'>
                      <div className='main_heading text-center mb-3'>
                          <h1 className='heading text-capitalize'>We Provide best features for customer</h1>
                      </div>
                        <div className='row'>
                          <FeatureAction 
                            Feature = {Feature1}
                            name ="Clean Code"
                            description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            icons= {<AiOutlineArrowRight />}
                          />
                          <FeatureAction 
                            Feature = {Feature2}
                            name ="Data Analytic"
                            description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            icons= {<AiOutlineArrowRight />}
                          />
                          <FeatureAction 
                            Feature = {Feature3}
                            name ="Fully Secured"
                            description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            icons= {<AiOutlineArrowRight />}
                          />
                          <FeatureAction 
                            Feature = {Feature4}
                            name ="24/7 Support"
                            description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            icons= {<AiOutlineArrowRight />}
                          />
                          
                        </div>
                      </div>
                </div>  
        </section> 
        <section className='best_feature my-2'>
                <div className='container'>              
                    <div className='bestfeatures_wrap'>
                      <div className='main_heading text-center mb-3'>
                          <h1 className='heading text-capitalize'>Choose your best planning price</h1>
                      </div>
                        <div className='row'>
                        <BeatPlanning 
                          standard ="Start-up"
                          pricecount="30"
                          li1="Easy Customizable"
                          li2="Commercia Licence"
                          li3="Single User Licence"
                          li4="Hotline Support 24/7"
                        />
                        <BeatPlanning 
                          standard ="Classic"
                          pricecount="49"
                          li1="Easy Customizable"
                          li2="Commercia Licence"
                          li3="Single User Licence"
                          li4="Hotline Support 24/7"
                        />
                        <BeatPlanning 
                          standard ="Premium"
                          pricecount="79"
                          li1="Easy Customizable"
                          li2="Commercia Licence"
                          li3="Single User Licence"
                          li4="Hotline Support 24/7"
                        />
                          
                        </div>
                      </div>
                </div>  
        </section> 
        <section className='best_feature my-4 mb-5'>
                <div className='container'>              
                    <div className='bestfeatures_wrap'>
                      <div className='main_heading text-center mb-5'>
                          <h1 className='heading text-capitalize'>Let's see our user's review</h1>
                          <p className='subheading'>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                Ipsum has been the industry's standard dummy text.</p>
                      </div>
                        <div className='row'>
                           <OwlCarousel
                              {...options}
                              >  

                              <Reviews 
                                description = "It has roots in a piece of classical Latin literature from 45 BC, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."
                                profilepic = {Avatar}
                                name = "ryan press"
                                designation = "marketing Manager"
                              />
                              <Reviews 
                                description = "It has roots in a piece of classical Latin literature from 45 BC, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."
                                profilepic = {Womenavatar}
                                name = "james Williamson"
                                designation = "Sales manager"
                              />
                              <Reviews 
                                description = "It has roots in a piece of classical Latin literature from 45 BC, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."
                                profilepic = {Avatar}
                                name = "Sandeep yadav"
                                designation = "Founder"
                              />
                              
                          </OwlCarousel>  
                        </div>
                      </div>
                </div>  
        </section>  
      </div>
    </>
  )
}

export default Action;
