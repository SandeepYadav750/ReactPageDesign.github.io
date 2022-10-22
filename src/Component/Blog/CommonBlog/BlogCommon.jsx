import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogCommon = (props) => {
  return (
    <>
        <div className='col-lg-4 col-md-4 col-sm-4'>
            <div className="blogcard">
                <img className="card-img-top" src={props.Travel} alt="BlogCard" />
                <div className="card-body blog">
                <p className='cardtimerow'><i class="fa fa-calendar" aria-hidden="true"></i> <span className='cardcalndr'>{props.currntdate}</span> <span className='cardcalndrtime'>{props.currnttime}</span></p>
                    <h1 className="card-title">{props.name}</h1>
                    <p className="card-text blog">{props.description}</p> 
                    <NavLink to="/blog"  className="bloglink" >Read More... &nbsp;&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></NavLink>

                </div>
            </div>
        </div>
    </>
  )
}

export default BlogCommon;
