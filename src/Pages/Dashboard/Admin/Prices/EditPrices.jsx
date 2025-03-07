import React, { useState, useEffect } from "react";
import Navigation from "../../../../Shared/Dashboard/Admin/NavigationAdmin.jsx";

function EditPrices() {
    const [standardPrice, setStandardPrice] = useState(19);
    const [advancedPrice, setAdvancedPrice] = useState(25);
    const [premiumPrice, setPremiumPrice] = useState(49);

    useEffect(() => {
        document.getElementById('standard-price').removeAttribute('disabled');
        document.getElementById('standard-price').removeAttribute('readonly');
    }, []);

    return (
        <>
            <Navigation/>
            <div id="content">
                <h1 className="page-name">Edit Prices</h1>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card card-price">
                                <div className="card-body card-body-price">
                                    <h4 className="card-title-price">Standard Plan</h4>
                                    <p className="card-text-price">Update the price of standard plan.</p>
                                    <div className="form-group">
                                        <label className="card-label-price" htmlFor="standard-price">Enter the Price ($):</label>
                                        <input
                                            type="number"
                                            className="card-price-input form-control"
                                            id="standard-price"
                                            value={standardPrice}
                                            onChange={(e) => setStandardPrice(e.target.value)}
                                            min="0"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn-price">Update</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card card-price">
                                <div className="card-body card-body-price">
                                    <h4 className="card-title-price">Advanced Plan</h4>
                                    <p className="card-text-price">Update the price of advanced plan.</p>
                                    <div className="form-group">
                                        <label className="card-label-price" htmlFor="advanced-price">Enter the Price ($):</label>
                                        <input
                                            type="number"
                                            className="card-price-input form-control"
                                            id="advanced-price"
                                            value={advancedPrice}
                                            onChange={(e) => setAdvancedPrice(e.target.value)}
                                            min="0"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn-price">Update</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card card-price">
                                <div className="card-body card-body-price">
                                    <h4 className="card-title-price">Premium Plan</h4>
                                    <p className="card-text-price">Update the price of premium plan.</p>
                                    <div className="form-group">
                                        <label className="card-label-price" htmlFor="premium-price">Enter the Price ($):</label>
                                        <input
                                            type="number"
                                            className="card-price-input form-control"
                                            id="premium-price"
                                            value={premiumPrice}
                                            onChange={(e) => setPremiumPrice(e.target.value)}
                                            min="0"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn-price">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditPrices;