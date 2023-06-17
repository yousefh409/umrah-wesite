import React, { useState } from "react";
import "../styles/Itinerary.css"
import airplane from "../images/travel.jpg"
import hotel from "../images/hotel.jpg"
export const Itinerary = () => {

    return (
        <div className="itineraryWrapper">
            <h4>Below are some more of the specifics of the trip:</h4>
            <p>Trip Dates: December 25th, 2023 - January 6th, 2024</p>
            <h1>Travel</h1>
            <div className="itineraryInfo">
                <p>The package includes a rountrip flight from Los Angeles (LAX) to Jeddah (JED) aboard Saudi Airlines. 
                    <strong>The package does not include a flight from whichever city you are based out of to LAX.</strong>
                    The package also includes any transportation in Saudi Arabia, and we will take care of Visa processing and its corresponding fees.
                </p>
                <img className="itineraryImage" src={airplane} alt="Airplane" />
            </div>

            <div className="break" />
            <h1>Accomdations</h1>
            <div className="itineraryInfo">
                <img className="itineraryImage" src={hotel} alt="Picture of hotel room" />
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
            <div className="break" />
            <h1>Day-by-Day Schedule</h1>
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
       
        </div>
    );
};