import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext();

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const generateDates = () => {
  const dates = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const day = daysOfWeek[date.getDay()];
    const number = date.getDate();

    const lessons = {
      "09:00": false,
      "10:00": false,
      "11:00": false,
      "12:00": false,
      "13:00": false
    };

    dates.push({ day, number, lessons });
  }

  return dates;
};

export const DateProvider = ({ datesData, children }) => {
  const [dates, setDates] = useState(datesData);

  return (
    <DateContext.Provider value={{ dates, setDates }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = () => useContext(DateContext);