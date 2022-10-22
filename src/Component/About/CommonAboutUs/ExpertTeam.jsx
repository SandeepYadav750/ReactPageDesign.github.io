import React from 'react';

const ExpertTeam = (props) => {
  return (
    <>
        <div className='col-md-4'>
            <div className='expertcard my-4'>
                <div className='expertimgbox'>
                    <div className='subexpertimg'>
                        <img className="expertimg" src={props.Expert} alt="Card image cap" />
                    </div>
                </div>
                <div className="card-body expertbody">
                    <p className="card-text">{props.name}</p>
                    <p className="card-designation">{props.designation}</p>
                    <ul className="expert_social_menu">
                        <li><a href="https://www.facebook.com/" target="blank" alt="facebook"><img src={props.Facebook48} className='img-fluid ' alt='social media icon' /></a></li>
                        <li><a href="https://twitter.com/" target="blank" alt="twitter"><img src={props.Twitter48} className='img-fluid ' alt='social media icon' /></a></li>
                        <li><a href="https://www.instagram.com/" target="blank" alt="instagram"><img src={props.Insta48} className='img-fluid ' alt='social media icon' /></a></li>
                </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExpertTeam
