import React from "react"
import { SeasonProvider } from "../context/SeasonContext"
import Navbar from "../components/Navbar"

export default ({ children, location: { pathname } }) => {
  return (
    <SeasonProvider>
      <Navbar leagueShortHand={pathname.split("/")[2]} />
      {children}
    </SeasonProvider>
  )
}
