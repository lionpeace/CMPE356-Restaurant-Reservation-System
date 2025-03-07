import React, { useState } from "react";
import Navigation from "../../../../Shared/Dashboard/Admin/NavigationAdmin.jsx";

function CuisineList() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

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

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cuisines.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(cuisines.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Navigation/>
            <div id="content">
                <h1 className="page-name">Cuisine List</h1>
                <div className="add-cuisine-div mb-5">
                    <form className="add-cuisine-form">
                        <div className="form-group">
                            <label htmlFor="username">Cuisine Name</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter new cuisine name" required/>
                        </div>
                        <div className="btn-div-add-cuisine">
                            <button type="submit" className="btn-add-cuisine">Add Cuisine</button>
                        </div>
                    </form>
                </div>
                <div className="table-responsive pl-5 pr-5 pb-5">
                    <table className="table table-bordered table-hover">
                        <thead className="text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Cuisine Name</th>
                                <th scope="col">How Many Restaurants</th>
                                <th scope="col">Operations</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {currentItems.map((cuisine, index) => (
                                <tr key={cuisine.id}>
                                    <th scope="row">{cuisine.id}</th>
                                    <td>{cuisine.cuisineName}</td>
                                    <td>{cuisine.restaurantCount}</td>
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

export default CuisineList;