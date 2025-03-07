import React, { useState } from "react";
import Navigation from "../../../../Shared/Dashboard/Manager/NavigationManager.jsx";

import { Link } from 'react-router-dom';

function RestaurantRequests() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const restaurantRequests = [
        { id: 1, restaurantName: "Roof Meze 360", cuisine: "Turkish Food", location: "Istanbul, Turkey", website: "https://roofmezze360.com", email: "roofmeze@outlook.com", phone: "+902645434456", restaurantOwner: "Murat Celal", plan: "Premium" },
        ];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = restaurantRequests.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(restaurantRequests.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Navigation />
            <div id="content">
                <h1 className="page-name">Restaurant Requests</h1>
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
                                <th scope="col">Operations</th>
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
                                    <td>
                                        <Link to="/manager/approve-request"><button className="btn btn-success mr-2"><i class="fas fa-check"></i></button></Link> 
                                        <Link to="/manager/deny-request"><button className="btn btn-danger"><i class="fas fa-window-close"></i></button></Link> 
                                    </td>
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

export default RestaurantRequests;