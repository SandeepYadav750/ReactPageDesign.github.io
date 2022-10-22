import React from 'react';
import Banner from "../CommonComponent/Banner";
import MainHeading from "../CommonComponent/MainHeading";

const Anotheraction = () => {
  return (
    <>
      <div id='serviceanactionpage'>
      <Banner 
          heading1= "This is Service Another Action page which tell you about the Service Another Action site and our work."
        />
        
        <MainHeading 
          heading ="Service Another Action Detail"
          subheading = "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        
      </div>
    </>
  )
}

export default Anotheraction;
