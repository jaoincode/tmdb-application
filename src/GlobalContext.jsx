import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

export default function GlobalStorage({ children }) {
  const [actualSection, setActualSection] = useState('popular');

  return (
    <GlobalContext.Provider value={{ actualSection, setActualSection }}>
      {children}
    </GlobalContext.Provider>
  )
}
