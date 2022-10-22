import React from 'react';
import Banner from "../CommonComponent/Banner";
import MainHeading from "../CommonComponent/MainHeading";

const Someaction = () => {
  return (
    <>
      <div id='servicesomeaction'>
      <Banner 
          heading1= "This is Service Somection page which tell you about the Service Someaction site and our work."
        />
        
        <MainHeading 
          heading ="Service Someaction Detail"
          subheading = "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        
      </div>
    </>
  )
}

export default Someaction;
