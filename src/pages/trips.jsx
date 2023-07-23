import React, { useState } from "react";
import "../styles/Trips.css"
import airplane from "../images/travel.jpg"
import hotel from "../images/hotel.jpg"
import kaabah from '../images/kaabah.webp';
import masjidElNabawy from '../images/masjidAlNabawi.jpg';
import clockTower from '../images/clock-tower.jpg';
import taif from '../images/taif.jpg'

export const Trips = () => {

    return (
        <div className="tripsWrapper">
            {/* <h1>Calendar</h1>
            <div className="tripContentWrapper">
               <p>Coming soon!</p>
            </div> */}
            
            <h1>Umrah Winter Trip 2023</h1>
            <div>
                <p>Join us on a Life-Changing Journey: Umrah 2023-2024 with Shaykh Alauddin Elbakri</p>
                <p>Embark on a transformative spiritual experience with [Organization Name] and Tawasaw as we lead a group of students from UC Berkeley and Stanford University on an unforgettable Umrah journey. Guided by the renowned scholar Shaykh Alauddin Elbakri, this trip offers a unique opportunity to deepen your connection to your faith, explore the holy cities of Medina and Makkah, and forge lifelong friendships.</p>
            </div>
            <div className="tripContentWrapper">
                <h3>Trip Details</h3>
                <ul>
                    <li>Dates: December 25, 2023 - January 6, 2024</li>
                    <li>Duration: 11 nights</li>
                    <li>Roundtrip international flight included (Departs from LAX on Saudi Airlines)</li>
                </ul>

                <div className="breakSmall" />
                <h3>Itinerary</h3>
                <div>
                    <h5>Madinah</h5>
                    <p>Madinah is known and loved for the tranquility that it brings to our hearts – that feeling that we have finally made it back home – home is definitely where the heart is and our hearts are profoundly connected with a deep love of the Prophet Muhammad (ﷺ) and his beautiful city. It is a city that is filled with stories of love and sacrifice, of prophetic wisdom and illustrious companionship. Madinah is a city that keeps on giving – rich in history and lessons that build our faith and traditions and inspire us to become the best versions of ourselves. Welcome home, welcome to Madinah.</p>
                    <div className="bulletRow">
                        {window.innerWidth <= 768? <img className="tripsImage" src={masjidElNabawy} alt="Picture of masjid el nabawy" />: <></>}
                        <ul className="tripsList">
                            <li className="scheduleListItem">Extensive Haram tour</li>
                            <li className="scheduleListItem">Medina Museum bus trip</li>
                            <li className="scheduleListItem">Extensive Medina Mazarat (6 hours)</li>
                            <li className="scheduleListItem">Day trip to the Battle of Badr site by bus</li>
                            <li className="scheduleListItem">How to perform Umrah training session</li>
                            <li className="scheduleListItem">One-on-one personal sessions with Shaykh Alauddin Elbakri</li>
                        </ul>
                        {window.innerWidth > 768? <img className="tripsImage" src={masjidElNabawy} alt="Picture of masjid el nabawy" />: <></>}
                    </div>
                    Mazarat:
                    <ul>
                        <li className="scheduleListItem">Travel back in time with us as we go back some 1400 years and relive some of the most significant moments in the life of the Prophet Muhammad (ﷺ) and his companions. Exclusive to DST, a unique and immersive experience that will leave you longing for more.</li>
                        <li className="scheduleListItem">From the very first masjid built in Madinah, which the Prophet (ﷺ) himself help construct, Masjid Quba, to Masjid Qiblatain – the masjid of two qiblas – where the companions prayed in two directions as the qiblah changed from Masjid Al Aqsa in Jerusalem to Masjid Al Haram in Makkah. Be prepared to be in awe of the rich history and insights gained from this tour.</li>
                        <li className="scheduleListItem">You may be tempted to unsheathe your sword as we recount the epic Battle of Uhud where over seventy companions were killed, live and on site. You’ll get to ascend the archers mount as well as visit and pray for the Martyrs of Uhud.</li>
                        <li className="scheduleListItem">For the ultimate experience, join us for our exclusive ‘Walking Tour of the Prophet’s Masjid’, where we recount some of the most notable moments in what was then the entire city of Madinah, delivered by our renowned expert guides.</li>
                        <li className="scheduleListItem">An immersive experience of the history of Madinah like never before.</li>

                    </ul>
                </div>
                <div>
                    <h5>Makkah</h5>
                    <p>After years of facing towards this great city in each and every prayer and learning about the magnificent history of this most blessed place on Earth, you can now finally pray in front of the first house built and dedicated for the worship of Allah – the Ka’bah. You’ll hear, live, the glorious call to prayer from the famous muadhins, calling ‘Allahu Akbar, Allaaaahu Akbar’ as the sound of the adhaan echoes from the speakers and moves your soul and elevates your imaan. As you join the rows, lines straight and hearts upright, seeking to draw closer to Allah, standing before Him in humility and prayer, you realize, Allah has chosen you to be His Guest in this great journey of faith.</p>
                    <div className="bulletRow">
                        {window.innerWidth <= 768? <img className="tripsImage" src={kaabah} alt="Picture of the kaabah" />: <></>}
                        <ul className="tripsList">
                            <li className="scheduleListItem">Guided Umrah with Shaykh Alauddin Elbakri</li>
                            <li className="scheduleListItem">Extensive Haram tour</li>
                            <li className="scheduleListItem">Extensive Mazarat tour (6 hours)</li>
                            <li className="scheduleListItem">Journey to Makkah Museum</li>
                            <li className="scheduleListItem">Day trip to Taif by bus</li>
                            <li className="scheduleListItem">Jabal al Noor visit at Ghar Hira</li>
                            <li className="scheduleListItem">One-on-one personal sessions with Shaykh Alauddin Elbakri</li>
                        </ul>
                        {window.innerWidth > 768? <img className="tripsImage" src={kaabah} alt="Picture of the kaabah" />: <></>}
                    </div>
                    Mazarat:
                    <ul>
                        <li className="scheduleListItem">Join us as we relive some of the most defining moments in the history of Islam. Experience the DST difference with our immersive historical tour of Makkah delivered by expert guides that will transport you to a prophetic era.</li>
                        <li className="scheduleListItem">A moving and inspiring story of seclusion and revelation, of prophethood and perseverance, it all starts with a trip to Jabal al Noor, the Mountain of Light, where the Prophet (ﷺ) first received revelation.</li>
                        <li className="scheduleListItem">Learn about the persecution faced by early Muslims and how they were driven out of Makkah whilst holding firmly onto their faith. Learn about the migration of the Prophet (ﷺ) and the remarkable occurrences at Jabal Thawr that instilled within the believers lessons of tawakkul, of absolute, unwavering reliance in Allah SWT.</li>
                        <li className="scheduleListItem">Visit the iconic Jabal Ar-Rahmah, the Mount of Mercy, whereupon the Prophet (ﷺ) delivered his famous last sermon and the site which forms the pinnacle of the rites of Hajj. Journey through Mina, the city of tents, where pilgrims follow the example of the Prophet and stay for several days during the Hajj and pelt the three Jamarat, symbolic of warding off the devil and rooted in the story of Ibrahim (عَلَيْهِ ٱلسَّلَامُ).</li>
                        <li className="scheduleListItem">For the ultimate experience, join us for our unique and exclusive ‘Walking Tour of AlMasjid AlHaram’, where we recount some of the most notable moments and places, delivered by our renowned expert guides.</li>
                        <li className="scheduleListItem">An immersive experience of the history of Makkah like never before.</li>
                    </ul>
                </div>
                
                {/* <div className="breakSmall" />
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
                            <li>Mecca - Swiss Hotel (located in the Makkah Royal Clock Tower)</li>
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
                </div> */}
                <h3>Pricing</h3>
                <h6>Hotels:</h6>
                <div className="bulletRow">
                    <div>
                        <ul className="tripsList">
                            <li className="scheduleListItem">Madinah: Movenpick Hotel</li>
                            <li className="scheduleListItem">Swiss Hotel (located in the Makkah Royal Clock Tower)</li>
                        </ul>
                        <table>
                            <tr>
                                <th></th>
                                <th>Land Only</th>
                                <th>Land & Air</th>
                            </tr>
                            <tr>
                                <td>Quad</td>
                                <td>$2,495 per person*</td>
                                <td>$4,450 per person*</td>
                            </tr>
                            <tr>
                                <td>Triple</td>
                                <td>$2,595 per person</td>
                                <td>$4,550 per person</td>
                            </tr>
                            <tr>
                                <td>Double</td>
                                <td>$2,950 per person</td>
                                <td>$4,905 per person</td>
                            </tr>
                        </table>
                    </div>
                    <img className="tripsImage" src={clockTower} alt="Picture of the kaabah" />
                </div>

                <h3>Inclusions & Exclusions</h3>
                <h6>Inclusions</h6>
                <div className="bulletRow">
                    <div>
                        <ul className="tripsList">
                            <li className="scheduleListItem">Roundtrip international airfare (if selected ground and air package)</li>
                            <li className="scheduleListItem">Accommodations in Madinah and Makkah</li>
                            <li className="scheduleListItem">Daily open buffet breakfast at hotels</li>
                            <li className="scheduleListItem">Ground transport to hotels and airports</li>
                            <li className="scheduleListItem">Haramain train/bus transfer from Madinah to Makkah</li>
                            <li className="scheduleListItem">Guided tours of Madinah and Makkah Mazarat</li>
                            <li className="scheduleListItem">Badr and Taif tour</li>
                            <li className="scheduleListItem">Virtual information session prior to departure</li>
                            <li className="scheduleListItem">Umrah lecture and Khatirahs on-site</li>
                            <li className="scheduleListItem">Visa processing and visa fees, Saudi health insurance</li>
                        </ul>

                        <h6>Exclusions</h6>
                        <ul className="tripsList">
                            <li className="scheduleListItem">Lunches and dinners</li>
                            <li className="scheduleListItem">Cost of PCR test on return</li>
                            <li className="scheduleListItem">Cost of Saudi SIM card (if applicable)</li>
                            <li className="scheduleListItem">Optional tours</li>
                            <li className="scheduleListItem">*In case of any quarantine due to COVID, all expenses are not included for any days</li>
                        </ul>
                    </div>
                    <img className="tripsImage" src={taif} alt="Picture of taif" />
                </div>

                <h6>Note</h6>
                <ul className="tripsList">
                    <li className="scheduleListItem">All travelers, regardless of age, must be fully vaccinated.</li>
                    <li className="scheduleListItem">Based on current vaccination protocols, individuals aged 12 years and above are eligible.</li>
                </ul>

                <div className="breakSmall" />
                <h5>Join us for this incredible opportunity to perform Umrah, immerse yourself in the rich history of Islam, and create memories that will last a lifetime. Don't miss out on this life-changing experience!</h5>
                <div className="breakSmall" />
                <h3>Contact Us</h3>
                <p>For any additional information, please feel free to contaxt us at email@email.org!</p>

            </div>
       
        </div>
    );
};