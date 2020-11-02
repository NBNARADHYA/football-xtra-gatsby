import React from "react"
import { Link } from "gatsby"
import { Container, GridList, GridListTile } from "@material-ui/core"
import { leagues } from "../../static/leagues"

export default function Home() {
  return (
    <Container>
      <GridList cellHeight={500} cols={3}>
        {leagues.map((league, leagueIdx) => (
          <GridListTile
            key={leagueIdx}
            component={Link}
            to={`/leagues/${league.shortHand}/1920`}
          >
            <img src={league.logo} height={50} alt={league.name} />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  )
}
