'use client';
import { createContext, useContext, useState } from 'react';

export const ImportantContext = createContext();

export default function ImportantContextProvider({
  children,
}) {
  const [important, setImportant] = useState(false);
  return (
    <ImportantContext.Provider
      value={{ important, setImportant }}
    >
      {children}
    </ImportantContext.Provider>
  );
}

export const useImportantContext = () => {
  const value = useContext(ImportantContext);
  if (!value) {
    throw new Error(
      'useImportantContext must be used within an ' +
        'ImportantContextProvider',
    );
  }
  return value;
};
