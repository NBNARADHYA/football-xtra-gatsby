import React, { useState, useMemo } from "react"
import { graphql } from "gatsby"
import Table from "../components/Table"
import TopScorers from "../components/TopScorers"
import Matches from "../components/Matches/"
import ViewsNavbar from "../components/ViewsNavbar"
import { leagues } from "../../static/leagues"
import Navbar from "../components/Navbar"
import getTableFromMatches from "../utils/getTableFromMatches"

export const query = graphql`
  query($div: String!, $season: String!) {
    footballXtraServer {
      matches(season: $season, div: $div) {
        ac
        af
        ar
        ast
        awayteam
        aws
        ay
        date
        ftag
        fthg
        ftr
        hc
        hf
        hometeam
        hr
        hs
        hst
        hy
        referee
        time
      }
    }
  }
`

const League = ({
  data: {
    footballXtraServer: { matches },
  },
  pageContext: { div, season },
  location,
}) => {
  console.log(location)
  const [view, setView] = useState("table")
  const league = leagues.find(league => league.div === div)
  const table = useMemo(() => {
    return getTableFromMatches({ matches }, null)
  }, [matches])

  return (
    <div>
      <Navbar leagueId={league.id} />
      <ViewsNavbar
        changeLeagueView={setView}
        view={view}
        season={season}
        league={league.shortHand}
      />
      {view === "table" && (
        <Table
          tableData={{
            error: null,
            isLoaded: true,
            table,
          }}
        />
      )}
      {view === "top-scorers" && (
        <TopScorers leagueIdx={league.id} season={season} />
      )}
      {view === "matches" && (
        <Matches
          matchUps={{
            data: { matches },
            error: null,
            loading: false,
          }}
        />
      )}
    </div>
  )
}

export default League
