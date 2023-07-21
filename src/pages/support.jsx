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
                {/* <p>Sponsor a Student: Berkeley vs. Stanford Umrah!</p> */}
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
            <h1 id="donate">Donate Today and Make a Difference!</h1>
            <p>Your support can help us create a life-changing experience for Muslim students from UC Berkeley and Stanford University. Join the friendly competition between the schools and help us reach our donation goals to make this Umrah trip possible. Every contribution brings us closer to our target!</p>
            <p>Donations will be processed through Tawasaw, a 501(c)(3) non-profit orginization! <strong>When making the donation, please put a note that it is intended for the "Berkeley Stanford Umrah"</strong>. Additionally, feel free to specify which school you would like to support.</p>
            <a
                className='btn btn-primary donateButton contentButton'
                data-fancybox
                href='https://www.tawasaw.org/donate'
            >
                Donate Now
            </a>
            <div className="break" />
            <h1>How it works</h1>
            <p>Your generous donations directly support students participating in the Umrah trip. Our aim is to raise 100% of the necessary funds and make this trip financially accessible for all students. When making a donation, you have the option to choose which school's students you would like your contribution to support. If no preference is specified, donations will be evenly distributed.</p>
            <p>Donating through Tawasaw, a registered non-profit organization, offers additional benefits. You can deduct the donated amount from your taxes, maximizing the impact of your generosity. If you have any questions or need further assistance, please don't hesitate to reach out to us.</p>
            <p>Help us foster unity, growth, and spiritual enrichment among Muslim students at UC Berkeley and Stanford by sponsoring their Umrah journey. Your support can make a profound difference in their lives and empower them to embrace their faith and build lasting connections.</p>

            <div>
                <h1></h1>
            </div>
        </div>
    );
};