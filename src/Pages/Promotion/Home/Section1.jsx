import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Section1 = () => {
    const handleSignupClick = () => {
        // Signup click handler
    };

    const handlePricingClick = () => {
        // Pricing click handler
    };

    return (
        <section className='section1'>
            <div className="colored-div">
                <div className="container section1-content">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-1">
                            <img src="/images/2.png" alt="Section Image" className="img-fluid section-image" />
                        </div>
                        <div className="col-md-6 about-col section1-col order-md-2">
                            <h2 className="title text-center">Table Booking System For Advanced Restaurants</h2>
                            <p className="description text-center">
                                Boost sales, enhance customer satisfaction, and minimize waste of time with an efficient booking system. 
                            </p>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Digital reservation book for the team, making it easy to manage all bookings</li>
                                <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Seamless online reservation access, ensuring a smooth booking experience</li>
                                <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Manager's data and reports, providing essential analytics for decision-making</li>
                            </ul>
                            <div className="button-container">
                                <button className="btn btn-primary" onClick={handleSignupClick}>Try It Free</button>
                                <button className="btn btn-secondary" onClick={handlePricingClick}>See Pricing</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;