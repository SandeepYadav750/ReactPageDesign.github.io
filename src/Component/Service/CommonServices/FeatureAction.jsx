import React from 'react';

const FeatureAction = (props) => {
  return (
    <>
        <div className='col-lg-3 col-md-6'>
            <div className='bestfeaturecard my-4'>
                <div className='bestfeatureimg my-3'>
                    <img className="img-fluid" src={props.Feature} alt="Best Feture image" />
                </div>
                
                <div className="bestfeturebody">
                    <div className='svgcurve'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" 
                        fill-opacity="1" d="M0,320L60,282.7C120,245,240,171,360,128C480,85,600,75,720,96C840,
                        117,960,171,1080,165.3C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,
                        1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                    </div>
                    <h4 className="card-text">{props.name}</h4>   
                    <p>{props.description}</p> 
                    <div className='featurebtn_wrap my-2'>
                    <button className='featurebtn'>{props.icons}</button>
                    </div>                              
                </div>                               
            </div>
        </div>
    </>
  )
}

export default FeatureAction;
