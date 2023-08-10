import React, { useState } from "react";
import Banner from "../components/Banner";
import "../styles/Home.scss"
import elbakri from '../images/shaykh-el-bakri.png';
import darElSalam from '../images/dar-el-salam.jpg';
import kaabah from '../images/kaabah.webp';
import masjidElNabawy from '../images/masjidAlNabawi.jpg';
import homeBannerImg from '../images/cal-stanford-group-picture.jpg'
import groupPicture2 from '../images/cal-stanford-group-picture-2.jpg'
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Home = () => (
    <div>
        <div>
            <div className="homeBannerImg">
                <h1>Bringing together the Berkeley and Stanford muslim student communities.</h1>
                <a href='/umrah' className='btn btn-primary bannerButton'>
                    Umrah
                </a>
            </div>
        </div>
        <div className="break" />
        <div className="homeWrapper">
            <div>
                <h1>About</h1>
                <div className="homeWrapperContent">
                    <img className="homeContentImage" src={groupPicture2} alt="Stanford & Berkeley Group Picture" />
                    <div className="homeContentText">
                        Welcome to [Organization Name], a dynamic and inclusive community that aims to foster connections and collaboration between Muslim students at UC Berkeley and Stanford University. Our organization serves as a platform for building lifelong friendships, exploring shared interests, and nurturing a vibrant network of talented individuals.
                        <a href='/donate' className='btn btn-primary contentButton'>
                            Donate Today
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="break" />
            <div>
                <h1>Umrah</h1>
                <div className="homeWrapperContent">
                    {window.innerWidth <= 768? <img className="homeContentImage" src={kaabah} alt="Picture of Kaabah" />: <div />}
                    <div className="homeContentText">
                       Each year, we host a joint Umrah Trip for UC Berkeley and Stanford students. This year, the trip will take place from December 25 to January 6, and will be led by Shaykh Alauddin El-Bakri. This trip is organized in collaboration with Tawasaw and Dar El Salam. We will also be fundrasaising money to make the trip as affordable as possible!
                        <a href='/umrah' className='btn btn-primary contentButton'>
                            Learn More
                        </a>
                    </div>
                    {window.innerWidth > 768? <img className="homeContentImage" src={kaabah} alt="Picture of Kaabah" />: <div />}
                </div>
            </div>
            
            <div className="break" />
            <div className="homeCards">
                {window.innerWidth > 768? <div className="decorationDot" />: <div />}
                {window.innerWidth > 768? <div className="decorationDot" />: <div />}
                <div className="homeCard">
                    <h3 style={{color: "rgb(196, 174, 126)"}}>Social Media</h3>
                    <div>Follow us on social media to stay up-to-date with the latest [Organization Name] updates!</div>
                    <div className="socialMediaRow">
                        <a href='/umrah'>
                            <FontAwesomeIcon className="socialMediaIcon" icon={faInstagram} title="Instagram" />		
                        </a>
                        <a href='/umrah'>
                            <FontAwesomeIcon className="socialMediaIcon" icon={faFacebook} title="Facebook" />		
                        </a>
                        <a href='/umrah'>
                            <FontAwesomeIcon className="socialMediaIcon" icon={faYoutube} title="Youtube" />		
                        </a>
                    </div>
                </div>
                {window.innerWidth > 768? <div className="decorationDot" />: <div />}
                {window.innerWidth > 768? <div className="decorationDot" />: <div />}

            </div>
        </div>
    </div>
);                     
