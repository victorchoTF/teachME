import React, { useState, createContext, useContext } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {

  const [page, setPage] = useState("loginRegisterPage");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  return useContext(PageContext);
};