// src/context/state.js
import { createContext, useContext } from "react"
import useInitialState from "../hooks/useInitialState"
const AppContext = createContext()

export function AppWrapper({ children }) {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
