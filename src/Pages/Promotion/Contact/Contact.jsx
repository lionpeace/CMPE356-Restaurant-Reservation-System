import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; //npm install @fortawesome/fontawesome-free
import Header from "../../../Shared/Promotion/Header.jsx";
import Footer from "../../../Shared/Promotion/Footer.jsx";
import "../../../../public/Libs/css/Promotion/Contact/Contact.css";

const Contact = () => {
    return (
        <>
    <link rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
          integrity="sha384-NvKbDTEnL+A8F/AA5Tc5kmMLSJHUO868P+lDtTpJIeQdGYaUIuLr4lVGOEA1OcMy" 
          crossOrigin="anonymous" />

            <Header />
            <div>
                <section className="contact">
                    <div className="content">
                        <h2>Contact Us</h2>
                        <p>For any questions or inquiries, please contact us below.</p>
                    </div>
                    <div className="containercontact">
                        <div className="contactInfo">
                            <div className="contanctbox">
                                <div className="contactIcon">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <div className="textcontact">
                                        <h3>Address</h3>
                                        <p>34 İstanbul, Bakırköy, Türkiye</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contanctbox">
                                <div className="contactIcon">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <div className="textcontact">
                                        <h3>Phone</h3>
                                        <p>0535 817 06 01</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="contanctbox">
                                <div className="contactIcon">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <div className="textcontact">
                                        <h3>Email</h3>
                                        <p>yigitavar@hotmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contactForm">
                            <form>
                                <h2>Send Message</h2>
                                <div className="inputBoxContact">
                                    <input type="text" name="" required="required" />
                                    <span>Full Name</span>
                                </div>
                                <div className="inputBoxContact">
                                    <input type="text" name="" required="required" />
                                    <span>Email</span>
                                </div>
                                <div className="inputBoxContact">
                                    <textarea required="required"></textarea>
                                    <span>Type your Message...</span>
                                </div>
                                <div className="inputBoxContact">
                                    <input type="submit" name="" value="Send" />
                                </div>
                            </form>
                        </div>     
                    </div>
                </section> 
            </div>
            <Footer />
        </>
    );
};

export default Contact;