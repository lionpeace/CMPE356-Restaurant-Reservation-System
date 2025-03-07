import React, { useState } from "react";
import Navigation from "../../../../Shared/Dashboard/Manager/NavigationManager.jsx";

function ApproveRequest() {

    const request = [
        { id: 1, restaurantName: "Roof Meze 360", cuisine: "Turkish", location: "Istanbul, Turkey", website: "https://roofmezze360.com", email: "roofmeze@outlook.com", phone: "+902645434456", restaurantOwner: "Murat Celal", sex: "Male", hoursOfOperation: "08:00 - 23:00", dressCode: "-", parkingDetails: "Having a parking lot" } 
    ];

    const cuisines = [
        { id: 1, cuisineName: "Turkish Food", restaurantCount: 143 }
    ];

    const locations = [
        { id: 1, city: "Istanbul", country: "Turkey", restaurantCount: 143 }
    ];

    const sex = [
        { id: 1, sexName: "Male" },
        { id: 2, sexName: "Female" }
    ];

    const [selectedRequest, setSelectedRequest] = useState(request[0]);

    const handleRequestChange = (event) => {
        const requestId = parseInt(event.target.value);
        const foundRequest = request.find(r => r.id === requestId);
        setSelectedRequest(foundRequest);
    };

    const handleChange = (event) => {
        setSelectedRequest({ ...selectedRequest, [event.target.name]: event.target.value });
    };

    return (
        <>
            <Navigation />
            <div id="content">
                <h1 className="page-name">Approve Request</h1>
                <div className="approve-request-div mb-4">
                    <form className="approve-request-form">

                        <div className="form-group">
                            <label htmlFor="restaurantName">Restaurant Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="restaurantName" 
                                name="restaurantName" 
                                value={selectedRequest.restaurantName} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Choose the Cuisine</label>
                            <select 
                                className="form-select form-control bold-select" 
                                name="cuisine" 
                                value={selectedRequest.cuisine} 
                                onChange={handleChange} 
                                required
                            >
                                {cuisines.map((cuisine) => (
                                    <option key={cuisine.id} value={cuisine.cuisineName}>
                                        {cuisine.cuisineName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Choose the Location</label>
                            <select 
                                className="form-select form-control bold-select" 
                                name="location" 
                                value={selectedRequest.location} 
                                onChange={handleChange} 
                                required
                            >
                                {locations.map((location) => (
                                    <option key={location.id} value={`${location.city}, ${location.country}`}>
                                        {location.city}, {location.country}
                                    </option>
                                ))}

                                

                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="website">Website</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="website" 
                                name="website" 
                                value={selectedRequest.website} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                value={selectedRequest.email} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input 
                                type="tel" 
                                className="form-control" 
                                id="phone" 
                                name="phone" 
                                value={selectedRequest.phone} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="restaurantOwner">Restaurant Owner</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="restaurantOwner" 
                                value={selectedRequest.restaurantOwner} 
                                readOnly 
                            />
                        </div>

                        <div className="form-group">
                            <label>Sex</label>
                            <select 
                                className="form-select form-control bold-select" 
                                name="sex"
                                value={selectedRequest.sex}
                            >
                                {sex.map((sex) => (
                                    <option key={sex.id} value={`${sex.sexName}`}>
                                        {sex.sexName}
                                    </option>
                                ))}

                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="hoursOfOperation">Hours of Operation</label>
                            <input 
                                type="text"
                                className="form-control" 
                                id="hoursOfOperation"
                                value={selectedRequest.hoursOfOperation}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dressCode">Dress Code</label>
                            <input 
                                type="text"
                                className="form-control" 
                                id="dressCode"
                                value={selectedRequest.dressCode}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="parkingDetails">Parking Details</label>
                            <input 
                                type="text"
                                className="form-control" 
                                id="parkingDetails"
                                value={selectedRequest.parkingDetails}
                                required
                            />
                        </div>
                        
                        <label htmlFor="parkingDetails">Restaurant Documentation</label>
                        <div className="form-group text-center">
                            <iframe
                                src="/pdf/menu.pdf"
                                width="100%"
                                height="400px"
                                style={{ border: 'none' }}
                            />
                        </div>
                        

                        

                        <div className="form-check text-center pt-3">
                            <input className="form-check-input" type="checkbox" id="ownerApprove" required />
                            <label className="form-check-label" htmlFor="ownerApprove">
                                I reviewed all the information, called the client and got the necessary approval.
                            </label>
                        </div>

                        <div className="btn-div-approve-request">
                            <button type="submit" className="btn-approve-request">Approve Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ApproveRequest;
