import { useState, useEffect } from "react";

function ReserveSecond() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [filteredTimes, setFilteredTimes] = useState([]);
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [countdown, setCountdown] = useState(120);

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

    const countryCodes = [
        { code: "+1", name: "United States" },
        { code: "+44", name: "United Kingdom" },
        { code: "+90", name: "Turkey" },
        { code: "+91", name: "India" },
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

    useEffect(() => {
        if (showPopup) {
            const timer = setInterval(() => {
                setCountdown(prev => {
                    if (prev === 1) {
                        clearInterval(timer);
                        setShowPopup(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [showPopup]);

    const handleApply = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        setCountdown(120);
    };

    return (
        <div className="reserve-content">
            <div className="reserve-div">
                <h1 className="reserve-h1 text-center mt-4">Book a Table</h1>
                <p className="text-center">at Aslan Restaurant</p>
                <div className="reserve-form">
                    <div className="form-group pt-4">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Surname</label>
                        <input
                            id="surname"
                            type="text"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <div className="phone-input">
                            <select
                                id="countryCode"
                                className="form-control country-code"
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                            >
                                {countryCodes.map((code) => (
                                    <option key={code.code} value={code.code}>
                                        {code.name} ({code.code})
                                    </option>
                                ))}
                            </select>
                            <input
                                id="phone"
                                type="tel"
                                className="form-control phone-number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="note">Note / Request (Optional)</label>
                        <textarea
                            id="note"
                            className="form-control"
                        ></textarea>
                    </div>
                </div>
                <button
                    className="btn btn-primary reserve-button"
                    onClick={handleApply}
                >
                    Apply Reservation
                </button>
                <div className="logo-div text-center">
                    <h2>Rezal</h2>
                </div>
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Please enter the code sent to your email</h2>
                        <p>{`Time remaining: ${Math.floor(countdown / 60)}:${countdown % 60 < 10 ? `0${countdown % 60}` : countdown % 60}`}</p>
                        <input type="text" className="form-control" placeholder="Enter code" required/>
                        <button className="btn btn-primary mt-3" onClick={handlePopupClose}>Submit</button>
                        <button className="btn btn-secondary mt-3" onClick={handlePopupClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ReserveSecond;
