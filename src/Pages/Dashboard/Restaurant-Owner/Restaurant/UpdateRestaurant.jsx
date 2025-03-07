import React, { useState } from "react";
import Navigation from "../../../../Shared/Dashboard/Restaurant-Owner/NavigationRestaurantOwner.jsx";

function UpdateRestaurant() {

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const restaurants = [
        { id: 1, restaurantName: "Roof Meze 360", cuisine: "Turkish", location: "Istanbul, Turkey", website: "https://roofmezze360.com", email: "roofmeze@outlook.com", phone: "+902645434456", restaurantOwner: "Kendrick Kamburoğlu", plan: "Premium" },
    ];

    const request = [
        { id: 1, restaurantName: "Roof Meze 360", cuisine: "Turkish", location: "Istanbul, Turkey", website: "https://roofmezze360.com", email: "roofmeze@outlook.com", phone: "+902645434456", restaurantOwner: "Murat Celal", sex: "Male", hoursOfOperation: "08:00 - 23:00", dressCode: "-", parkingDetails: "Having a parking lot" } 
    ];

    const countries = [
        { id: 1, countryName: "Turkey" },
        { id: 2, countryName: "Italy" },
        { id: 3, countryName: "Mexico" },
        { id: 4, countryName: "China" },
        { id: 5, countryName: "India" },
        { id: 6, countryName: "Japan" },
        { id: 7, countryName: "Thailand" },
        { id: 8, countryName: "Greece" },
        { id: 9, countryName: "France" },
        { id: 10, countryName: "Korea" },
        { id: 11, countryName: "Vietnam" },
        { id: 12, countryName: "Spain" },
        { id: 13, countryName: "Lebanon" },
        { id: 14, countryName: "United States" },
        { id: 15, countryName: "Germany" },
        { id: 16, countryName: "Russia" },
        { id: 17, countryName: "Brazil" },
        { id: 18, countryName: "Argentina" },
        { id: 19, countryName: "Portugal" },
        { id: 20, countryName: "South Africa" }
    ];

    const cities = [
        { id: 1, cityName: "Istanbul", countryId: 1 },
        { id: 2, cityName: "Ankara", countryId: 1 },
        { id: 3, cityName: "Izmir", countryId: 1 },
        { id: 4, cityName: "Bursa", countryId: 1 },
        { id: 5, cityName: "Antalya", countryId: 1 },
        { id: 6, cityName: "Adana", countryId: 1 },
        { id: 7, cityName: "Gaziantep", countryId: 1 },
        { id: 8, cityName: "Konya", countryId: 1 },
        { id: 9, cityName: "Mersin", countryId: 1 },
        { id: 10, cityName: "Kayseri", countryId: 1 },
        { id: 11, cityName: "Sakarya", countryId: 1 },
        { id: 12, cityName: "Eskisehir", countryId: 1 },
        { id: 13, cityName: "Trabzon", countryId: 1 },
        { id: 14, cityName: "Samsun", countryId: 1 },
        { id: 15, cityName: "Kocaeli", countryId: 1 },
        { id: 16, cityName: "Denizli", countryId: 1 },
        { id: 17, cityName: "Rome", countryId: 2 },
        { id: 18, cityName: "Milan", countryId: 2 },
        { id: 19, cityName: "Naples", countryId: 2 },
        { id: 20, cityName: "Turin", countryId: 2 },
        { id: 21, cityName: "Palermo", countryId: 2 },
        { id: 22, cityName: "Genoa", countryId: 2 },
        { id: 23, cityName: "Bologna", countryId: 2 },
        { id: 24, cityName: "Florence", countryId: 2 },
        { id: 25, cityName: "Venice", countryId: 2 },
        { id: 26, cityName: "Bari", countryId: 2 },
        { id: 27, cityName: "Catania", countryId: 2 },
        { id: 28, cityName: "Verona", countryId: 2 },
        { id: 29, cityName: "Messina", countryId: 2 },
        { id: 30, cityName: "Padua", countryId: 2 },
        { id: 31, cityName: "Trieste", countryId: 2 },
        { id: 32, cityName: "Taranto", countryId: 2 },
        { id: 33, cityName: "Brescia", countryId: 2 },
        { id: 34, cityName: "Parma", countryId: 2 },
        { id: 35, cityName: "Prato", countryId: 2 },
        { id: 36, cityName: "Modena", countryId: 2 },
        { id: 37, cityName: "Reggio Calabria", countryId: 2 },
        { id: 38, cityName: "Reggio Emilia", countryId: 2 },
        { id: 39, cityName: "Perugia", countryId: 2 },
        { id: 40, cityName: "Ravenna", countryId: 2 },
        { id: 41, cityName: "Livorno", countryId: 2 },
        { id: 42, cityName: "Cagliari", countryId: 2 },
        { id: 43, cityName: "Foggia", countryId: 2 },
        { id: 44, cityName: "Rimini", countryId: 2 },
        { id: 45, cityName: "Salerno", countryId: 2 }
    ];

    const cuisines = [
        { id: 1, cuisineName: "Turkish Food", restaurantCount: 143 },
        { id: 2, cuisineName: "Italian Food", restaurantCount: 123 },
        { id: 3, cuisineName: "Mexican Food", restaurantCount: 98 },
        { id: 4, cuisineName: "Chinese Food", restaurantCount: 87 },
        { id: 5, cuisineName: "Indian Food", restaurantCount: 76 },
        { id: 6, cuisineName: "Japanese Food", restaurantCount: 65 },
        { id: 7, cuisineName: "Thai Food", restaurantCount: 54 },
        { id: 8, cuisineName: "Greek Food", restaurantCount: 43 },
        { id: 9, cuisineName: "French Food", restaurantCount: 32 },
        { id: 10, cuisineName: "Korean Food", restaurantCount: 21 },
        { id: 11, cuisineName: "Vietnamese Food", restaurantCount: 10 },
        { id: 12, cuisineName: "Spanish Food", restaurantCount: 9 },
        { id: 13, cuisineName: "Lebanese Food", restaurantCount: 8 },
        { id: 14, cuisineName: "American Food", restaurantCount: 7 },
        { id: 15, cuisineName: "German Food", restaurantCount: 6 },
        { id: 16, cuisineName: "Russian Food", restaurantCount: 5 },
        { id: 17, cuisineName: "Brazilian Food", restaurantCount: 4 },
        { id: 18, cuisineName: "Argentinian Food", restaurantCount: 3 },
        { id: 19, cuisineName: "Portuguese Food", restaurantCount: 2 },
        { id: 20, cuisineName: "African Food", restaurantCount: 1 }
    ];
    
    const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

    const handleChange = (event) => {
        setSelectedRestaurant({ ...selectedRestaurant, [event.target.name]: event.target.value });
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedCity("");
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    
    const [selectedRequest, setSelectedRequest] = useState(request[0]);

    const handleChangeReq = (event) => {
        setSelectedRequest({ ...selectedRequest, [event.target.name]: event.target.value });
    };

    return (
        <>
            <Navigation/>
            <div id="content">
                <h1 className="page-name">Update Restaurant</h1>
                <div className="update-restaurant-div mb-4">
                    <form className="update-restaurant-form">

                        <div className="form-group">
                            <label htmlFor="restaurantName">Restaurant Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="restaurantName" 
                                name="restaurantName" 
                                value={selectedRestaurant.restaurantName} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Choose the Cuisine</label>
                            <select 
                                className="form-select form-control bold-select" 
                                name="cuisine" 
                                value={selectedRestaurant.cuisine} 
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
                            <label>Choose the Country</label>
                            <select 
                                className="form-select form-control bold-select" 
                                value={selectedCountry} 
                                onChange={handleCountryChange} 
                                required
                            >
                                <option value="">Select Country</option>
                                {countries.map((country) => (
                                    <option key={country.id} value={country.id}>
                                        {country.countryName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Choose the City</label>
                            <select 
                                className="form-select form-control bold-select" 
                                value={selectedCity} 
                                onChange={handleCityChange} 
                                required
                                disabled={!selectedCountry} 
                            >
                                <option value="">Select City</option>
                                {cities.filter(city => city.countryId === Number(selectedCountry)).map((city) => (
                                    <option key={city.id} value={city.cityName}>
                                        {city.cityName}
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
                                value={selectedRestaurant.website} 
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
                                value={selectedRestaurant.email} 
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
                                value={selectedRestaurant.phone} 
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
                                value={selectedRestaurant.restaurantOwner} 
                                readOnly 
                            />
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

                        <div className="btn-div-update-restaurant">
                            <button type="submit" className="btn-update-restaurant">Update Restaurant</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UpdateRestaurant;
