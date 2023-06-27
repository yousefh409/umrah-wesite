import React, { useState } from "react";
import Banner from "../components/Banner";
import "../styles/Home.scss"
import elbakri from '../images/shaykh-el-bakri.png';
import darElSalam from '../images/dar-el-salam.jpg';
import kaabah from '../images/kaabah.webp';
import masjidElNabawy from '../images/masjidAlNabawi.jpg';
import homeBannerImg from '../images/homeBanner.jpg'

export const Home = () => {
    
    return (
        <div className="homeWrapper">
            <div className="homeBanner">
                <div className="homeBannerText">
                    <p>Bringing together the Bay Area Muslim student communities together</p>
                </div>
                <img className="homeBannerImg" src={homeBannerImg} alt="Home Banner Image" />
            </div>
            <div className="break" />
           <div>
                <h1>About</h1>
                <div className="homeWrapperContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum ut diam imperdiet sollicitudin. Praesent pellentesque justo odio, vitae accumsan purus auctor non. Etiam eu metus vel nibh venenatis blandit vitae quis orci. Vivamus lacinia iaculis quam in imperdiet. Nam eu consectetur nisl. Nunc sit amet efficitur enim, eget tincidunt diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum ut diam imperdiet sollicitudin. Praesent pellentesque justo odio, vitae accumsan purus auctor non. Etiam eu metus vel nibh venenatis blandit vitae quis orci. Vivamus lacinia iaculis quam in imperdiet. Nam eu consectetur nisl. Nunc sit amet efficitur enim, eget tincidunt diam.
                </div>
           </div>
           <div className="breakSmall" />
           <a style={{width: "100%"}} href='/support' className='btn btn-primary'>
                Donate Today
            </a>
          
           <div className="break" />
           <div>
                <h1>Umrah</h1>
                <div className="homeWrapperContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum ut diam imperdiet sollicitudin. Praesent pellentesque justo odio, vitae accumsan purus auctor non. Etiam eu metus vel nibh venenatis blandit vitae quis orci. Vivamus lacinia iaculis quam in imperdiet. Nam eu consectetur nisl. Nunc sit amet efficitur enim, eget tincidunt diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum ut diam imperdiet sollicitudin. Praesent pellentesque justo odio, vitae accumsan purus auctor non. Etiam eu metus vel nibh venenatis blandit vitae quis orci. Vivamus lacinia iaculis quam in imperdiet. Nam eu consectetur nisl. Nunc sit amet efficitur enim, eget tincidunt diam.
                </div>
           </div>
           <div className="breakSmall" />
           <a style={{width: "100%"}} href='/umrah' className='btn btn-primary'>
                Learn More
            </a>
        </div>
    );
};                     