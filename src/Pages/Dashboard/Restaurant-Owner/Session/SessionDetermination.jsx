import { useEffect, useState } from "react";
import Aside from "../../../../Shared/Dashboard/Restaurant-Owner/Aside.jsx";
import Navbar from "../../../../Shared/Dashboard/Restaurant-Owner/Navbar.jsx";

import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import "@schedule-x/theme-default/dist/index.css";

function SessionDetermination() {
  const eventsService = useState(() => createEventsServicePlugin())[0];

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

  // Convert sessions into events format
  const convertedEvents = sessions0503.map((session) => ({
    id: session.id.toString(),
    title: `Session ${session.id}`,
    start: `2025-03-05 ${session.startTime}`,
    end: `2025-03-05 ${session.endTime}`,
  }));


  const [selectedDate, setSelectedDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const generateRandomNumber = () => {
    const min = 4;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: convertedEvents,
    plugins: [eventsService],
  });

  useEffect(() => {
    calendar.events = convertedEvents;
  }, [convertedEvents, calendar]);

  const addEvent = () => {
    if (!selectedDate || !startTime || !endTime) return;

    console.log("Pushed");

    const newEvent = {
      id: generateRandomNumber().toString(),
      title: "New Session",
      start: `${selectedDate} ${startTime}`,
      end: `${selectedDate} ${endTime}`,
    };

    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, newEvent];
      console.log(updatedEvents);
      return updatedEvents;
    });
  };

  return (
    <div className="wrapper d-flex align-items-stretch">
      <Aside />
      <div className="content-wrapper">
        <Navbar />
        <div id="content">
          <h1 className="page-name">Session Determination</h1>
          <div className="calendar-div text-center mt-4">
            <ScheduleXCalendar calendarApp={calendar} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionDetermination;