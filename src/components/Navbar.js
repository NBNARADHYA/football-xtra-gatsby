import React, { useContext, useMemo } from "react"
import { Tabs, Tab, AppBar } from "@material-ui/core"
import { Link } from "gatsby"
import { leagues } from "../../static/leagues"
import SeasonContext from "../context/SeasonContext"

const Navbar = ({ leagueId }) => {
  const { season } = useContext(SeasonContext)

  const leagueTabs = useMemo(() => {
    return leagues.map((league, leagueIdx) => {
      return (
        <Tab
          style={{ marginRight: 5 }}
          key={leagueIdx}
          value={leagueIdx}
          icon={<img src={league.logo} height="60" alt={league.name} />}
          component={Link}
          to={`/leagues/${league.shortHand}/${season[league.id]}`}
        />
      )
    })
  }, [season])
  return (
    <AppBar position="static" textColor="primary" color="transparent">
      <Tabs color="transparent" value={leagueId}>
        {leagueTabs}
      </Tabs>
    </AppBar>
  )
}

export default Navbar
