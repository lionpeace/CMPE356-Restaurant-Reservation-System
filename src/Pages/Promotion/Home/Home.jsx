import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../../../Shared/Promotion/Header.jsx";
import Footer from "../../../Shared/Promotion/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCalendarCheck, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle, faFileAlt, faChartBar, faUserTag, faCalendarAlt, faUtensils, faForwardStep, faWebAwesome, faGlobe, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/signup');
    };

    const handlePricingClick = () => {
        navigate('/pricing');
    };

    return (
        <>
            <Header />
            <div className="section1aboutcontent-container">
                <div className="section section1">
                    <div className="section1-content">
                        <img src="images/image1-1.png" alt="Section Image" className="section-image" />
                        <div className="about-col section1-col">
                            <p className="title">Table Booking System For Advanced Restaurants</p>
                            <p className="description">
                                Boost sales, enhance customer satisfaction, and minimize waste of time with an efficient booking system. 
                                Optimize operations, improve workflow, and provide a seamless customer experience. Implement smart growth strategies 
                                for long-term success, boost productivity, and watch your business enhancement!
                            </p>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Digital reservation book for the team, making it easy to manage all bookings</li>
                                <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Seamless online reservation access, ensuring a smooth booking experience</li>
                                <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Manager's data and reports, providing essential analytics for decision-making</li>
                            </ul>
                            <div className="button-container">
                                <button className="btn-primary" onClick={handleSignupClick}>Try It Free</button>
                                <button className="btn-secondary" onClick={handlePricingClick}>See Pricing</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section section2">
                    <div className="containerabout">
                        <h2>Restaurant Owners: Discover What You Can Achieve with RezTable!</h2>
                        <p>Unlock seamless reservations and smarter restaurant management with rezTable! For more details, visit our <a href="/features" className="details-link">Features</a></p>
                        <div className="about-row">
                            <div className="about-col section2-col">
                                <div className="home-icon">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                </div>
                                <p className="title">Reservation Management</p>
                                <p className="description">
                                    Strategically optimize your restaurant’s layout and reservation system to ensure maximum seating capacity, minimize waste of time, 
                                    and create a seamless dining experience for your customers.
                                </p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Digital dining reservation system</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> All-in-one online booking platform</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Effortless reservation management</li>
                                </ul>
                            </div>
                            <div className="about-col section2-col">
                                <div className="home-icon">
                                    <FontAwesomeIcon icon={faChartBar} />
                                </div>
                                <p className="title">Restaurant Enhancement</p>
                                <p className="description">
                                    Unlock a comprehensive suite of tested marketing tools and strategies to effectively grow your restaurant business, attract more customers, 
                                    boost revenue, and establish a strong brand presence with confidence.
                                </p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Offers, promotions, and activities</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Cancellation fees, payments, and deposits</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Site creator and restaurant menus</li>
                                </ul>
                            </div>
                            <div className="about-col section2-col">
                                <div className="home-icon">
                                    <FontAwesomeIcon icon={faUserTag} />
                                </div>
                                <p className="title">Evaluation Of Companies</p>
                                <p className="description">
                                    Leverage the key insights from rezTable to make data-driven decisions that fuel your restaurant's growth, streamline operations, improve customer satisfaction, and boost overall success.
                                </p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Analytics and insightful reports</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Customer database and administration</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Review management and tools</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section section3">
                    <div className="containerabout">
                        <h2>Join rezTable Today – Simplify Bookings, Start Accepting Reservations!</h2>
                        <p>Get started absolutely free for 7 days. No credit card required. No risk. If you have questions <a href="/contact" className="details-link">Contact Us</a></p>
                        <div className="table-container">
                            <div className="table-header">
                                <div className="table-column">Integration Features</div>
                                <div className="table-column">Customization Options</div>
                                <div className="table-column">Automation & Notifications</div>
                            </div>
                            <div className="table-body">
                                <div className="table-row">
                                    <div className="table-cell">Google Business Link Integration</div>
                                    <div className="table-cell">Calendar-Based Reservation View</div>
                                    <div className="table-cell">Automated Email/SMS Confirmation</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">Integration with Google Reservations</div>
                                    <div className="table-cell">List Format Reservation Display</div>
                                    <div className="table-cell">Automated Email/SMS Reminder</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">Seamless Facebook Connectivity</div>
                                    <div className="table-cell">Interactive Floor Plan for Reservations</div>
                                    <div className="table-cell">Automated Email/SMS Feedback Request</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">Effortless Instagram Integration</div>
                                    <div className="table-cell">Light and Dark Mode Toggle</div>
                                    <div className="table-cell">Star Rating Request via Email</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">Michelin Guide Reservation Support</div>
                                    <div className="table-cell">Extended Reservation Timeframe</div>
                                    <div className="table-cell">Pending Reservation Approval Alerts</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">WordPress Booking Integration</div>
                                    <div className="table-cell">Custom Event Reservation Window</div>
                                    <div className="table-cell">Automated Cancellation Notification</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">Squarespace Compatibility</div>
                                    <div className="table-cell">Feedback Dashboard with Reply Feature</div>
                                    <div className="table-cell">Optional Edit Link for Reservation Modifications</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">Wix Reservation Management</div>
                                    <div className="table-cell">Table Locking for Reservation Management</div>
                                    <div className="table-cell">Payment Request Email for Confirmation</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">Webflow Booking System</div>
                                    <div className="table-cell">Guest and Reservation History Tracker</div>
                                    <div className="table-cell">Waiting List Join Notification</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">Hostinger Platform Integration</div>
                                    <div className="table-cell">Advanced Reservation Search Tool</div>
                                    <div className="table-cell">Table Ready Notification via SMS</div>
                                </div>
                                <div className="table-row">
                                    <div className="table-cell">Universal Page Builder Compatibility</div>
                                    <div className="table-cell">Filtering Options for Reservations</div>
                                    <div className="table-cell">No-Show Reservation Alert via SMS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section section4">
                    <div className="containerabout">
                        <h2>Restaurant Owners: Discover What You Can Achieve with RezTable!</h2>
                        <p>Unlock seamless reservations and smarter restaurant management with rezTable! For more details, visit our <a href="/features" className="details-link">Features</a></p>
                        <div className="about-row">
                            <div className="about-col section2-col">
                                <div className="home-icon">
                                    <p>Starter</p>
                                </div>
                                <p className="title">19 $ / Month</p>
                                <p className="description">
                                    Strategically optimize your restaurant’s layout and reservation system to ensure maximum seating capacity, minimize waste of time, 
                                    and create a seamless dining experience for your customers.
                                </p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Digital dining reservation system</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> All-in-one online booking platform</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Effortless reservation management</li>
                                </ul>
                            </div>
                            <div className="about-col section2-col">
                                <div className="home-icon">
                                    <p>Advanced</p>
                                </div>
                                <p className="title">25 $ / Month</p>
                                <p className="description">
                                    Unlock a comprehensive suite of tested marketing tools and strategies to effectively grow your restaurant business, attract more customers, 
                                    boost revenue, and establish a strong brand presence with confidence.
                                </p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Offers, promotions, and activities</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Cancellation fees, payments, and deposits</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Site creator and restaurant menus</li>
                                </ul>
                            </div>
                            <div className="about-col section2-col">
                                <div className="home-icon">
                                    <p>Premium</p>
                                </div>
                                <p className="title">45 $ / Month</p>
                                <p className="description">
                                    Leverage the key insights from rezTable to make data-driven decisions that fuel your restaurant's growth, streamline operations, improve customer satisfaction, and boost overall success.
                                </p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Analytics and insightful reports</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Customer database and administration</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Review management and tools</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section section5">
                    <div className="container">
                        <h2 className="testimonial-title">Customer experiences with Tablein</h2>
                        <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000}>
                            <div className="testimonial-card">
                                <div className="about-stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
                                <p>
                                    Tablein has revolutionized our reservation management. The platform is incredibly easy to use and has made managing reservations a breeze.
                                    The automated reminders have significantly reduced no-shows. Highly recommend Tablein to any restaurant!
                                </p>
                                <div className="testimonial-user">
                                    <img src="us-flag.png" alt="USA Flag" className="flag"/>
                                    <div>
                                        <h4>Matthew</h4>
                                        <p>Miami, United States</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="about-stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
                                <p>
                                    Tablein has completely transformed the way we handle reservations at our restaurant. The interface is incredibly user-friendly, making it easy for our staff to manage bookings efficiently.
                                </p>
                                <div className="testimonial-user">
                                    <img src="canada-flag.png" alt="Canada Flag" className="flag"/>
                                    <div>
                                        <h4>Matt</h4>
                                        <p>Ontario, Canada</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="about-stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
                                <p>
                                    Switching to Tablein was one of the best decisions we’ve made for our restaurant. The system is intuitive and offers all the features we need.
                                </p>
                                <div className="testimonial-user">
                                    <img src="uk-flag.png" alt="UK Flag" className="flag"/>
                                    <div>
                                        <h4>Gabriel</h4>
                                        <p>Liverpool, United Kingdom</p>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;