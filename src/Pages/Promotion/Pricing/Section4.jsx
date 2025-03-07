import React from 'react';

const Section4 = () => {
    return (
        <section className='section4'>
            <div className="container">
                <h2 className='section4-title'>Choose the best plan for your reservation plan</h2>
                <div className="price-row">
                    <div className="price-card">
                        <p>Starter</p>
                        <h3>19 $ <span>/ Month</span></h3>
                        <p className="description">Created for new or small venues that require handy tools but do not have a large number of reservations.</p>
                        <ul>
                            <li>Up to 50 reservations per month</li>
                            <li>Email support</li>
                            <li>Basic analytics</li>
                            <li>Customizable booking widget</li>
                            <li>Access to mobile app</li>
                            <li>Basic customer database</li>
                        </ul>
                    </div>
                    <div className="price-card">
                        <p>Advanced</p>
                        <h3>25 $ <span>/ Month</span></h3>
                        <p className="description">The ideal choice for small or rising eateries. Ideally suited for restaurants with up to 300 monthly bookings.</p>
                        <ul>
                            <li>Up to 300 reservations per month</li>
                            <li>Priority email support</li>
                            <li>Advanced analytics</li>
                            <li>Customizable booking widget</li>
                            <li>Access to mobile app</li>
                            <li>Advanced customer database</li>
                        </ul>
                    </div>
                    <div className="price-card">
                        <p>Premium</p>
                        <h3>45 $ <span>/ Month</span></h3>
                        <p className="description">Larger and bustling restaurants opt for our success plan to effortlessly handle all their online reservation needs. Take advantage of our cost effective annual plans.</p>
                        <ul>
                            <li>Unlimited reservations</li>
                            <li>24/7 priority support</li>
                            <li>Comprehensive analytics</li>
                            <li>Customizable booking widget</li>
                            <li>Access to mobile app</li>
                            <li>Full customer database</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;