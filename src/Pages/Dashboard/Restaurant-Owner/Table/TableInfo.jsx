import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../../../Shared/Dashboard/Restaurant-Owner/NavigationRestaurantOwner.jsx";


function TableInfo() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const tables = [
        { id: 1, tableName: "T1", tableCapacity: 4, tableStatus: "Available" },
        { id: 2, tableName: "T2", tableCapacity: 4, tableStatus: "Available" },
        { id: 3, tableName: "T3", tableCapacity: 4, tableStatus: "Available" },
        { id: 4, tableName: "T4", tableCapacity: 4, tableStatus: "Available" },
        { id: 5, tableName: "T5", tableCapacity: 4, tableStatus: "Available" },
        { id: 6, tableName: "T6", tableCapacity: 4, tableStatus: "Not Available" },
        { id: 7, tableName: "T7", tableCapacity: 4, tableStatus: "Available" },
        { id: 8, tableName: "T8", tableCapacity: 4, tableStatus: "Available" },
        { id: 9, tableName: "T9", tableCapacity: 4, tableStatus: "Available" },
        { id: 10, tableName: "T10", tableCapacity: 2, tableStatus: "Not Available" },
        { id: 11, tableName: "T11", tableCapacity: 2, tableStatus: "Available" },
        { id: 12, tableName: "T12", tableCapacity: 2, tableStatus: "Available" },
    ]

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tables.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(tables.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Navigation/>
            <div id="content">
                <h1 className="page-name">Table Information</h1>
                <div className="add-table-div">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm text-center">
                                <div className="form-group">
                                    <label htmlFor="tableName">Table Name</label>
                                    <input type="text" className="form-control" id="tableName" placeholder="Enter new table's name" required/>
                                </div>
                            </div>
                            <div class="col-sm text-center">
                                <div className="form-group">
                                    <label htmlFor="tableCapacity">Table Capacity</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        id="tableCapacity" 
                                        placeholder="Enter new table's capacity" 
                                        required 
                                        min="1" 
                                        max="50" 
                                        step="1" 
                                    />
                                </div>
                            </div>
                            <div class="col-sm text-center">
                                <div className="btn-div-add-table">
                                    <button type="submit" className="btn-add-table">Add table</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive pl-5 pr-5 pb-5">
                    <table className="table table-bordered table-hover">
                        <thead className="text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Table Name</th>
                                <th scope="col">Capacity</th>
                                <th scope="col">Status</th>
                                <th scope="col">Operations</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {currentItems.map((table, index) => (
                                <tr key={table.id}>
                                    <th scope="row">{table.id}</th>
                                    <td>{table.tableName}</td>
                                    <td>{table.tableCapacity}</td>
                                    <td style={{ color: table.tableStatus === "Available" ? "green" : "red" }}>
                                        {table.tableStatus}
                                    </td>
                                    <td>
                                        <Link to="#"><button className="btn btn-danger mr-2"><i class="fas fa-trash"></i></button></Link> 
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

export default TableInfo;