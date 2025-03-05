import React, { useState } from 'react';
import Header from "../../../Shared/Promotion/Header"; 
import Footer from "../../../Shared/Promotion/Footer";

const Checkout = () => {
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value.trim();
        const email = form.email.value.trim();
        const address = form.address.value.trim();
        const city = form.city.value.trim();
        const state = form.state.value.trim();
        const zipCode = form.zipCode.value.trim();
        const cardNumber = form.cardNumber.value.trim();
        const expMonth = form.expMonth.value;
        const expYear = form.expYear.value;
        const cvv = form.cvv.value.trim();

        if (!fullName || !email || !address || !city || !state || !zipCode || !cardNumber || !expMonth || !expYear || !cvv) {
            setError('Please fill out all required fields.');
            return;
        }

        if (cardNumber.length !== 16) {
            setError('Card number must be 16 digits.');
            return;
        }

        setError('');
        // Form submission logic here
    };

    return (
        <>
            <Header />
            <div className="checkout-wrapper">
                <div className="containerchk">
                    <form onSubmit={handleSubmit}>
                        <div className="chkrow">
                            <div className="chkcolumn">
                                <h3 className="chktitle">Billing Address</h3>
                                <div className="chkinput-box">
                                    <span>Full Name: </span>
                                    <input type="text" name="fullName" placeholder="Yiğit Avar" />
                                </div>
                                <div className="chkinput-box">
                                    <span>Email: </span>
                                    <input type="email" name="email" placeholder="yigitavar@example.com" />
                                </div>
                                <div className="chkinput-box">
                                    <span>Address: </span>
                                    <input type="text" name="address" placeholder="Room-Street-Locale" />
                                </div>
                                <div className="chkinput-box">
                                    <span>City: </span>
                                    <input type="text" name="city" placeholder="İstanbul" />
                                </div>
                                <div className="chkflex">
                                    <div className="chkinput-box">
                                        <span>State: </span>
                                        <input type="text" name="state" placeholder="Bakırköy" />
                                    </div>
                                    <div className="chkinput-box">
                                        <span>Zip Code: </span>
                                        <input type="number" name="zipCode" placeholder="34" />
                                    </div>
                                </div>
                            </div>

                            <div className="chkcolumn">
                                <h3 className="chktitle">Payment</h3>
                                <div className="chkinput-box">
                                    <span>Cards Accepted: </span>
                                    <img src="/images/cards.ico" alt="cards" />
                                </div>
                                <div className="chkinput-box">
                                    <span>Name on Card: </span>
                                    <input type="text" name="cardName" placeholder="Mr. Yiğit Avar" />
                                </div>
                                <div className="chkinput-box">
                                    <span>Credit Card Number: </span>
                                    <input type="number" name="cardNumber" placeholder="1111 2222 3333 4444" />
                                </div>
                                <div className="chkinput-box">
                                    <span>Exp. Month: </span>
                                    <select name="expMonth" defaultValue="">
                                        <option value="" disabled hidden>Select Month</option>
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                                            <option key={month} value={month}>{month}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="chkflex">
                                    <div className="chkinput-box">
                                        <span>Exp. Year: </span>
                                        <select name="expYear" defaultValue="">
                                            <option value="" disabled hidden>Select Year</option>
                                            {Array.from({ length: 11 }, (_, i) => 2025 + i).map(year => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="chkinput-box">
                                        <span>CVV: </span>
                                        <input type="number" name="cvv" placeholder="123" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <div className="terms">
                            <p>By making a payment, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
                            <label>
                                <input type="checkbox" />
                                I want to receive emails about promotions and updates.
                            </label>
                        </div>

                        <button type="submit" className="btnchk">Place Order</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;