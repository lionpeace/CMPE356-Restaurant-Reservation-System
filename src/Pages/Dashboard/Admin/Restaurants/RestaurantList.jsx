import React, { useState } from "react";
import Navigation from "../../../../Shared/Dashboard/Admin/NavigationAdmin.jsx";

function RestaurantList() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

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

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = restaurants.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(restaurants.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Navigation/>
            <div id="content">
                <h1 className="page-name">Restaurant List</h1>
                <div className="table-responsive pl-5 pr-5 pb-5">
                    <table className="table table-bordered table-hover">
                        <thead className="text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Restaurant Name</th>
                                <th scope="col">Cuisine</th>
                                <th scope="col">Location</th>
                                <th scope="col">Website</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Restaurant Owner</th>
                                <th scope="col">Plan</th>
                                <th scope="col">Details</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {currentItems.map((restaurant, index) => (
                                <tr key={restaurant.id}>
                                    <th scope="row">{restaurant.id}</th>
                                    <td>{restaurant.restaurantName}</td>
                                    <td>{restaurant.cuisine}</td>
                                    <td>{restaurant.location}</td>
                                    <td> <a href={restaurant.website} className="restaurant-link" target="_blank">{restaurant.restaurantName}</a></td>
                                    <td>{restaurant.email}</td>
                                    <td>{restaurant.phone}</td>
                                    <td>{restaurant.restaurantOwner}</td>
                                    <td>{restaurant.plan}</td>
                                    <td>#</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="pagination-div">
                    <nav>
                        <ul className="pagination">
                            {[...Array(totalPages)].map((_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                    <button className="page-link" onClick={() => handleClick(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default RestaurantList;