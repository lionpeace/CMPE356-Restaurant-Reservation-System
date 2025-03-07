import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../../../Shared/Dashboard/Restaurant-Owner/NavigationRestaurantOwner.jsx";

function ListView() {
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState("active");
  const itemsPerPage = 10;

  const reservations = [
    { id: 1, reservationOwner: "İlktan Ar", numberOfCustomers: 4, table: 2, date: "2025-03-05", session: "11:00 - 13:00", phoneNumber: "+905356430853", email: "-" },
    { id: 2, reservationOwner: "Fatih Terim", numberOfCustomers: 2, table: 1, date: "2025-03-06", session: "11:00 - 13:00", phoneNumber: "+905356430853", email: "-" },
    { id: 3, reservationOwner: "Mauro Icardi", numberOfCustomers: 4, table: 3, date: "2025-03-06", session: "12:00 - 15:00", phoneNumber: "+905356430853", email: "-" },
  ];

  const getCurrentDateTime = () => {
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];
    const formattedTime = now.getHours() * 60 + now.getMinutes();
    return { formattedDate, formattedTime };
  };

  const filterReservations = () => {
    const { formattedDate, formattedTime } = getCurrentDateTime();
    return reservations.filter(({ date, session }) => {
      const [start, end] = session.split(" - ").map(time => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
      });
      return view === "active" ? (date > formattedDate || (date === formattedDate && end >= formattedTime)) : (date < formattedDate || (date === formattedDate && end < formattedTime));
    });
  };

  const filteredReservations = filterReservations();
  const totalPages = Math.ceil(filteredReservations.length / itemsPerPage);
  const currentItems = filteredReservations.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <Navigation />
      <div id="content">
        <h1 className="page-name text-center">Reservations - List View</h1>
        <div className="container text-center mt-3 mb-5">
          <div className="row">
            <div className="col">
              <button className={`btn ${view === "active" ? "btn-danger" : "btn-outline-danger"}`} onClick={() => setView("active")}>Active Reservations</button>
            </div>
            <div className="col">
              <button className={`btn ${view === "past" ? "btn-danger" : "btn-outline-danger"}`} onClick={() => setView("past")}>Past Reservations</button>
            </div>
          </div>
        </div>
        <div className="table-responsive pl-5 pr-5 pb-5">
          <table className="table table-bordered table-hover">
            <thead className="text-center">
              <tr>
                <th>#</th>
                <th>Reservation Owner</th>
                <th>Number of Customers</th>
                <th>Table</th>
                <th>Date</th>
                <th>Session</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody className={`text-center ${view === "active" ? "text-success" : "text-secondary"}`}>
              {currentItems.map(({ id, reservationOwner, numberOfCustomers, table, date, session, phoneNumber, email }) => (
                <tr key={id}>
                  <th>{id}</th>
                  <td>{reservationOwner}</td>
                  <td>{numberOfCustomers}</td>
                  <td>{table}</td>
                  <td>{date}</td>
                  <td>{session}</td>
                  <td>{phoneNumber}</td>
                  <td>{email}</td>
                  <td>
                    {view === "active" ? (
                      <Link to="#"><button className="btn btn-danger mr-2">Cancel Reservation</button></Link>
                    ) : (
                      "-"
                    )}
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
                  <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
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

export default ListView;
