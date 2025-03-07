import React, { useState } from "react";
import Navigation from "../../../../Shared/Dashboard/Manager/NavigationManager.jsx";

function UpdateRestaurant() {
    const restaurants = [
        { id: 1, restaurantName: "Roof Meze 360", cuisine: "Turkish", location: "Istanbul, Turkey", website: "https://roofmezze360.com", email: "roofmeze@outlook.com", phone: "+902645434456", restaurantOwner: "Murat Celal", plan: "Premium" },
        { id: 2, restaurantName: "Sultanahmet Köftecisi", cuisine: "Turkish", location: "Istanbul, Turkey", website: "https://sultanahmetkoftesi.com", email: "info@sultanahmetkoftesi.com", phone: "+902123456789", restaurantOwner: "Ahmet Yılmaz", plan: "Advanced" },
        { id: 3, restaurantName: "Mangal 24", cuisine: "Turkish", location: "Ankara, Turkey", website: "https://mangal24.com", email: "contact@mangal24.com", phone: "+903123456789", restaurantOwner: "Elif Demir", plan: "Standard" },
        { id: 4, restaurantName: "Bodrum Balıkçısı", cuisine: "Seafood", location: "Bodrum, Turkey", website: "https://bodrumbalikcisi.com", email: "info@bodrumbalikcisi.com", phone: "+902523456789", restaurantOwner: "Mehmet Aydın", plan: "Premium" },
        { id: 5, restaurantName: "İstanbul Kebap", cuisine: "Turkish", location: "Istanbul, Turkey", website: "https://istanbulkebap.com", email: "info@istanbulkebap.com", phone: "+902145678910", restaurantOwner: "Zeynep Koç", plan: "Advanced" },
        { id: 6, restaurantName: "Anadolu Sofrası", cuisine: "Turkish", location: "Izmir, Turkey", website: "https://anadolusofrasi.com", email: "contact@anadolusofrasi.com", phone: "+902353456789", restaurantOwner: "Ali Can", plan: "Standard" },
        { id: 7, restaurantName: "Çeşme Balık", cuisine: "Seafood", location: "Çeşme, Turkey", website: "https://cesmebalik.com", email: "info@cesmebalik.com", phone: "+902327654321", restaurantOwner: "Fatma Yıldız", plan: "Premium" },
        { id: 8, restaurantName: "Kebapçı İskender", cuisine: "Turkish", location: "Bursa, Turkey", website: "https://kebapciiskender.com", email: "info@kebapciiskender.com", phone: "+902243567890", restaurantOwner: "Oğuzhan Tekin", plan: "Advanced" },
        { id: 9, restaurantName: "Pideci Ahmet", cuisine: "Turkish", location: "Gaziantep, Turkey", website: "https://pideciahmet.com", email: "contact@pideciahmet.com", phone: "+904123456789", restaurantOwner: "Seda Çelik", plan: "Standard" },
        { id: 10, restaurantName: "Kumpirci Ali", cuisine: "Fast Food", location: "Istanbul, Turkey", website: "https://kumpirciali.com", email: "info@kumpirciali.com", phone: "+902145678911", restaurantOwner: "Ali Veli", plan: "Premium" },
        { id: 11, restaurantName: "Saray Muhallebicisi", cuisine: "Desserts", location: "Istanbul, Turkey", website: "https://saraymuhallebicisi.com", email: "info@saraymuhallebicisi.com", phone: "+902123456788", restaurantOwner: "Merve Yılmaz", plan: "Advanced" },
        { id: 12, restaurantName: "Köfteci Ramiz", cuisine: "Turkish", location: "Adana, Turkey", website: "https://kofteciramiz.com", email: "contact@kofteciramiz.com", phone: "+903123456788", restaurantOwner: "Ramazan Çetin", plan: "Standard" },
        { id: 13, restaurantName: "Çay Bahçesi", cuisine: "Cafe", location: "Trabzon, Turkey", website: "https://caybahcesi.com", email: "info@caybahcesi.com", phone: "+904123456788", restaurantOwner: "Hüseyin Acar", plan: "Premium" },
        { id: 14, restaurantName: "Pizza House", cuisine: "Italian", location: "Istanbul, Turkey", website: "https://pizzahouse.com", email: "info@p izzahouse.com", phone: "+902145678912", restaurantOwner: "Elena Rossi", plan: "Advanced" },
        { id: 15, restaurantName: "Sushi Bar", cuisine: "Japanese", location: "Istanbul, Turkey", website: "https://sushibar.com", email: "contact@sushibar.com", phone: "+902145678913", restaurantOwner: "Kenji Tanaka", plan: "Standard" },
        { id: 16, restaurantName: "Taco Fiesta", cuisine: "Mexican", location: "Istanbul, Turkey", website: "https://tacofiesta.com", email: "info@tacofiesta.com", phone: "+902145678914", restaurantOwner: "Maria Gonzalez", plan: "Premium" },
        { id: 17, restaurantName: "Café de Flore", cuisine: "French", location: "Paris, France", website: "https://cafedeflore.com", email: "info@cafedeflore.com", phone: "+33123456789", restaurantOwner: "Jean Dupont", plan: "Advanced" },
        { id: 18, restaurantName: "Curry House", cuisine: "Indian", location: "Istanbul, Turkey", website: "https://curryhouse.com", email: "contact@curryhouse.com", phone: "+902145678915", restaurantOwner: "Aditi Sharma", plan: "Standard" },
        { id: 19, restaurantName: "Burger Joint", cuisine: "American", location: "Istanbul, Turkey", website: "https://burgerjoint.com", email: "info@burgerjoint.com", phone: "+902145678916", restaurantOwner: "John Smith", plan: "Premium" },
        { id: 20, restaurantName: "Pasta Palace", cuisine: "Italian", location: "Rome, Italy", website: "https://pastapalace.com", email: "info@pastapalace.com", phone: "+390612345678", restaurantOwner: "Giovanni Bianchi", plan: "Advanced" },
        { id: 21, restaurantName: "Dim Sum House", cuisine: "Chinese", location: "Istanbul, Turkey", website: "https://dimsumhouse.com", email: "contact@dimsumhouse.com", phone: "+902145678917", restaurantOwner: "Li Wei", plan: "Standard" },
        { id: 22, restaurantName: "Vegan Delight", cuisine: "Vegan", location: "Istanbul, Turkey", website: "https://vegandelight.com", email: "info@vegandelight.com", phone: "+902145678918", restaurantOwner: "Ayşe Yılmaz", plan: "Premium" },
        { id: 23, restaurantName: "Steak House", cuisine: "Steak", location: "Istanbul, Turkey", website: "https://steakhouse.com", email: "info@steakhouse.com", phone: "+902145678919", restaurantOwner: "Mark Johnson", plan: "Advanced" },
        { id: 24, restaurantName: "Baklava Corner", cuisine: "Desserts", location: "Istanbul, Turkey", website: "https://baklavacorner.com", email: "contact@baklavacorner.com", phone: "+902145678920", restaurantOwner: "Fatma Korkmaz", plan: "Standard" },
        { id: 25, restaurantName: "Grill House", cuisine: "Barbecue", location: "Istanbul, Turkey", website: "https://grillhouse.com", email: "info@grillhouse.com", phone: "+902145678921", restaurantOwner: "Emre Akman", plan: "Premium" },
        { id: 26, restaurantName: "Sweets & Treats", cuisine: "Desserts", location: "Istanbul, Turkey", website: "https://sweetsandtreats.com", email: "info@sweetsandtreats.com", phone: "+902145678922", restaurantOwner: "Zeynep Arslan", plan: "Advanced" }
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

    const locations = [
        { id: 1, city: "Istanbul", country: "Turkey", restaurantCount: 143 },
        { id: 2, city: "Ankara", country: "Turkey", restaurantCount: 85 },
        { id: 3, city: "İzmir", country: "Turkey", restaurantCount: 120 },
        { id: 4, city: "Bursa", country: "Turkey", restaurantCount: 75 },
        { id: 5, city: "Antalya", country: "Turkey", restaurantCount: 95 },
        { id: 6, city: "Adana", country: "Turkey", restaurantCount: 60 },
        { id: 7, city: "Gaziantep", country: "Turkey", restaurantCount: 110 },
        { id: 8, city: "Konya", country: "Turkey", restaurantCount: 70 },
        { id: 9, city: "Mersin", country: "Turkey", restaurantCount: 50 },
        { id: 10, city: "Kayseri", country: "Turkey", restaurantCount: 65 },
        { id: 11, city: "Sakarya", country: "Turkey", restaurantCount: 40 },
        { id: 12, city: "Eskişehir", country: "Turkey", restaurantCount: 55 },
        { id: 13, city: "Trabzon", country: "Turkey", restaurantCount: 45 },
        { id: 14, city: "Samsun", country: "Turkey", restaurantCount: 30 },
        { id: 15, city: "Kocaeli", country: "Turkey", restaurantCount: 80 },
        { id: 16, city: "Denizli", country: "Turkey", restaurantCount: 35 }
    ];


    const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

    const handleRestaurantChange = (event) => {
        const restaurantId = parseInt(event.target.value);
        const foundRestaurant = restaurants.find(r => r.id === restaurantId);
        setSelectedRestaurant(foundRestaurant);
    };

    const handleChange = (event) => {
        setSelectedRestaurant({ ...selectedRestaurant, [event.target.name]: event.target.value });
    };

    return (
        <> 
            <Navigation />        
            <div id="content">
                <h1 className="page-name">Update Restaurant</h1>
                <div className="update-restaurant-div mb-4">
                    <form className="update-restaurant-form">
                        <p className="update-attention">Do not make any changes without informing the restaurant owner!</p>
                        
                        {/* Restaurant Selection */}
                        <div className="form-group pt-3">
                            <label>Choose the Restaurant</label>
                            <select className="form-select form-control bold-select" onChange={handleRestaurantChange} required>
                                {restaurants
                                    .sort((a, b) => a.restaurantName.localeCompare(b.restaurantName))
                                    .map((restaurant) => (
                                        <option key={restaurant.id} value={restaurant.id}>
                                            {restaurant.restaurantName}
                                        </option>
                                ))}
                            </select>
                        </div>

                        {/* Restaurant Name */}
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

                        {/* Cuisine Selection */}
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

                        {/* Location Selection */}
                        <div className="form-group">
                            <label>Choose the Location</label>
                            <select 
                                className="form-select form-control bold-select" 
                                name="location" 
                                value={selectedRestaurant.location} 
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

                        {/* Website */}
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

                        {/* Email */}
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

                        {/* Phone */}
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

                        {/* Restaurant Owner (Read-Only) */}
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

                        {/* Plan Selection */}
                        <div className="form-group">
                            <label>Plan</label>
                            <select 
                                className="form-select form-control" 
                                name="plan" 
                                value={selectedRestaurant.plan} 
                                onChange={handleChange} 
                                required
                            >
                                <option value="Standard">Standard</option>
                                <option value="Advanced">Advanced</option>
                                <option value="Premium">Premium</option>
                            </select>
                        </div>

                        {/* Approval Checkbox */}
                        <div className="form-check text-center pt-3">
                            <input className="form-check-input" type="checkbox" id="ownerApprove" required />
                            <label className="form-check-label" htmlFor="ownerApprove">
                                I undertake not to make any arrangements without the approval of the restaurant owner.
                            </label>
                        </div>

                        {/* Submit Button */}
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
