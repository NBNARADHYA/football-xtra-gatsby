import React, { useContext } from "react"
import { Link } from "gatsby"
import { Container, GridList, GridListTile } from "@material-ui/core"
import { leagues } from "../../static/leagues"
import SeasonContext from "../context/SeasonContext"

export default function Home() {
  const { season } = useContext(SeasonContext)

  return (
    <Container>
      <GridList cellHeight={500} cols={3}>
        {leagues.map((league, leagueIdx) => (
          <GridListTile
            key={leagueIdx}
            component={Link}
            to={`/leagues/${league.shortHand}/${season[league.id]}`}
          >
            <img src={league.logo} height={50} alt={league.name} />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  )
}
