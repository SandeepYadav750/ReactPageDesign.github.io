import React from 'react';
import banner1 from "../../images/banner1.png";
import banner4 from "../../images/banner4.png";
import banner3 from "../../images/banner3.png";

const Banner = (props) => {
  return (
    <>
            {/* banner cousel start*/}
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div className='row sdrownone'>          
                    <div class="carousel-inner">
                        <div class="carousel-item banflex active">              
                            <div className='row sdrownone'>
                            <div className='col-md-6 col-sm-6 col-6'>
                            <div className='bannerimg'>
                                <img class="d-block w-100 img-fluid" src={banner1} alt="First slide" />
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-6 col-6'>
                                <div className='bannerdes'>
                                    <h1>{props.heading1}</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row sdrownone'>
                            <div className='col-md-6 col-sm-6 col-6'>
                            <div className='bannerimg'>
                                <img class="d-block w-100 img-fluid" src={banner4} alt="Second slide" />
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-6 col-6'>
                                <div className='bannerdes'>
                                    <h1>{props.heading1}</h1>
                                </div>
                            </div> 
                            </div>             
                        </div>
                        <div class="carousel-item">
                            <div className='row sdrownone'>
                            <div className='col-md-6 col-sm-6 col-6'>
                                <div className='bannerimg'>
                                <img class="d-block w-100 img-fluid" src={banner3} alt="Third slide" />
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-6 col-6'>
                                <div className='bannerdes'>
                                    <h1>{props.heading1}</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>        
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
      {/* banner carousel end */}
    </>
  )
}

export default Banner;
