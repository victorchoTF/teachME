import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export const DateProvider = ({ datesData, children }) => {
  const [dates, setDates] = useState(datesData);

  return (
    <DateContext.Provider value={{ dates, setDates }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = () => useContext(DateContext);