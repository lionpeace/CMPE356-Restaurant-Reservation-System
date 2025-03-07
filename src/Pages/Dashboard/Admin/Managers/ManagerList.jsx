import React, { useState } from "react";
import Navigation from "../../../../Shared/Dashboard/Admin/NavigationAdmin.jsx";

function ManagerList() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const users = [
        { id: 1, username: "@manager1", name: "Yiğit", surname: "Avar", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "yigitavar@outlook.com", phone: "+905383599269", restaurant: "Aslan Restaurant" },
        { id: 2, username: "@manager2", name: "Jacob", surname: "Smith", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "markotto@gmail.com", phone: "+905353243220", restaurant: "Grassini" },
        { id: 3, username: "@manager3", name: "Jacob", surname: "Jones", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "larrybird@gmail.com", phone: "+905353243214", restaurant: "TGI Fridays" },
        { id: 4, username: "@manager4", name: "David", surname: "Doe", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "larrybird@gmail.com", phone: "+905353243218", restaurant: "Grassini" },
        { id: 5, username: "@manager5", name: "Jacob", surname: "Smith", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "jacobthornton@gmail.com", phone: "+905353243216", restaurant: "Cheesecake Factory" },
        { id: 6, username: "@manager6", name: "David", surname: "Williams", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "michaelwilliams@gmail.com", phone: "+905353243213", restaurant: "Texas Roadhouse" },
        { id: 7, username: "@manager7", name: "Jacob", surname: "Thornton", photo: "https://i.hizliresim.com/r43qfei.jpg", email: "jacobthornton@gmail.com", phone: "+905353243217", restaurant: "Cheesecake Factory" }  
    ];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(users.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Navigation />
            <div id="content">
                <h1 className="page-name">Manager List</h1>
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
                                <th scope="col">Operations</th>
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

export default ManagerList;