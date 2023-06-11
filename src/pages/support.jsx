import React, { useState } from "react";
import "../styles/Support.css"
import berkeleyLogo from '../images/berkeleyLogo.png';
import stanfordLogo from '../images/stanfordLogo.webp'

export const Support = () => {
    var stanfordAmount = 45000;
    var berkeleyAmount = 55000;
    var goalAmount = 150000;

    var stanfordPercent = 100 * stanfordAmount / goalAmount
    var berkeleyPercent = 100 * berkeleyAmount / goalAmount;

    console.log(berkeleyAmount)
    return (
        <div className="supportWrapper">
            <h1>Donate Today!</h1>
            <p>Donations will be processed through Tawasaw, a 501(c)(3) non-profit orginization! <strong>When making the donation, please put a note that it is intended for the "Berkeley Stanford Umrah"</strong>. If you would like, also note which school you would like to support.</p>
            <a
                className='btn btn-primary donateButton'
                data-fancybox
                href='https://www.tawasaw.org/donate'
            >
                Donate Now
            </a>
            <div className="break" />
            <div>
                <h1>Current Progress</h1>
                <h5>Here is how close we are to meeting our goals:</h5>
                <div className="progressWrapper">
                    <div className="individualProgressBar">
                        <h5>UC Berkeley</h5>
                        <p>${berkeleyAmount.toLocaleString()} out of ${goalAmount.toLocaleString()}</p>
                        <div className="barcontainer">
                            <p>{berkeleyPercent.toFixed(1)}%</p>
                            <div className="bar berkeley" style={{height: berkeleyPercent.toFixed(1) + "%"}} />
                        </div>
                        <div className="circle berkeley">
                            <img style={{width: "130px"}} src={berkeleyLogo} alt="BERKELEY" />
                        </div>
                    </div>
                    <div className="individualProgressBar">
                    <h5>Stanford</h5>
                        <p>${stanfordAmount.toLocaleString()} out of ${goalAmount.toLocaleString()}</p>
                        <div className="barcontainer">
                            <p>{stanfordPercent.toFixed(1)}%</p>
                            <div className="bar stanford" style={{height: stanfordPercent.toFixed(1) + "%"}} />
                        </div>
                        <div className="circle stanford">
                            <img style={{width: "150px"}} src={stanfordLogo} alt="STANFORD" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="break" />
            <h1>How it works</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div>
                <h1></h1>
            </div>
        </div>
    );
};