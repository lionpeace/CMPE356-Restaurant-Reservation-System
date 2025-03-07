import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faChartBar, faUserTag, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Section2 = () => {
    return (
        <section className="section2">
            <div className="container section2-content">
                <h2 className="section2-title">Restaurant Owners: Discover What You Can Achieve with RezTable!</h2>
                <p className="section2-description">
                    Unlock seamless reservations and smarter restaurant management with rezTable! For more details, visit our 
                    <a href="/features" className="details-link"> Features</a>.
                </p>
                <div className="row about-row">
                    <div className="col about-col section2-col">
                        <div className="home-icon">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </div>
                        <p className="section2-p">Reservation Management</p>
                        <p className="section2-description">
                            Strategically optimize your restaurant’s layout and reservation system to ensure maximum seating capacity, 
                            minimize waste of time, and create a seamless dining experience for your customers.
                        </p>
                        <ul>
                            <li className="section2-li"><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Digital dining reservation system</li>
                            <li className="section2-li"><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> All-in-one online booking platform</li>
                            <li className="section2-li"><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Effortless reservation management</li>
                        </ul>
                    </div>
                    <div className="col about-col section2-col">
                        <div className="home-icon">
                            <FontAwesomeIcon icon={faChartBar} />
                        </div>
                        <p className="section2-p">Restaurant Enhancement</p>
                        <p className="section2-description">
                            Unlock a comprehensive suite of tested marketing tools and strategies to effectively grow your restaurant business, 
                            attract more customers, boost revenue, and establish a strong brand presence with confidence.
                        </p>
                        <ul>
                            <li className="section2-li"><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Offers, promotions, and activities</li>
                            <li className="section2-li"><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Cancellation fees, payments, and deposits</li>
                            <li className="section2-li"><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Site creator and restaurant menus</li>
                        </ul>
                    </div>
                    <div className="col about-col section2-col">
                        <div className="home-icon">
                            <FontAwesomeIcon icon={faUserTag} />
                        </div>
                        <p className="section2-p">Evaluation Of Companies</p>
                        <p className="section2-description">
                            Leverage the key insights from rezTable to make data-driven decisions that fuel your restaurant's growth, 
                            streamline operations, improve customer satisfaction, and boost overall success.
                        </p>
                        <ul>
                            <li className="section2-li"><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Analytics and insightful reports</li>
                            <li className="section2-li"><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Customer database and administration</li>
                            <li className="section2-li"><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Review management and tools</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
