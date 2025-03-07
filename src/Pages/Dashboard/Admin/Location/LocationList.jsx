import React, { useState } from "react";
import Navigation from "../../../../Shared/Dashboard/Admin/NavigationAdmin.jsx";


function LocationList() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

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

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = locations.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(locations.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
       <>
            <Navigation/>
            <div id="content">
                <h1 className="page-name">Location List</h1>
                <div className="table-responsive pl-5 pr-5 pb-5">
                    <table className="table table-bordered table-hover">
                        <thead className="text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">City</th>
                                <th scope="col">Country</th>
                                <th scope="col">How Many Restaurants</th>
                                <th scope="col">Operations</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {currentItems.map((location, index) => (
                                <tr key={location.id}>
                                    <th scope="row">{location.id}</th>
                                    <td>{location.city}</td>
                                    <td>{location.country}</td>
                                    <td>{location.restaurantCount}</td>
                                    <td>{"#"}</td>
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

export default LocationList;