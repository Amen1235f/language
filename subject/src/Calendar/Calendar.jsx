import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [tasks, setTasks] = useState({
    "2025-01-01": ["Write essay on nature", "Learn new vocabulary"],
    "2025-01-02": ["Practice French pronunciation", "Complete exercise on verbs"],
    // Add more tasks here
  });

  const [selectedMonth, setSelectedMonth] = useState(0); // 0 = January, 11 = December
  const [selectedYear, setSelectedYear] = useState(2025);

  // Days in each month
  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Generate days for the selected month and year
  const generateDays = (month, year) => {
    const days = [];
    const totalDays = daysInMonth(month, year);
    for (let i = 1; i <= totalDays; i++) {
      const day = `${year}-${month < 9 ? `0${month + 1}` : month + 1}-${
        i < 10 ? `0${i}` : i
      }`;
      days.push(day);
    }
    return days;
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const changeMonth = (delta) => {
    let newMonth = selectedMonth + delta;
    let newYear = selectedYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setSelectedMonth(newMonth);
    setSelectedYear(newYear);
  };

  return (
    <div className="calendar-container">
      <h2>
        {new Date(selectedYear, selectedMonth).toLocaleString("default", {
          month: "long",
        })}{" "}
        {selectedYear}
      </h2>

      <button onClick={() => changeMonth(-1)}>Previous Month</button>
      <button onClick={() => changeMonth(1)}>Next Month</button>

      <div className="calendar-wrapper">
        <div className="calendar-grid">
          {generateDays(selectedMonth, selectedYear).map((day) => (
            <div
              key={day}
              className={`calendar-day ${tasks[day] ? "tracked" : ""}`}
              onClick={() => tasks[day] && handleDayClick(day)} // Only allow click on days with tasks
            >
              {day.split("-")[2]}
            </div>
          ))}
        </div>

        <div className="task-details">
          {selectedDay && tasks[selectedDay] && (
            <div className="tasks">
              <h3>Tasks for {selectedDay}</h3>
              <ul>
                {tasks[selectedDay].map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
