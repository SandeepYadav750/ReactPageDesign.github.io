import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';

const Reviews = (props) => {
  return (
    <>
        <div className='reviewcard'>
            <div className='reviewcount py-3'>
                <div className='reviewqoute'>
                <ImQuotesLeft />
                </div>
                <div className='reviewcount_para'>
                <p>{props.description}</p>
                </div>                                    
            </div>                                
            <div className="reviewbody mb-2">  
                <div className='reviewimg'>
                <img src={props.profilepic} className='avatarimg' alt='avatarimage' />
                </div>                                  
                <div className='avatartext'>
                <h4>{props.name}</h4>
                <p>{props.designation}</p>
                </div>
            </div>                               
        </div>
    </>
  )
}

export default Reviews;
