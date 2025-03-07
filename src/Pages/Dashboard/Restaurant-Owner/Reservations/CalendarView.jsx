import { useEffect, useState } from "react";
import Navigation from "../../../../Shared/Dashboard/Restaurant-Owner/NavigationRestaurantOwner.jsx";

import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import "E:/NextCloud-Backup/Restaurant-Reservation-System/Test/rrsystem-frontend/node_modules/@schedule-x/theme-default/dist/index.css";

function CalendarView() {
  const eventsService = useState(() => createEventsServicePlugin())[0];

  const sessions0503 = [
    { id: 1, title: "İlktan Ar", startTime: "2025-03-05 09:00", endTime: "2025-03-05 12:00", status: "Available" },
    { id: 2, title: "Mauro Icardi", startTime: "2025-03-05 11:15", endTime: "2025-03-05 14:15", status: "Not Available" },
    { id: 3, title: "Fatih Terim", startTime: "2025-03-05 14:30", endTime: "2025-03-05 17:30", status: "Available" },
    { id: 4, title: "İlktan Ar", startTime: "2025-03-06 11:00", endTime: "2025-03-06 14:00", status: "Available" },
    { id: 5, title: "Mauro Icardi", startTime: "2025-03-06 15:30", endTime: "2025-03-06 18:30", status: "Not Available" },  
    { id: 6, title: "Fatih Terim", startTime: "2025-03-06 20:30", endTime: "2025-03-06 23:30", status: "Available" },
  ];

  // Convert sessions into events format
  const convertedEvents = sessions0503.map((session) => ({
    id: session.id.toString(),
    title: `${session.title}`,
    start: `${session.startTime}`,
    end: `${session.endTime}`,
    extendedProps: {
      status: session.status,
    },
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
    renderEventContent: (eventInfo) => (
      <div>
        <b>{eventInfo.timeText}</b>
        <br />
        <span>{eventInfo.event.title}</span>
        <br />
        <span>{eventInfo.event.extendedProps.status}</span>
      </div>
    ),
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
      extendedProps: {
        status: "Available",
      },
    };

    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, newEvent];
      console.log(updatedEvents);
      return updatedEvents;
    });
  };

  return (
    <>
      <Navigation/>
      <div id="content">
        <h1 className="page-name">Reservations - Calendar View</h1>
        <div className="calendar-div text-center mt-4">
          <ScheduleXCalendar calendarApp={calendar} />
        </div>
      </div>
    </>
  );
}

export default CalendarView;