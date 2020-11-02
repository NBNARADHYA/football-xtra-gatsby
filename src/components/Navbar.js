import React, { useMemo } from "react"
import { leagues } from "../../static/leagues"
import { Tabs, Tab, AppBar } from "@material-ui/core"
import { Link } from "gatsby"

const Navbar = ({ leagueId }) => {
  const leagueTabs = useMemo(() => {
    return leagues.map((league, leagueIdx) => {
      return (
        <Tab
          style={{ marginRight: 5 }}
          key={leagueIdx}
          value={leagueIdx}
          icon={<img src={league.logo} height="60" alt={league.name} />}
          component={Link}
          to={`/leagues/${league.shortHand}/1920`}
        />
      )
    })
  }, [])
  return (
    <AppBar position="static" textColor="primary" color="transparent">
      <Tabs color="transparent" value={leagueId}>
        {leagueTabs}
      </Tabs>
    </AppBar>
  )
}

export default Navbar
