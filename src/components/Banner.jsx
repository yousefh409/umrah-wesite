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
    <div style={{backgroundColor: "rgb(250, 240, 218)", borderRadius: "20px"}}>
        <OwlCarousel className='sliding-banner owl-carousel owl-theme' items={1} margin={10} nav autoplay={true} loop>
        
        <div class='item'>
            <div className='col left'>
            <h2 className='section-title large'>
                A first of its kind Umrah trip bringing together the Berkeley and Stanford muslim communities.
            </h2>
            <a
                className='primary-btn'
                data-fancybox
                href='https://youtu.be/iiOBq5t6KVc'
            >
                Register Today
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
                Sponsored and supported by alumni, parents, and other members of these communities
            </h2>
            <a href='#' className='primary-btn'>
                Donate Today
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
            Taking students on a once-in-a-lifetime trip
            </h2>
            <a href='#' className='primary-btn'>
                Support Today
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
    </div>
  );
}

export default Banner;