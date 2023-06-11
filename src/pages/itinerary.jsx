import React, { useState } from "react";
import "../styles/Itinerary.css"
import airplane from "../images/travel.jpg"
import hotel from "../images/hotel.jpg"
export const Itinerary = () => {

    return (
        <div className="itineraryWrapper">
            <h4>Below are some more of the specifics of the trip:</h4>
          
            <h1>Travel</h1>
            <div className="itineraryInfo">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img className="itineraryImage" src={airplane} alt="Airplane" />
            </div>

            <div className="break" />
            <h1>Accomdations</h1>
            <div className="itineraryInfo">
                <img className="itineraryImage" src={hotel} alt="Picture of hotel room" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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