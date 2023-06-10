import React, { useState } from "react";
import "../styles/Support.css"


export const Support = () => {

    return (
        <div className="supportWrapper">
            <div>
                <h1>Current Progress</h1>
                <div className="progressWrapper">
                    <div>
                        <div class="barcontainer">
                            <div class="bar berkeley" style={{height: "70%"}}>
                            </div>
                        </div>
                        UC Berkeley
                    </div>
                    <div>
                        <div class="barcontainer">
                            <div class="bar stanford" style={{height: "70%"}}>
                            </div>
                        </div>
                        Stanford
                    </div>
                </div>
            </div>
        </div>
    );
};