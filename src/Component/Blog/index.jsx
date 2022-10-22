import React from 'react';
import Banner from "../CommonComponent/Banner";
import BlogCommon from "./CommonBlog/BlogCommon";
import MainHeading from "../CommonComponent/MainHeading";
import Travel1 from "../../images/travel-1.jpg";
import Travel2 from "../../images/travel-2.jpg";
import Travel3 from "../../images/travel-3.jpg";

const Blog = () => {

const currntdate = new Date().toDateString();
const currnttime = new Date().toLocaleTimeString();

  return (
    <>
      <div id='Bloguspage'>
        <Banner 
          heading1= "This is Blog page which tell you about the site and what people think about our work."
        />
          
        <MainHeading 
          heading ="Blog Detail"
          subheading = "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />

        <div className='container'>        
          <div className='blog_wrap'>
            <div className='row'>
              <BlogCommon 
                Travel = {Travel1}
                name = "Blog 1"
                description ="Some quick example text to build on the card title and make up the bulk of the card's content."
                currntdate = {currntdate}
                currnttime = {currnttime}
              />
              <BlogCommon 
                Travel = {Travel2}
                name = "My Blog 2"
                description ="Some quick example text to build on the card title and make up the bulk of the card's content."
                currntdate = {currntdate}
                currnttime = {currnttime}
              />
              <BlogCommon 
                Travel = {Travel3}
                name = "Blog 3"
                description ="Some quick example text to build on the card title and make up the bulk of the card's content."
                currntdate = {currntdate}
                currnttime = {currnttime}
              />
                
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog;
