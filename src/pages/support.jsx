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
            <div>
                <h1>Current Progress</h1>
                <h6>Here is how close we are to meeting our goals:</h6>
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
            {/* <div className="break" /> */}
            <h1 id="donate">Donate Today!</h1>
            <p>Donations will be processed through Tawasaw, a 501(c)(3) non-profit orginization! <strong>When making the donation, please put a note that it is intended for the "Berkeley Stanford Umrah"</strong>. If you would like, also note which school you would like to support.</p>
            <a
                className='btn btn-primary donateButton'
                data-fancybox
                href='https://www.tawasaw.org/donate'
            >
                Donate Now
            </a>
            <div className="break" />
            <h1>How it works</h1>
            <p>Your donations will go directly to supporting students on this trip. Our goal is to raise 100% of the neccassary funds, and make this trip free for the students attending. When donating you will also have the option of picking which school's students you would like your donations go towards (otherwise, it will be split evenly). Donations will be proccessed through Tawasaw, a 501(c)(3) non-profit orginization, which means you can deduct whatever you donate from your taxes! Please contact us if you have any questions at all.</p>

            <div>
                <h1></h1>
            </div>
        </div>
    );
};