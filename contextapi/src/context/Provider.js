import { createContext } from 'react'
// createContext -> creates a context

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const data = {
    name: 'John Doe',
    age: 30,
  }

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}
