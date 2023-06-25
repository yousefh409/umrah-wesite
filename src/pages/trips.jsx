import React, { useState } from "react";
import "../styles/Trips.css"
import airplane from "../images/travel.jpg"
import hotel from "../images/hotel.jpg"
export const Trips = () => {

    return (
        <div className="tripsWrapper">
            <h1>Calednar</h1>
            <div className="tripContentWrapper">
               <p>Coming soon!</p>
            </div>
            
            <h1>Winter Trip 2023</h1>
            <div className="tripContentWrapper">
                <h3>Trip Dates</h3>
                <p>December 25th, 2023 - January 6th, 2024</p>
                
                <div className="breakSmall" />
                <h3>Accomdation</h3>
                <div className="tripsInfo">
                    {window.innerWidth > 768? <img className="tripsImage" src={hotel} alt="Picture of hotel room" />: <div />}
                    <div>You have the option of staying in the following room types:
                        <ul>
                            <li>Quad - $4,450 per person</li>
                            <li>Triple - $4,550 per person</li>
                            <li>Double - $4,905 per person</li>
                        </ul>
                        With the following hotels for each city:
                        <ul>
                            <li>Madinah - Movenpick Hotel</li>
                            <li>Mecca - Swiss Hotel</li>
                        </ul>
                    </div>
                </div>

                <div className="breakSmall" />
                <h3>Travel</h3>
                <div className="tripsInfo">
                    <p>The package includes a rountrip flight from Los Angeles (LAX) to Jeddah (JED) aboard Saudi Airlines. 
                        <strong> The package does not include a flight from whichever city you are based out of to LAX.</strong>
                        The package also includes any transportation in Saudi Arabia, and we will take care of Visa processing and its corresponding fees.
                    </p>
                    {window.innerWidth > 768? <img className="tripsImage" src={airplane} alt="Airplane" />: <div />}
                </div>

                <div className="breakSmall" />
                <h3>Day-by-Day Schedule</h3>
                <ul>
                    <li className="scheduleListItem">Day 1</li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <li className="scheduleListItem">Day 2</li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <li className="scheduleListItem">Day 3</li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <li className="scheduleListItem">Day 4</li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <li className="scheduleListItem">Day 5</li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <li className="scheduleListItem">Day 6</li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <li className="scheduleListItem">Day 7</li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    <li className="scheduleListItem">Day 8</li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </ul>

                <div className="breakSmall" />
                <h3>Contact Us</h3>
                <p>For any additional information, please feel free to contaxt us at email@email.org!</p>

            </div>
       
        </div>
    );
};