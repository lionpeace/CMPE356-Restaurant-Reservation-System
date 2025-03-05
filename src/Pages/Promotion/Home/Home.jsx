import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCalendarCheck, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle, faFileAlt, faChartBar, faUserTag, faCalendarAlt, faUtensils, faForwardStep, faWebAwesome, faGlobe, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from "../../../Shared/Promotion/Header"; 
import Footer from "../../../Shared/Promotion/Footer";

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
            <div className="container">
                <div className="row section1aboutcontent-container">
                    <div className="col-12 section section1">
                        <div className="section1-content">
                            <img src="images/image1-1.png" alt="Section Image" className="img-fluid section-image" />
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
                                    <button className="btn btn-primary" onClick={handleSignupClick}>Try It Free</button>
                                    <button className="btn btn-secondary" onClick={handlePricingClick}>See Pricing</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row section section2">
                    <div className="col-12 containerabout">
                        <h2>Restaurant Owners: Discover What You Can Achieve with RezTable!</h2>
                        <p>Unlock seamless reservations and smarter restaurant management with rezTable! For more details, visit our <a href="/features" className="details-link">Features</a></p>
                        <div className="row about-row">
                            <div className="col-md-4 about-col section2-col">
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
                            <div className="col-md-4 about-col section2-col">
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
                            <div className="col-md-4 about-col section2-col">
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

                <div className="row section section3">
                    <div className="col-12 containerabout">
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

                <div className="row section section4">
                    <div className="col-12 containerabout">
                        <h2>Flexible pricing to match your needs, starting at $12 per month for reservations!</h2>
                        <p>No hidden fees—full features, seamless integration, and live support included <a href="/pricing" className="details-link">Explore the Prices</a></p>
                        <div className="row about-row">
                            <div className="col-md-4 about-col section2-col">
                                <div className="home-icon">
                                    <p>Starter</p>
                                </div>
                                <p className="section4title">19 $ / Month</p>
                                <p className="description">
                                Created for new or small venues that require handy tools but do not have a large number of reservations.
                                </p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Up to 50 reservations per month</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Customizable booking widget</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Basic customer database</li>
                                </ul>
                            </div>
                            <div className="col-md-4 about-col section2-col">
                                <div className="home-icon">
                                    <p>Advanced</p>
                                </div>
                                <p className="section4title">25 $ / Month</p>
                                <p className="description">
                                The ideal choice for small or rising eateries. Ideally suited for restaurants with up to 300 monthly bookings.
                                </p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" />Up to 300 reservations per month</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" />Customizable booking widget</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Advanced customer database</li>
                                </ul>
                            </div>
                            <div className="col-md-4 about-col section2-col">
                                <div className="home-icon">
                                    <p>Premium</p>
                                </div>
                                <p className="section4title">45 $ / Month</p>
                                <p className="description">
                                Larger and bustling restaurants opt for our success plan to effortlessly handle all their online reservation needs.
                                </p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Unlimited reservations</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> 24/7 priority support</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="custom-check-icon" /> Full customer database</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row section section5">
                    <div className="col-12 container">
                        <h2 className="testimonial-title">Customer experiences with rezTable</h2>
                        <Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000}>
                            <div className="testimonial-card">
                                <div className="about-stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
                                <p>
                                RezTable has truly revolutionized our reservation management process. From the moment we implemented it, the system has significantly boosted both our efficiency and customer satisfaction. It's incredibly easy to use, providing a seamless experience for both our staff and guests. The intuitive interface allows us to view all bookings in real-time, making it easy to manage reservations, cancellations, and table availability. The integration with our website and social media platforms has been a game changer, enabling customers to book directly from multiple channels. Automated email confirmations and reminders have minimized no-shows and kept everything organized. We also appreciate the platform’s ability to manage multiple locations and customize settings for each restaurant’s needs. The detailed analytics help us track occupancy trends, optimize seating arrangements, and improve service, ultimately boosting our bottom line. On top of that, the customer support team is exceptional—always available to help with quick response times, making troubleshooting easy. 
                                </p>
                                <div className="testimonial-user">
                                    <img src="images/usaflag.png" alt="USA Flag" className="flag"/>
                                    <div>
                                        <h4>Matthew</h4>
                                        <p>Miami, United States</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="about-stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
                                <p>
                                RezTable has truly revolutionized our reservation management process. From the moment we implemented it, the system has significantly boosted both our efficiency and customer satisfaction. It's incredibly easy to use, providing a seamless experience for both our staff and guests. The intuitive interface allows us to view all bookings in real-time, making it easy to manage reservations, cancellations, and table availability. The integration with our website and social media platforms has been a game changer, enabling customers to book directly from multiple channels. Automated email confirmations and reminders have minimized no-shows and kept everything organized. We also appreciate the platform’s ability to manage multiple locations and customize settings for each restaurant’s needs. The detailed analytics help us track occupancy trends, optimize seating arrangements, and improve service, ultimately boosting our bottom line. On top of that, the customer support team is exceptional—always available to help with quick response times, making troubleshooting easy. 
                                </p>
                                <div className="testimonial-user">
                                    <img src="images/canada.webp" alt="Canada Flag" className="flag"/>
                                    <div>
                                        <h4>Matt</h4>
                                        <p>Ontario, Canada</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="about-stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
                                <p>
                                RezTable has truly revolutionized our reservation management process. From the moment we implemented it, the system has significantly boosted both our efficiency and customer satisfaction. It's incredibly easy to use, providing a seamless experience for both our staff and guests. The intuitive interface allows us to view all bookings in real-time, making it easy to manage reservations, cancellations, and table availability. The integration with our website and social media platforms has been a game changer, enabling customers to book directly from multiple channels. Automated email confirmations and reminders have minimized no-shows and kept everything organized. We also appreciate the platform’s ability to manage multiple locations and customize settings for each restaurant’s needs. The detailed analytics help us track occupancy trends, optimize seating arrangements, and improve service, ultimately boosting our bottom line. On top of that, the customer support team is exceptional—always available to help with quick response times, making troubleshooting easy. 
                                </p>
                                <div className="testimonial-user">
                                    <img src="images/ukflag.png" alt="UK Flag" className="flag"/>
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

export default Home;