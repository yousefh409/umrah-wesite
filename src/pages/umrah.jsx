import React, { useState } from "react";
import Banner from "../components/Banner";
import "../styles/Umrah.scss"
import elbakri from '../images/shaykh-el-bakri.png';
import darElSalam from '../images/dar-el-salam.jpg';
import kaabah from '../images/kaabah.webp';
import masjidElNabawy from '../images/masjidAlNabawi.jpg';

export const Umrah = () => {
    
    return (
        <div className="umrahWrapper">
            <Banner />
            <div className="break" />

            <div>
                <h1>About</h1>
                <div className="aboutWrapper">
                    <div  className="card">
                        <div className="card-body">
                            This is a once in a lifetime trip, that will bring together the Berkeley and Stanford muslim student populations. Together, we will embark on an 11-night trip to the blessed cities of Mecca and Madinah. 
                            There, we will not only complete the holy rites of Umrah, but also visit and learn about many of the historic sites that we read about in our Islamic books.
                            We hope to be able to raise funds to make this trip as affordable as possible, so please consider <a href="/support">donating today</a> and spreading the word!
                            If you would like to join on this amazing trip, please <a href="/register">register today</a>.
                        </div>
                        <a style={{margin: "10px"}} href='/trips' className='btn btn-primary contentButton'>
                            Learn More
                        </a>
                    </div>
                </div>
            </div>      
            {/* <div className="break" /> */}
            
            {window.innerWidth > 768? <div className="umrahImageWrapper">
                <img className="umrahImage islamicBorder" src={kaabah} alt="Picture of hotel room" />
                <img className="umrahImage islamicBorder" src={masjidElNabawy} alt="Picture of hotel room" />
            </div>: <div />}
            <div>
                <h1>Donations</h1>
                <div className="aboutWrapper">
                    <div  className="card">
                        <div className="card-body">
                            We want to make this trip as affordable as possible (or even free if we raise enough funds) for the students attending.
                            To do this, we need your help (and wallet). Your donations will go to taking students on an amazing trip to visit some of Islams most famous sites, inspiring them for the rest of their lives!
                            Any amount is appreciated, and even just sharing this with your network would bring us closer to our goals.
                        </div>
                        <a style={{margin: "10px"}} href='/support' className='btn btn-primary contentButton'>
                            Donate Today
                        </a>
                    </div>
                </div>
            </div>
            <div className="break" />
            <div>
                <h1>The Hosts</h1>
                <div className="hostsWrapper">
                    <div className="card hostCard" style={{width: "23rem", margin: "7px"}}>
                        <img className="card-img-top" src={elbakri} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Shaykh Alauddin El-Bakri</h5>
                            <p className="card-text">Shaykh Alauddin El-Bakri is a founding member of several non-profit organizations that serve the Muslim community such as (IMAN) Inner-City Muslim Action Network, My Dean, Support Life Foundation and Tawasaw.org. Shaykh El-Bakri is currently the resident scholar and Khateeb at West Valley Muslim association. Shaykh El-Bakri will be leading and guiding us throughout the trip.</p>
                        </div>
                    </div>
                    <div className="card hostCard" style={{width: "23rem", margin: "7px"}}>
                        <img className="card-img-top" src={darElSalam} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Dar El Salam</h5>
                            <p className="card-text">Dar El Salam has been providing high-quality service for over 30 years, making them the top Umrah facilitator in North America. They have organized trips to the holy lands of Mecca and Madinah for over 100,000 people and counting! Dar El Salam will be organizing and managing the umrah trip.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};