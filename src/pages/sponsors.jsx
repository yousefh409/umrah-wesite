import React, { useState } from "react";
import "../styles/Sponsors.css"
import tawasaw from "../images/tawasaw.webp"
import calMSA from "../images/calMSA.jpg"
import stanfordMSU from "../images/stanfordMSU.png"
import { Link } from "react-router-dom";

export const Sponsors = () => {

    return (
        <div className="sponsorsWrapper">
            <h2>This trip is made possibly by the following sponsors:</h2>
            <div className="sponsorsFlex">
                <div>
                    <div className="sponsorLogo">
                        <Link to="https://www.tawasaw.org/">
                            <img className="sponsorLogoImage" src={tawasaw} alt="Tawasaw Logo" />
                        </Link>
                    </div>
                    <h3 style={{textAlign:"center", marginBottom:"30px"}}>Tawasaw</h3>
                </div>
                <div>
                    <div className="sponsorLogo">
                        <Link to="https://berkeleymsa.org/">
                            <img className="sponsorLogoImage" src={calMSA} alt="Tawasaw Logo" />
                        </Link>
                    </div>
                    <h3 style={{textAlign:"center", marginBottom:"30px"}}>UC Berkeley MSA</h3>
                </div>
                <div>
                    <div className="sponsorLogo">
                        <Link to="https://web.stanford.edu/group/msu/cgi-bin/wordpress/">
                            <img className="sponsorLogoImage" src={stanfordMSU} alt="Tawasaw Logo" />
                        </Link>
                    </div>
                    <h3 style={{textAlign:"center", marginBottom:"30px"}}>Stanford MSU</h3>
                </div>
            </div>
        </div>
    );
};