import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowRight , BsArrowLeft} from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im';

function BeatPlanning(props) {
  return (
    <>
      <div className='col-lg-4 col-md-6'>
                            <div className='bestpricecard m-4'>
                                <div className='bestpricecount py-3'>
                                    <h3>{props.standard}</h3>
                                    <span className='signlelinearrow'><BsArrowLeft /><hr /> <BsArrowRight /></span>
                                    
                                    <p>${props.pricecount}<span>/mo</span></p>
                                    <div className='bestfeturesvgcurve'>
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" 
                                          fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,69.3C384,53,480,75,576,
                                          101.3C672,128,768,160,864,160C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,
                                          69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,
                                          320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,
                                          320Z"></path></svg>
                                    </div>
                                </div>                                
                                <div className="bestpricebody mb-2">                                  
                                   <ul style={{listStyle:"none",margin:"0",padding:"0"}}>
                                      <li>{props.li1}</li>
                                      <li>{props.li2}</li>
                                      <li>{props.li3}</li>
                                      <li>{props.li4}</li>
                                   </ul>
                                  <div className='bestpricebtn_wrap my-4'>
                                    <button className='bestpricebtn'>Try This Package</button>
                                  </div>                              
                                </div>                               
                            </div>
                          </div>
    </>
  )
}

export default BeatPlanning;
