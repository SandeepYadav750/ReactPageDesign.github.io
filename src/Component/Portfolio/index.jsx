import React from 'react';
import Banner from "../CommonComponent/Banner";
import MainHeading from "../CommonComponent/MainHeading";


const Portfolio = () => {
  return (
    <>
      <div id='portfolio'>
      <Banner 
          heading1= "This is Portfolio page which tell you about the portfolio of the site and our work."
        />
        
        <MainHeading 
          heading ="portfolio Detail"
          subheading = "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        
      </div>
    </>
  )
}

export default Portfolio;
