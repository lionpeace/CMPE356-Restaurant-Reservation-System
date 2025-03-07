import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Reserve() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [filteredTimes, setFilteredTimes] = useState([]);

    const availableTimes = [
        { id: 1, time: "09:00" },
        { id: 2, time: "09:30" },
        { id: 3, time: "10:00" },
        { id: 4, time: "10:30" },
        { id: 5, time: "11:00" },
        { id: 6, time: "11:30" },
        { id: 7, time: "12:00" },
        { id: 8, time: "12:30" },
        { id: 9, time: "13:00" },
        { id: 10, time: "13:30" },
        { id: 11, time: "14:00" },
        { id: 12, time: "14:30" },
        { id: 13, time: "15:00" },
        { id: 14, time: "15:30" },
        { id: 15, time: "16:00" },
        { id: 16, time: "16:30" },
        { id: 17, time: "17:00" },
        { id: 18, time: "17:30" }
    ];

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setDate(today);
    }, []);

    useEffect(() => {
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        const filtered = availableTimes.filter(t => {
            const [hours, minutes] = t.time.split(":").map(Number);
            const timeInMinutes = hours * 60 + minutes;
            return timeInMinutes > currentTime;
        });
        setFilteredTimes(filtered);
    }, [date]);

    return (
        <div className="reserve-content">
            <div className="reserve-div">
                <h1 className="reserve-h1 text-center mt-4">Book a Table</h1>
                <p className="text-center">at Aslan Restaurant</p>
                <div className="reserve-form">
                    <div className="form-group pt-4">
                        <label htmlFor="date">Date</label>
                        <input
                            id="date"
                            type="date"
                            className="form-control"
                            value={date}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <select
                            id="time"
                            className="form-control"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        >
                            {filteredTimes.map((t) => (
                                <option key={t.id} value={t.time}>{t.time}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="guests">Guests</label>
                        <select
                            id="guests"
                            className="form-control"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        >
                            {[...Array(10).keys()].map((n) => (
                                <option key={n + 1} value={n + 1}>{n + 1} Guest{n > 0 && "s"}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <Link to="/reserve-second">
                    <button className="btn btn-primary reserve-button">Find a Table</button>
                </Link>
                <div className="logo-div text-center">
                    <h2>Rezal</h2>
                </div>
            </div>
        </div>
    );
}

export default Reserve;