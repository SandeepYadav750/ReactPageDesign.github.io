import React from 'react';
import Banner from "../CommonComponent/Banner";
import MainHeading from "../CommonComponent/MainHeading";
import { useFormik } from 'formik';
import {SignUpSchema} from '../LandingPage/Validation';
import Contactus from "../../images/contact.jpg";



const initialValues = {
  Fullname:'',
  Email:'',
  Number:'',
  Subject:'',
  Message:''
}

function Contact() {

  const {values, errors,touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema:SignUpSchema,
    onSubmit:(values) => {
      console.log(values);
  
    },
  });

  return (
    <>
      <div id='contactus'>
      <Banner 
          heading1= "This is Contact us page which tell you about the Contact detail field."
        />
          
        <MainHeading 
          heading ="Contact Detail"
          subheading = "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        
        <div className='container'>
          <div className='contact_wrap my-4'>
            <div className='row'>
              <div className='col-sm-6 my-2'>
              {/* <img className="img-fluid rounded" src={Contactus} alt="contactimg" /> */}
                <div className='row g-3'>
                  <div className='col-sm-12'>
                    <div className='contact_address'>
                        <i class="fa fa-map-pin" aria-hidden="true"></i>
                        <h4>Our Address</h4>
                        <p>Street name, city, state india</p>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12'>
                    <div className='contact_address'>
                        <i class="fa fa-envelope-open" aria-hidden="true"></i>
                        <h4>Email Us</h4>
                        <p><a href="mailto:88academics@gmail.com">88academics@gmail.com</a></p>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12'>
                    <div className='contact_address'>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                        <h4>Call Us</h4>
                        <p><a href='tel:+91 9876543211'>+91 9876543211</a></p>
                    </div>
                  </div>
                </div>
              </div> 
              <div className='col-sm-6 my-2'>
                  <div className='contact_form_field'>
                    <form onSubmit={handleSubmit}>
                      <div className='form_field_wrap'>
                        <div className='row'>
                            <div className="form-group col-md-6 mb-4 mt-2 position-relative">
                              <input type="text" className="form-control" name="Fullname" values={values.Fullname} onChange={handleChange} onBlur={handleBlur}  placeholder="Name*" />
                              { errors.Fullname && touched.Fullname ? (<p className='errorfield'>{errors.Fullname}</p>) : null }
                            </div>
                            <div className="form-group col-md-6 mb-4 mt-2 position-relative">
                              <input type="text" className="form-control" name="Email"  values={values.Email} onChange={handleChange} onBlur={handleBlur}  placeholder="Email*" />
                              { errors.Email && touched.Email ? (<p className='errorfield'>{errors.Email}</p>) : null }
                            </div>
                            <div className="form-group col-md-6 mb-4 mt-2 position-relative">
                              <input type="text" className="form-control" name="Number" values={values.Number} onChange={handleChange} onBlur={handleBlur}  placeholder="Number*" />
                              { errors.Number && touched.Number ? (<p className='errorfield'>{errors.Number}</p>) : null }
                            </div>
                            <div className="form-group col-md-6 mb-4 mt-2 position-relative">
                              <input type="text" className="form-control" name="Subject" values={values.Subject} onChange={handleChange} onBlur={handleBlur}  placeholder="Subject*" />
                              { errors.Subject && touched.Subject ? (<p className='errorfield'>{errors.Subject}</p>) : null }
                            </div>
                            <div className="form-group col-md-12 mb-4 mt-2 position-relative">
                              <textarea className="form-control" name="Message"  rows="4" values={values.Message} onChange={handleChange} onBlur={handleBlur}  placeholder="Message*" ></textarea>
                              { errors.Message && touched.Message ? (<p className='errorfield'>{errors.Message}</p>) : null }
                            </div>
                        </div>
                        <button type='submit' className='btn btn-danger w-auto my-3'>SUBMIT MESSAGE</button>
                      </div>
                    </form>                          
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;