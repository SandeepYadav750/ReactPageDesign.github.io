import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';

const MainHeading = (props) => {
  return (
    <>
      <div className='container'>
          <div className='main_heading text-center my-5 mx-3'>
              <h1 className='heading text-uppercase'>{props.heading}</h1>
              <p className='subheading'>{props.subheading}</p>
          </div>
        </div>
    </>
  )
}

export default MainHeading;
