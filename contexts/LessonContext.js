import React, { createContext, useContext, useState } from 'react';

const LessonContext = createContext();

export const LessonProvider = ({ pickedLessonsData, children }) => {
  const [pickedLessons, setPickedLessons] = useState(pickedLessonsData);

  return (
    <LessonContext.Provider value={{ pickedLessons, setPickedLessons }}>
      {children}
    </LessonContext.Provider>
  );
};

export const useLessonContext = () => useContext(LessonContext);