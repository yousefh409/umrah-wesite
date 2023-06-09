import React from 'react';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import '../styles/Banner.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function Banner() {
  let owl_carousel = require('owl.carousel');
  window.fn = owl_carousel;

  return (
    <OwlCarousel className='sliding-banner owl-carousel' items={1} margin={10} nav>
    
      <div class='item'>
        <div className='col left'>
          <h2 className='section-title large'>
            Test test test
          </h2>
          <a
            className='primary-btn'
            data-fancybox
            href='https://youtu.be/iiOBq5t6KVc'
          >
            See what tomorrow holds
          </a>
        </div>
        <div
          className='col right'
          style={{
            backgroundImage: `url(${banner1})`,
          }}
        ></div>
      </div>
      <div class='item'>
        <div className='col left'>
          <h2 className='section-title large'>
            STest test test
          </h2>
          <a href='#' className='primary-btn'>
            Learn More
          </a>
        </div>
        <div
          className='col right'
          style={{ backgroundImage: `url(${banner2})` }}
        ></div>
      </div>
      <div class='item'>
        <div className='col left'>
          <h2 className='section-title large'>
          Test test test
          </h2>
          <a href='#' className='primary-btn'>
            Discover Solutions
          </a>
        </div>
        <div
          className='col right'
          style={{
            backgroundImage: `url(${banner3})`,
          }}
        ></div>
      </div>
    </OwlCarousel >
  );
}

export default Banner;