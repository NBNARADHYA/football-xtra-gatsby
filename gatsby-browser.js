import React from "react"

import { SeasonProvider } from "./src/context/SeasonContext"

export const wrapRootElement = ({ element }) => {
  return <SeasonProvider>{element}</SeasonProvider>
}
