import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <h3><span>Rez</span>al</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                        <div className="footer-icons">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 ft-2">
                        <ul>
                            <li className="nav-item">
                                <a className="footer-a" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="footer-a" href="/pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="footer-a" href="/features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="footer-a" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="footer-a" href="/signup">Try It Free</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 ft-3">
                        <p><i className="fas fa-phone-volume"></i> +90 212 345 67 89</p>
                        <p><i className="fas fa-envelope"></i> rezal@gmail.com</p>
                        <p><i className="fas fa-paper-plane"></i> Istanbul, Turkey.</p>
                    </div>
                    <p className="lasttext">© 2025 Rezal. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;