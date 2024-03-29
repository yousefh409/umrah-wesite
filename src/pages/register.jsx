import React, { useState } from "react";
import "../styles/Register.css"
import kaabah from "../images/kaabah.webp"
import masjidElNabawy from '../images/masjidAlNabawi.jpg';

export const Register = () => {
    var stanfordAmount = 45000;
    var berkeleyAmount = 55000;
    var goalAmount = 150000;

    var stanfordPercent = 100 * stanfordAmount / goalAmount
    var berkeleyPercent = 100 * berkeleyAmount / goalAmount;

    console.log(berkeleyAmount)
    return (
        <div className="registerWrapper">
            <h1>Register Today!</h1>
            <p>Spots on the trip are extremley limited, so please make sure to register as soon as possible to reserve your spot. 
                Registration is open to all UC Berkeley and Stanford students. Pricing information will be displayed once you go through the registration link. 
                Registration will require a $1,000 deposit, and the price of the trip will be reduced depending on how much we are able to fundraise!</p>
            <p>Registration will be processed by Dar El Salam, the company organizing the trip. Click below to register today!</p>
            <a
                className='btn btn-primary registerButton contentButton'
                data-fancybox
                href='https://darelsalam.wufoo.com/forms/tawasaw-umrah-winter-2023'
            >
                Register Now
            </a>
            {window.innerWidth > 768? <div className="umrahImageWrapper">
                <img className="umrahImage islamicBorder" src={kaabah} alt="Picture of the kaabah" />
                <img className="umrahImage islamicBorder" src={masjidElNabawy} alt="Picture of masjid el nabawy" />
            </div>: <div />}
        </div>
    );
};