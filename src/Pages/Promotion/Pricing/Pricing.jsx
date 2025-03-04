import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../../../Shared/Promotion/Header.jsx";
import Footer from "../../../Shared/Promotion/Footer.jsx";
import "../../../../public/Libs/css/Promotion/Pricing/Pricing.css";

const Pricing = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleAddToCart = () => {
        navigate('/checkout');
    };

    return (
        <>
            <Header></Header>
            <div className="containerpricing">
                <h2>Choose the best plan for your reservation plan</h2>
                <p className="sub-descriptionpricing">The Growth and Success membership levels offer complete access to all system functions, allowing for maximum productivity with no functional constraints.</p>
                <div className="price-rowpricing">
                   <div className="price-colpricing">
                      <p>Starter</p>
                      <h3>19 $ <span>/ Month</span></h3>
                      <p className="descriptionpricing">Created for new or small venues that require handy tools but do not have a large number of reservations. </p>
                      <ul>
                        <li>Up to 50 reservations per month</li>
                        <li>Email support</li>
                        <li>Basic analytics</li>
                        <li>Customizable booking widget</li>
                        <li>Access to mobile app</li>
                        <li>Basic customer database</li>
                      </ul>
                      <button onClick={handleAddToCart}>Add To Cart</button>
                   </div>
                   <div className="price-colpricing">
                      <p>Advanced</p>
                      <h3>25 $ <span>/ Month</span></h3>
                      <p className="descriptionpricing">The ideal choice for small or rising eateries.  Ideally suited for restaurants with up to 300 monthly bookings.</p>
                      <ul>
                        <li>Up to 300 reservations per month</li>
                        <li>Priority email support</li>
                        <li>Advanced analytics</li>
                        <li>Customizable booking widget</li>
                        <li>Access to mobile app</li>
                        <li>Advanced customer database</li>
                      </ul>
                      <button onClick={handleAddToCart}>Add To Cart</button>
                   </div>
                   <div className="price-colpricing">
                      <p>Premium</p>
                      <h3>45 $ <span>/ Month</span></h3>
                      <p className="descriptionpricing">Larger and bustling restaurants opt for our success plan to effortlessly handle all their online reservation needs. Take advantage of our cost effective annual plans.</p>
                      <ul>
                        <li>Unlimited reservations</li>
                        <li>24/7 priority support</li>
                        <li>Comprehensive analytics</li>
                        <li>Customizable booking widget</li>
                        <li>Access to mobile app</li>
                        <li>Full customer database</li>
                      </ul>
                      <button onClick={handleAddToCart}>Add To Cart</button>
                   </div>
                </div>
            </div>

            <section className="testimonials-sectionpricing">
                <h2>Trusted by restaurants, bars and clubs in 50+ countries</h2>
                <div className="testimonials-containerpricing">
                    <div className="testimonial-cardpricing">
                        <div className="starspricing">
                            <span className="starpricing">&#9733;</span>
                            <span className="starpricing">&#9733;</span>
                            <span className="starpricing">&#9733;</span>
                            <span className="starpricing">&#9733;</span>
                            <span className="starpricing">&#9733;</span>
                        </div>
                        <p className="testimonial-textpricing">
                            "It was relatively easy to set up and embed into our website. 
                            The online users seemed to get on with it quite well and we never 
                            heard from customers saying they didn't understand it."
                        </p>
                        <p className="authorpricing">Bruce M.</p>
                    </div>

                    <div className="testimonial-cardpricing">
                        <div className="starspricing">
                            <span className="starpricing">&#9733;</span>
                            <span className="starpricing">&#9733;</span>
                            <span className="starpricing">&#9733;</span>
                            <span className="starpricing">&#9733;</span>
                            <span className="starpricing">&#9733;</span>
                        </div>
                        <p className="testimonial-textpricing">
                            "Simple to use and manage information from anywhere and on any device. 
                            Our restaurant does not need extra staff, because waiting staff is fully 
                            responsible for booking from any location. 
                            System is easy to use for team members, 
                            as it is easy to see gaps between reservations and book more tables!"
                        </p>
                        <p className="authorpricing">Vish M. - Ukraine</p>
                    </div>

                    <div className="testimonialpricing-cardpricing">
                        <div className="starspricing">
                            <span className="starpricing">&#9733;</span>
                            <span className="starpricing">&#9733;</span>
                            <span className="starpricing">&#9733;</span>
                            <span className="starpricing">&#9733;</span>
                            <span className="starpricing">&#9733;</span>
                        </div>
                        <p className="testimonial-textpricing">
                            "This system really helped cut down on no shows. 
                            It had so many useful features to fully control our reservation. 
                            I loved that they hosted it so it was less things on my to-do. 
                            Don't think our way of doing it didn't do the job, but it was definitely 
                            less professional than this. The team responds to any questions I had within the hour!"
                        </p>
                        <p className="authorpricing">Brett F.</p>
                    </div>
                </div>
            </section>

            <section className="features-sectionpricing">
                <h2>Our Features</h2>
                <p className="section-subtitlepricing">
                    We offer a variety of tools to streamline your reservation process and enhance customer satisfaction.
                </p>

                <div className="features-gridpricing">
                    <div className="feature-cardpricing">
                        <img 
                            src="/images/world icon.ico" 
                            alt="Table Reservations Icon" 
                            className="feature-icon"
                        />
                        <h3>Table reservations online</h3>
                        <p>Online reservations will save you valuable time and allow you accept reservations even when you are closed.</p>
                    </div>

                    <div className="feature-cardpricing">
                        <img 
                            src="/images/bell icon.ico" 
                            alt="Automatic Notifications Icon" 
                            className="feature-icon"
                        />
                        <h3>Automatic notifications</h3>
                        <p>Send real time email or SMS notifications for you and your clients automatically and in time.</p>
                    </div>

                    <div className="feature-cardpricing">
                        <img 
                            src="/images/calendar icon.ico" 
                            alt="Reservation Management Icon" 
                            className="feature-icon"
                        />
                        <h3>Reservation management</h3>
                        <p>Manage all important reservation tools including calendar, floor plan and reservation updates.</p>
                    </div>

                    <div className="feature-cardpricing">
                        <img 
                            src="/images/user icon.ico" 
                            alt="Guest Database Icon" 
                            className="feature-icon"
                        />
                        <h3>Guest database</h3>
                        <p>Manage all important guest information with ease. Segment, export or print your lists. Know your loyal clients better.</p>
                    </div>

                    <div className="feature-cardpricing">
                        <img 
                            src="/images/payment icon.ico" 
                            alt="Payment System Icon" 
                            className="feature-icon"
                        />
                        <h3>Payment system</h3>
                        <p>Secure online payments with a card or ask for a deposit on most busy days.</p>
                    </div>

                    <div className="feature-cardpricing">
                        <img 
                            src="/images/data icon.ico" 
                            alt="Reports and Data Icon" 
                            className="feature-icon"
                        />
                        <h3>Reports and data</h3>
                        <p>Easily access important information on your restaurant performance, improve your service and plan ahead.</p>
                    </div>

                    <div className="feature-cardpricing">
                        <img 
                            src="/images/restuarant icon.ico" 
                            alt="Restaurant Website Icon" 
                            className="feature-icon"
                        />
                        <h3>Restaurant website</h3>
                        <p>We include a free website for your restaurant with important information for your clients to find you online.</p>
                    </div>

                    <div className="feature-cardpricing">
                        <img 
                            src="/images/chat icon.ico" 
                            alt="Live Chat Support Icon" 
                            className="feature-icon"
                        />
                        <h3>Live chat support</h3>
                        <p>You will always have a professional support team ready to help you with the booking system.</p>
                    </div>

                    <div className="feature-cardpricing">
                        <img 
                            src="/images/chef icon.ico" 
                            alt="Local Restaurant Guide Icon" 
                            className="feature-icon"
                        />
                        <h3>Local restaurant guide</h3>
                        <p>Get more exposure online with Tablein restaurant guides and booking portal. Effective in selected markets.</p>
                    </div>
                </div>
            </section>

            <section className="faq-sectionpricing">
                <h1>Frequently Asked Questions</h1>
                
                <div className={`faq-itempricing ${activeIndex === 0 ? 'active open' : ''}`} onClick={() => toggleFAQ(0)}>
                  <h2>What are the setup and integration fees?</h2>
                  <span className="toggle-icon">&#9650;</span>
                  <p>We don’t charge any extra fees for setup or integration. Our team is ready to assist you, and if you need help integrating with your website, our developers are here to support you at no additional cost. We’re dedicated to making the process simple and cost-effective for you.</p>
                </div>
                
                <div className={`faq-itempricing ${activeIndex === 1 ? 'active open' : ''}`} onClick={() => toggleFAQ(1)}>
                  <h2>What features are included in the Growth subscription plan?</h2>
                  <span className="toggle-icon">&#9650;</span>
                  <p>Our Growth subscription plan includes advanced reservation management, custom analytics, and priority support to help your business thrive.</p>
                </div>
                
                <div className={`faq-itempricing ${activeIndex === 2 ? 'active open' : ''}`} onClick={() => toggleFAQ(2)}>
                  <h2>What happens when the 150 reservation limit is reached in the Growth plan?</h2>
                  <span className="toggle-icon">&#9650;</span>
                  <p>Once the 150 reservation limit is reached, our system will automatically notify you and suggest an upgrade to a higher plan to accommodate your growing needs.</p>
                </div>
                
                <div className={`faq-itempricing ${activeIndex === 3 ? 'active open' : ''}`} onClick={() => toggleFAQ(3)}>
                  <h2>Can I upgrade or downgrade my plan at any time?</h2>
                  <span className="toggle-icon">&#9650;</span>
                  <p>Yes, you can upgrade or downgrade your plan at any time. Simply contact our support team or manage your subscription via your account dashboard.</p>
                </div>
                
                <div className={`faq-itempricing ${activeIndex === 4 ? 'active open' : ''}`} onClick={() => toggleFAQ(4)}>
                  <h2>How much does SMS cost?</h2>
                  <span className="toggle-icon">&#9650;</span>
                  <p>SMS costs vary based on usage and region. Please check our pricing details or contact our sales team for a custom quote.</p>
                </div>
                
                <div className={`faq-itempricing ${activeIndex === 5 ? 'active open' : ''}`} onClick={() => toggleFAQ(5)}>
                  <h2>Do you offer a free trial period?</h2>
                  <span className="toggle-icon">&#9650;</span>
                  <p>Yes, we offer a 14-day free trial so you can experience the full functionality of our system without any commitment.</p>
                </div>
                
                <div className={`faq-itempricing ${activeIndex === 6 ? 'active open' : ''}`} onClick={() => toggleFAQ(6)}>
                  <h2>What payment methods do you accept?</h2>
                  <span className="toggle-icon">&#9650;</span>
                  <p>We accept major credit cards, PayPal, and bank transfers. For annual subscriptions, special payment plans may be available.</p>
                </div>
                
                <div className={`faq-itempricing ${activeIndex === 7 ? 'active open' : ''}`} onClick={() => toggleFAQ(7)}>
                  <h2>How secure is my data?</h2>
                  <span className="toggle-icon">&#9650;</span>
                  <p>Your data is secured using industry-standard encryption and is regularly audited to ensure the highest level of protection.</p>
                </div>
                
                <div className={`faq-itempricing ${activeIndex === 8 ? 'active open' : ''}`} onClick={() => toggleFAQ(8)}>
                  <h2>What kind of support do you provide?</h2>
                  <span className="toggle-icon">&#9650;</span>
                  <p>We provide 24/7 email support, live chat, and a dedicated account manager for premium subscriptions to ensure your issues are resolved quickly.</p>
                </div>
                
                <div className={`faq-itempricing ${activeIndex === 9 ? 'active open' : ''}`} onClick={() => toggleFAQ(9)}>
                  <h2>Can I cancel my subscription at any time?</h2>
                  <span className="toggle-icon">&#9650;</span>
                  <p>Yes, you can cancel your subscription at any time with no hidden cancellation fees. Your access will remain active until the end of your current billing cycle.</p>
                </div>
                
                <div className={`faq-itempricing ${activeIndex === 10 ? 'active open' : ''}`} onClick={() => toggleFAQ(10)}>
                  <h2>Is there a discount for annual subscriptions?</h2>
                  <span className="toggle-icon">&#9650;</span>
                  <p>Yes, we offer discounts for annual subscriptions, allowing you to save significantly compared to monthly billing.</p>
                </div>
                
            </section>

            <Footer></Footer>
        </>
    );
};

export default Pricing;