import React, { useState } from "react";
import Navigation from "../../../../Shared/Dashboard/Restaurant-Owner/NavigationRestaurantOwner.jsx";

import { Link } from 'react-router-dom';

function ReservationRequests() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const reservationRequests = [
        { id: 1, name: "Fatih", surname: "Terim", phoneNumber: "+905362581905", email: "fatihterim@outlook.com", note: "Allah yardımcınız olsun!" },
        { id: 2, name: "Mauro", surname: "Icardi", phoneNumber: "+905362581905", email: "mauroicardi@outlook.com", note: "Buenos aires muchos gracias amigos." },
        { id: 3, name: "Lionel", surname: "Messi", phoneNumber: "+905362581905", email: "lionelmessi@gmail.com", note: "Ola!" },
        { id: 4, name: "Cristiano", surname: "Ronaldo", phoneNumber: "+905362581905", email: "ronaldo@gmail.com", note: "Obrigado!" }
    ];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = reservationRequests.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(reservationRequests.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Navigation />
            <div id="content">
                <h1 className="page-name">Reservation Requests</h1>
                <div className="table-responsive pl-5 pr-5 pb-5">
                    <table className="table table-bordered table-hover">
                        <thead className="text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Surname</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Email</th>
                                <th scope="col">Operations</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {currentItems.map((reservation, index) => (
                                <tr key={reservation.id}>
                                    <th scope="row">{reservation.id}</th>
                                    <td>{reservation.name}</td>
                                    <td>{reservation.surname}</td>
                                    <td>{reservation.phoneNumber}</td>
                                    <td>{reservation.email}</td>
                                    <td>
                                        <Link to="#"><button className="btn btn-success mr-2"><i class="fas fa-check"></i></button></Link> 
                                        <Link to="#"><button className="btn btn-danger"><i class="fas fa-window-close"></i></button></Link> 
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

export default ReservationRequests;