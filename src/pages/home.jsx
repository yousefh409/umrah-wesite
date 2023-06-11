import React, { useState } from "react";
import Banner from "../components/Banner";
import "../styles/Home.css"
import elbakri from '../images/shaykh-el-bakri.png';
import darElSalam from '../images/dar-el-salam.jpg';
import kaabah from '../images/kaabah.webp';
import masjidElNabawy from '../images/masjidAlNabawi.jpg';

export const Home = () => {

    return (
        <div className="homeWrapper">
            <Banner />
            <div className="break" />

            <div>
                <h1>About</h1>
                <div className="aboutWrapper">
                    <div  className="card">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <a style={{margin: "10px"}} href='/register' className='btn btn-primary'>
                            Register Today
                        </a>
                    </div>
                </div>
            </div>      
            {/* <div className="break" /> */}
            <div className="homeImageWrapper">
                <img className="homeImage" src={kaabah} alt="Picture of hotel room" />
                <img className="homeImage" src={masjidElNabawy} alt="Picture of hotel room" />
            </div>
            <div>
                <h1>Donations</h1>
                <div className="aboutWrapper">
                    <div  className="card">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <a style={{margin: "10px"}} href='/support' className='btn btn-primary'>
                            Donate Today
                        </a>
                    </div>
                </div>
            </div>
            <div className="break" />
            <div>
                <h1>The Hosts</h1>
                <div className="hostsWrapper">
                    <div className="card" style={{width: "23rem"}}>
                        <img className="card-img-top" src={elbakri} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Shaykh Alauddin El-Bakri</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="card" style={{width: "23rem"}}>
                        <img className="card-img-top" src={darElSalam} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Dar El Salam</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};