import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useFormik } from 'formik';
import {SignUpSchema} from './Validation';
import Banner from "../CommonComponent/Banner";
import MainHeading from "../CommonComponent/MainHeading";
import thumupbusi from "../../images/thumupbusi.jpg";
import Busiwithlapy from "../../images/busiwithlapy.jpg";
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/insta.jpg";
import Twitter from "../../images/twitter.jpg";
import Team1 from "../../images/team1.jpg";
import Team2 from "../../images/team2.jpg";
import Team3 from "../../images/team3.jpg";
import Team4 from "../../images/team4.jpg";
import Team5 from "../../images/team5.jpg";
import Team6 from "../../images/team6.jpg";

const initialValues = {
  Fullname:'',
  Email:'',
  Number:'',
  Message:''
}

const LandingPage = () => {
  

//note
  // const [value, setValue] = useState("");
  // const getValue = (value) => {
  //   setValue(value);
  // };

const {values, errors,touched, handleBlur, handleChange, handleSubmit} = useFormik({
  initialValues: initialValues,
  validationSchema:SignUpSchema,
  onSubmit:(values) => {
    console.log(values);

  },
});

// const Formik = () => useFormik({
//   initialValues: {
//     Fullname:'',
//     Email:'',
//     Number:'',
//     Message:''
//   },
//   onSubmit: (values) => {
//     console.log(JSON.stringify(values));
//   },
// })

  return (
    <>
      <div id='home_service'>
      <Banner 
          heading1= "This is Landing page which tell you about the site and our work."
        />

        <MainHeading 
          heading ="Landing Detail"
          subheading = "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        
        <div className='body_content'>
          <div className='container'>
              <div className='row'>                 
                  <Tabs>
                  <div className='d-flex flex-column sidebarcol'>

                    <TabList>
                      <Tab>
                      <div className='sidecolumn1'>
                        <p>Web Designing</p>
                        <span><i className="fa-solid fa-chevron-right"></i></span>
                      </div>
                      </Tab>
                      <Tab>
                      <div className='sidecolumn1'>
                        <p>Network Marketing</p>
                        <span><i className="fa-solid fa-chevron-right"></i></span>
                      </div>
                      </Tab>
                      <Tab>
                      <div className='sidecolumn1'>
                        <p>Digital Marketing</p>
                        <span><i className="fa-solid fa-chevron-right"></i></span>
                      </div>
                      </Tab>
                      <Tab>
                      <div className='sidecolumn1'>
                        <p>Web Development</p>
                        <span><i className="fa-solid fa-chevron-right"></i></span>
                      </div>
                      </Tab>
                      <Tab>
                      <div className='sidecolumn1'>
                        <p>Content Writing</p>
                        <span><i className="fa-solid fa-chevron-right"></i></span>
                      </div>
                      </Tab>
                      
                    </TabList>

                    <TabList>
                      <div className='sidebar_2 text-dark'>
                        <div className='sideheading'>
                          <h5>About Us</h5>
                        </div>  
                        <div className='sidecard'>
                            <img src={thumupbusi} alt="about us" className=" img-fluid "/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                            has been the industry's standard dummy text</p>
                        </div>                        
                      </div>
                    </TabList>

                    <TabList>
                      <div className='sidebar_2 sidebar_3 text-dark'>
                        <div className='sideheading'>
                          <h5>Brouchers</h5>
                        </div>  
                        <div className='side_brouders'>
                            <div className='side_broucher'>
                                <p>Download.pdf</p>
                            </div>
                            <div className='side_broucher'>
                                <p>Our Iso Certificate</p>
                            </div>
                            <div className='side_broucher'>
                                <p>Download.Text</p>
                            </div>
                        </div>                        
                      </div>
                    </TabList>

                  </div>
        
        <TabPanel>
          <div className="panel-content">
            <div className='content_start'>
              <div className='content_heading'>
                <h2 className='heading' >Web Designing</h2>
                <p className='sub-heading' >Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.</p>
              </div> 
              <div className='content_body'>
                  <div className='row sanrowalign'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <img src={Busiwithlapy} className="img-fluid" alt='content_body ' />
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='content_listing'>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                Ipsum has been the industry's standard dummy</p>
                            <ul style={{margin: "6px 0",listStyle:"none",paddingLeft: "10px"}}>
                              <li><span><i className="fa-solid fa-check righttick"></i></span>Rich India</li>
                              <li><span><i className="fa-solid fa-check righttick"></i></span>Design</li>
                              <li><span><i className="fa-solid fa-check righttick"></i></span>Prototype</li>
                              <li><span><i className="fa-solid fa-check righttick"></i></span>Technical Requirement</li>
                              <li><span><i className="fa-solid fa-check righttick"></i></span>Rich Media Banner</li>
                              <li><span><i className="fa-solid fa-check righttick"></i></span>Excelent Performance</li>
                              <li><span><i className="fa-solid fa-check righttick"></i></span>Project Management</li>
                              <li><span><i className="fa-solid fa-check righttick"></i></span>Front End Developer</li>
                            </ul>
                        </div>
                    </div>
                  </div>                  
              </div> 
              <div className='content_descreptions'>
                <h3 className='heading' >More Services & Benefits</h3>
                <p className='sub-heading' >Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.</p>
                <ul style={{listStyle:"none",paddingLeft: "10px"}}>
                  <li><span><i className="fa-solid fa-check righttick"></i></span>Technical Requirement</li>
                  <li><span><i className="fa-solid fa-check righttick"></i></span>Rich Media Banner</li>
                  <li><span><i className="fa-solid fa-check righttick"></i></span>Excelent Performance</li>
                </ul>
                <p className='sub-heading' >Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                    Ipsum has been the industry's standard dummy text ever since.</p>
              </div>  
                {/* faq start */}
                <div className='content_faq'>
                  <h3 className='heading' >FAQ's</h3>
                </div>
                  <div className="panel-group sanmargt" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         When do I need an web designer
                        </a>
                      </h4>
                      </div>
                      <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div className="panel-body">
                                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                Ipsum has been the industry's standard dummyLorem Ipsum is simply dummydard dummy.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Why do you have a design fee and purchasing fee on the product.
                        </a>
                      </h4>
                      </div>
                      <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div className="panel-body">
                                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                Ipsum has been the industry's standard dummyLorem Ipsum is simply dummydard dummy.
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingThree">
                        <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          What type of system do you support
                        </a>
                      </h4>
                      </div>
                      <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div className="panel-body">
                                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                Ipsum has been the industry's standard dummyLorem Ipsum is simply dummydard dummy.
                        </div>
                      </div>
                    </div>
                  </div>
                {/* faq end */} 
                <div className='contact_form'>
                  <div className='content_heading'>
                    <h3 className='heading' >Contact us via below form for more info</h3>
                  </div>  
                  <div className='form_field'>
                    <form onSubmit={handleSubmit}>
                      <div className='form_field_wrap'>
                        <div className='row'>
                            <div className="form-group col-md-4 mb-4 mt-2 position-relative">
                              <input type="text" className="form-control" name="Fullname" values={values.Fullname} onChange={handleChange} onBlur={handleBlur}  placeholder="Name*" />
                              { errors.Fullname && touched.Fullname ? (<p className='errorfield'>{errors.Fullname}</p>) : null }
                            </div>
                            <div className="form-group col-md-4 mb-4 mt-2 position-relative">
                              <input type="text" className="form-control" name="Email"  values={values.Email} onChange={handleChange} onBlur={handleBlur}  placeholder="Email*" />
                              { errors.Email && touched.Email ? (<p className='errorfield'>{errors.Email}</p>) : null }
                            </div>
                            <div className="form-group col-md-4 mb-4 mt-2 position-relative">
                              <input type="text" className="form-control" name="Number" values={values.Number} onChange={handleChange} onBlur={handleBlur}  placeholder="Number*" />
                              { errors.Number && touched.Number ? (<p className='errorfield'>{errors.Number}</p>) : null }
                            </div>
                            <div className="form-group col-md-12 mb-4 mt-2 position-relative">
                              <textarea className="form-control" name="Message"  rows="4" values={values.Message} onChange={handleChange} onBlur={handleBlur}  placeholder="Message*" ></textarea>
                              { errors.Message && touched.Message ? (<p className='errorfield'>{errors.Message}</p>) : null }
                            </div>
                        </div>
                        <button type='submit' className='btn btn-danger w-50 my-3'>SUBMIT MESSAGE</button>

                      </div>
                    </form>                          
                  </div>
                </div>
                        
            </div>                
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 2</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 3</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 4</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 5</h2>
          </div>
        </TabPanel>
                  </Tabs>
              </div>
          </div>            
        </div>

        <div className='ourteam'>
          <div className='container'>
            <div className='main_heading text-center my-5 mx-3'>
                <h1 className='heading text-uppercase'>Our Team</h1>
                <p className='subheading'>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.</p>
            </div>  
            <div className='ourteamcards my-5'>
              <div className='row g-2'>
                <div className='col-lg-4 col-md-6'>
                <div className="card">
                  <img className="card-img" src={Team1} alt="Card image" />
                  <div className="overlaypos">
                    <div className='row'>
                      <div className='col-sm-6 col-6'>
                        <div className='card-head'>
                            <h4 className="card-title">Sandeep Yadav</h4>
                            <h5 className="card-subtitle">ceo</h5>
                        </div>                       
                      </div>
                      <div className='col-sm-6  col-6'>
                        <div className='card-socialmedia'>
                            <ul className="social-menu">
                                  <li><a href="https://www.facebook.com/" target="blank" alt="facebook"><img src={Facebook} className='img-fluid ' alt='social media icon' /></a></li>
                                  <li><a href="https://twitter.com/" target="blank" alt="twitter"><img src={Twitter} className='img-fluid ' alt='social media icon' /></a></li>
                                  <li><a href="https://www.instagram.com/" target="blank" alt="instagram"><img src={Instagram} className='img-fluid ' alt='social media icon' /></a></li>
                            </ul>
                          </div>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                <div className="card">
                  <img className="card-img" src={Team2} alt="Card image" />
                  <div className="overlaypos">
                    <div className='row'>
                      <div className='col-sm-6 col-6'>
                        <div className='card-head'>
                            <h4 className="card-title">Renu Mishra</h4>
                            <h5 className="card-subtitle">founder</h5>
                        </div>                       
                      </div>
                      <div className='col-sm-6  col-6'>
                        <div className='card-socialmedia'>
                            <ul className="social-menu">
                                  <li><a href="https://www.facebook.com/" target="blank" alt="facebook"><img src={Facebook} className='img-fluid ' alt='social media icon' /></a></li>
                                  <li><a href="https://twitter.com/" target="blank" alt="twitter"><img src={Twitter} className='img-fluid ' alt='social media icon' /></a></li>
                                  <li><a href="https://www.instagram.com/" target="blank" alt="instagram"><img src={Instagram} className='img-fluid ' alt='social media icon' /></a></li>
                            </ul>
                          </div>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                <div className="card">
                  <img className="card-img" src={Team3} alt="Card image" />
                  <div className="overlaypos">
                    <div className='row'>
                      <div className='col-sm-6 col-6'>
                        <div className='card-head'>
                            <h4 className="card-title">Priyanka Yadav</h4>
                            <h5 className="card-subtitle">President</h5>
                        </div>                       
                      </div>
                      <div className='col-sm-6  col-6'>
                        <div className='card-socialmedia'>
                            <ul className="social-menu">
                                  <li><a href="https://www.facebook.com/" target="blank" alt="facebook"><img src={Facebook} className='img-fluid ' alt='social media icon' /></a></li>
                                  <li><a href="https://twitter.com/" target="blank" alt="twitter"><img src={Twitter} className='img-fluid ' alt='social media icon' /></a></li>
                                  <li><a href="https://www.instagram.com/" target="blank" alt="instagram"><img src={Instagram} className='img-fluid ' alt='social media icon' /></a></li>
                            </ul>
                          </div>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                <div className="card">
                  <img className="card-img" src={Team4} alt="Card image" />
                  <div className="overlaypos">
                    <div className='row'>
                      <div className='col-sm-6 col-6'>
                        <div className='card-head'>
                            <h4 className="card-title">Jitendra Kumar</h4>
                            <h5 className="card-subtitle">co-founder</h5>
                        </div>                       
                      </div>
                      <div className='col-sm-6  col-6'>
                        <div className='card-socialmedia'>
                            <ul className="social-menu">
                                  <li><a href="https://www.facebook.com/" target="blank" alt="facebook"><img src={Facebook} className='img-fluid ' alt='social media icon' /></a></li>
                                  <li><a href="https://twitter.com/" target="blank" alt="twitter"><img src={Twitter} className='img-fluid ' alt='social media icon' /></a></li>
                                  <li><a href="https://www.instagram.com/" target="blank" alt="instagram"><img src={Instagram} className='img-fluid ' alt='social media icon' /></a></li>
                            </ul>
                          </div>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                <div className="card">
                  <img className="card-img" src={Team5} alt="Card image" />
                  <div className="overlaypos">
                    <div className='row'>
                      <div className='col-sm-6 col-6'>
                        <div className='card-head'>
                            <h4 className="card-title">Rajesh Yadav</h4>
                            <h5 className="card-subtitle">ceo</h5>
                        </div>                       
                      </div>
                      <div className='col-sm-6  col-6'>
                        <div className='card-socialmedia'>
                            <ul className="social-menu">
                                  <li><a href="https://www.facebook.com/" target="blank" alt="facebook"><img src={Facebook} className='img-fluid ' alt='social media icon' /></a></li>
                                  <li><a href="https://twitter.com/" target="blank" alt="twitter"><img src={Twitter} className='img-fluid ' alt='social media icon' /></a></li>
                                  <li><a href="https://www.instagram.com/" target="blank" alt="instagram"><img src={Instagram} className='img-fluid ' alt='social media icon' /></a></li>
                            </ul>
                          </div>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                <div className="card">
                  <img className="card-img" src={Team6} alt="Card image" />
                  <div className="overlaypos">
                    <div className='row'>
                      <div className='col-sm-6 col-6'>
                        <div className='card-head'>
                            <h4 className="card-title">Piyush Chawla</h4>
                            <h5 className="card-subtitle">manager</h5>
                        </div>                       
                      </div>
                      <div className='col-sm-6  col-6'>
                        <div className='card-socialmedia'>
                            <ul className="social-menu">
                                  <li><a href="https://www.facebook.com/" target="blank" alt="facebook"><img src={Facebook} className='img-fluid ' alt='social media icon' /></a></li>
                                  <li><a href="https://twitter.com/" target="blank" alt="twitter"><img src={Twitter} className='img-fluid ' alt='social media icon' /></a></li>
                                  <li><a href="https://www.instagram.com/" target="blank" alt="instagram"><img src={Instagram} className='img-fluid ' alt='social media icon' /></a></li>
                            </ul>
                          </div>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>          
          </div>
        </div>

      </div>
    </>
  )
}

export default LandingPage;