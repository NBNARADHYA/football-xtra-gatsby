import React from "react"
import { SeasonProvider } from "../context/SeasonContext"
import Navbar from "../components/Navbar"
import Transition from "../components/transition"

const Layout = ({ children, location }) => {
  return (
    <SeasonProvider>
      {location.pathname !== "/" && (
        <Navbar leagueShortHand={location.pathname.split("/")[2]} />
      )}
      <Transition location={location}>{children}</Transition>
    </SeasonProvider>
  )
}

export default Layout
