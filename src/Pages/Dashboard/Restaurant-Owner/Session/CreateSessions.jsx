import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../../../Shared/Dashboard/Restaurant-Owner/NavigationRestaurantOwner.jsx";

function CreateSessions() {

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState("2025-03-05");
  const itemsPerPage = 10;

  const sessions0503 = [
    { id: 1, startTime: "09:00", endTime: "12:00", status: "Available" },
    { id: 2, startTime: "09:15", endTime: "12:15", status: "Available" },
    { id: 3, startTime: "09:30", endTime: "12:30", status: "Available" },
    { id: 4, startTime: "09:45", endTime: "12:45", status: "Not Available" },
    { id: 5, startTime: "10:00", endTime: "13:00", status: "Available" },
    { id: 6, startTime: "10:15", endTime: "13:15", status: "Available" },
    { id: 7, startTime: "10:30", endTime: "13:30", status: "Available" },
    { id: 8, startTime: "10:45", endTime: "13:45", status: "Available" },
    { id: 9, startTime: "11:00", endTime: "14:00", status: "Available" },
    { id: 10, startTime: "11:15", endTime: "14:15", status: "Not Available" },
    { id: 11, startTime: "11:30", endTime: "14:30", status: "Available" },
    { id: 12, startTime: "11:45", endTime: "14:45", status: "Available" },
  ];

  const sessions0603 = [
    { id: 4, startTime: "09:45", endTime: "12:45", status: "Not Available" },
    { id: 5, startTime: "10:00", endTime: "13:00", status: "Available" },
    { id: 6, startTime: "10:15", endTime: "13:15", status: "Available" },
    { id: 7, startTime: "10:30", endTime: "13:30", status: "Available" },
    { id: 8, startTime: "10:45", endTime: "13:45", status: "Available" },
    { id: 9, startTime: "11:00", endTime: "14:00", status: "Available" },
    { id: 10, startTime: "11:15", endTime: "14:15", status: "Not Available" },
    { id: 11, startTime: "11:30", endTime: "14:30", status: "Available" },
    { id: 12, startTime: "11:45", endTime: "14:45", status: "Available" },
  ];

  const sessionEmpty = [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const currentItems = 
  selectedDate === "2025-03-05" ? sessions0503 : 
  selectedDate === "2025-03-06" ? sessions0603 : sessionEmpty;


  const paginatedItems = currentItems.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(currentItems.length / itemsPerPage);

  const handleClick = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <Navigation/>
      <div id="content">
        <h1 className="page-name">Create Sessions</h1>
        <div className="create-session-div">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Date:</label>
                <input type="date" className="form-control" value={selectedDate} onChange={handleDateChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Start Time:</label>
                <input type="time" className="form-control"  />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">End Time:</label>
                <input type="time" className="form-control"  />
              </div>
              <div className="col-sm text-center">
                <div className="btn-div-create-session">
                  <button className="btn-create-session">Add Session</button>
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
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                  <th scope="col">Status</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {paginatedItems.map((session) => (
                  <tr key={session.id}>
                    <th scope="row">{session.id}</th>
                    <td>{session.startTime}</td>
                    <td>{session.endTime}</td>
                    <td style={{ color: session.status === "Available" ? "green" : "red" }}>
                      {session.status}
                    </td>
                    <td>
                      <Link to="#"><button className="btn btn-danger mr-2"><i className="fas fa-trash"></i></button></Link>            
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

export default CreateSessions;
