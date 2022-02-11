import React from 'react';
import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Homepage = () => {
    return (
        <div className="home" >
     
        <div class="newsletter">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-xl-7 col-lg-7">
                          <div class="section-title text-center">
                          <h1 class="blog-heading" >About Us </h1>
                          
              <p class="blog-para">
             
              A blog (a shortened version of “weblog”) 
              is an online journal or informational website displaying information 
              in reverse chronological order, with the latest posts appearing first, 
              at the top. It is a platform where a writer or a group of writers share 
              their views on an individual subject.
              </p>
                          </div>
                      </div>
                  </div>
          
                  <div class="row justify-content-center">
                      <div class="col-xl-8 col-lg-12">
                          <form class="newsletter-form">
                              <input type="email" placeholder="Enter your email..." required></input>
                              <button className="signup-button btn-primary" type="submit">Subscribe Now</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Homepage;