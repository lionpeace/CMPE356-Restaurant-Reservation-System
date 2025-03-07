import React, { useState } from "react";
import Navigation from "../../../../Shared/Dashboard/Admin/NavigationAdmin.jsx";

function CustomerList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [showActiveUsers, setShowActiveUsers] = useState(true);
    const itemsPerPage = 10;

    const activeUsers = [
        { id: 1, username: "@user1", name: "Duru", surname: "Erol", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "duruerol@outlook.com", phone: "+905383599269", restaurant: "Aslan Restaurant" },
        { id: 2, username: "@user2", name: "Jacob", surname: "Smith", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "markotto@gmail.com", phone: "+905353243220", restaurant: "Grassini" },
        { id: 3, username: "@user3", name: "Jacob", surname: "Jones", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "larrybird@gmail.com", phone: "+905353243214", restaurant: "TGI Fridays" },
        { id: 4, username: "@user4", name: "David", surname: "Doe", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "larrybird@gmail.com", phone: "+905353243218", restaurant: "Grassini" },
        { id: 5, username: "@user5", name: "Jacob", surname: "Smith", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "jacobthornton@gmail.com", phone: "+905353243216", restaurant: "Cheesecake Factory" },
        { id: 6, username: "@user6", name: "David", surname: "Williams", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "michaelwilliams@gmail.com", phone: "+905353243213", restaurant: "Texas Roadhouse" },
    ];

    const deactiveUsers = [
        { id: 8, username: "@user8", name: "Alice", surname: "Johnson", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "alice.johnson@example.com", phone: "+905383599270", restaurant: "Pasta Palace" },
        { id: 9, username: "@user9", name: "Bob", surname: "Brown", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "bob.brown@example.com", phone: "+905383599271", restaurant: "Sushi World" },
        { id: 10, username: "@user10", name: "Charlie", surname: "Davis", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "charlie.davis@example.com", phone: "+905383599272", restaurant: "Burger House" },
        { id: 11, username: "@user11", name: "Diana", surname: "Evans", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "diana.evans@example.com", phone: "+905383599273", restaurant: "Taco Town" },
        { id: 12, username: "@user12", name: "Ethan", surname: "Garcia", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "ethan.garcia@example.com", phone: "+905383599274", restaurant: "Steakhouse" },
        { id: 13, username: "@user13", name: "Fiona", surname: "Harris", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "fiona.harris@example.com", phone: "+905383599275", restaurant: "Pizza Place" },
        { id: 14, username: "@user14", name: "George", surname: "Martinez", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "george.martinez@example.com", phone: "+905383599276", restaurant: "Seafood Shack" }       
    ];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = showActiveUsers ? activeUsers.slice(indexOfFirstItem, indexOfLastItem) : deactiveUsers.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil((showActiveUsers ? activeUsers.length : deactiveUsers.length) / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Navigation />
            <div id="content">
                <h1 className="page-name">Customers</h1>
                <div className="button-group text-center mb-3">
                    <button className={`btn ${showActiveUsers ? "btn-primary-custom" : "btn-secondary-custom"}`} onClick={() => { setShowActiveUsers(true); setCurrentPage(1); }}>Active Users</button>
                    <button className={`btn ${!showActiveUsers ? "btn-primary-custom" : "btn-secondary-custom"}`} onClick={() => { setShowActiveUsers(false); setCurrentPage(1); }}>Deactive Users</button>
                </div>
                <div className="table-responsive pl-5 pr-5 pb-5">
                    <table className="table table-bordered table-hover">
                        <thead className="text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Username</th>
                                <th scope="col">Name</th>
                                <th scope="col">Surname</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Restaurant Name</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {currentItems.map((user, index) => (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>{user.surname}</td>
                                    <td>
                                        <div className="img-container">
                                            <img src={user.photo} alt={user.username} height="50px" width="50px" />
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.restaurant}</td>
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

export default CustomerList;