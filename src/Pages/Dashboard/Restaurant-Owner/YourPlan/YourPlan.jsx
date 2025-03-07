import React from "react";
import Navigation from "../../../../Shared/Dashboard/Restaurant-Owner/NavigationRestaurantOwner.jsx";

function YourPlan() {
    const standardPrice = 19;
    const advancedPrice = 25;
    const premiumPrice = 49;

    return (
        <>
            <Navigation/>
            <div id="content">
                <h1 className="page-name">Your Plan</h1>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card card-price">
                                <div className="card-body card-body-price">
                                    <h4 className="card-title-price">Standard Plan</h4>
                                    <div className="form-group">
                                        <label className="card-label-price" htmlFor="standard-price">The Price (p/m):</label>
                                        <p className="plan-price-ro">{"$ " + standardPrice}</p>
                                    </div>
                                    <button type="submit" className="btn-price">Change Your Plan</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card card-price premium">
                                <div className="card-body card-body-price">
                                    <h4 className="card-title-price">Premium Plan</h4>
                                    <div className="form-group">
                                        <label className="card-label-price" htmlFor="standard-price">The Price (p/m):</label>
                                        <p className="plan-price-ro">{"$ " + premiumPrice}</p>
                                        <p className="p-your-plan">Your plan!</p>
                                    </div>
                                    <button type="submit" className="btn-price" disabled>Change Your Plan</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card card-price">
                                <div className="card-body card-body-price">
                                    <h4 className="card-title-price">Advanced Plan</h4>
                                    <div className="form-group">
                                        <label className="card-label-price" htmlFor="standard-price">The Price (p/m):</label>
                                        <p className="plan-price-ro">{"$ " + advancedPrice}</p>
                                    </div>
                                    <button type="submit" className="btn-price">Change Your Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default YourPlan;