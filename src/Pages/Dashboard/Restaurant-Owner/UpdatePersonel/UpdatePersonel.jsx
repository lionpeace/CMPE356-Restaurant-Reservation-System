import React, { useState } from "react";
import Navigation from "../../../../Shared/Dashboard/Restaurant-Owner/NavigationRestaurantOwner.jsx";

function UpdatePersonel() {

    const personelInfo = [
        { id: 1, name: "Kendrick", surname: "Kamburoğlu", email: "kendikambur@gmail.com", phoneNumber: "+905362581905", restaurantName: "Aslan Restaurant", plan: "Premium" }
    ];

    const [selectedPersonel, setSelectedPersonel] = useState(personelInfo[0]);

    const handleChange = (event) => {
        setSelectedPersonel({ ...selectedPersonel, [event.target.name]: event.target.value });
    };

    return (
        <>
            <Navigation />
            <div id="content">
                <h1 className="page-name">Update Personel Information</h1>
                <div className="update-restaurant-div mb-4">
                    <form className="update-restaurant-form">

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                name="name" 
                                value={selectedPersonel.name} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="surname">Surname</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="surname" 
                                name="surname" 
                                value={selectedPersonel.surname} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                value={selectedPersonel.email} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="phoneNumber" 
                                name="phoneNumber" 
                                value={selectedPersonel.phoneNumber} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="restaurantName">Restaurant Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="restaurantName" 
                                name="restaurantName" 
                                value={selectedPersonel.restaurantName} 
                                onChange={handleChange} 
                                readOnly
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="plan">Plan</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="plan" 
                                name="plan" 
                                value={selectedPersonel.plan} 
                                onChange={handleChange} 
                                readOnly
                            />
                        </div>

                        <div className="btn-div-update-restaurant">
                            <button type="submit" className="btn-update-restaurant">Update Personel Info</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default UpdatePersonel;
