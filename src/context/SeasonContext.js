import React, { createContext, useState } from "react"
import { leagues } from "../../static/leagues"

const initialState = Array(leagues.length).fill("1920")

const SeasonContext = createContext(initialState)

const SeasonProvider = ({ children }) => {
  const [season, setSeason] = useState(initialState)

  const changeSeason = (season, league) => {
    setSeason(prevSeason => {
      const newSeason = [...prevSeason]
      newSeason[league] = season
      return newSeason
    })
  }

  return (
    <SeasonContext.Provider value={{ season, changeSeason }}>
      {children}
    </SeasonContext.Provider>
  )
}

export default SeasonContext

export { SeasonProvider }
