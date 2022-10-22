import React from 'react';
import Banner from "../CommonComponent/Banner";
import MainHeading from "../CommonComponent/MainHeading";
import ServicesProvide from "./CommonServices/ServicesProvide";

const Service = () => {
  return (
    <>
      <div id='servicepage'>
      <Banner 
          heading1= "This is Service page which tell you about the Service."
        />
        
        <MainHeading 
          heading ="Service Detail"
          subheading = "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />

        <ServicesProvide />

      </div>
    </>
  )
}

export default Service;
