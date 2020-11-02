import React, { useContext } from "react"
import { Link } from "gatsby"
import { Container, Paper, Typography } from "@material-ui/core"
import { leagues } from "../../static/leagues"
import SeasonContext from "../context/SeasonContext"

export default function Home() {
  const { season } = useContext(SeasonContext)

  return (
    <Container style={{ paddingTop: "3%", textAlign: "center" }}>
      <Typography gutterBottom variant="h1" color="secondary">
        Welcome to Football Xtra
        <hr />
      </Typography>
      <Typography variant="h2" gutterBottom color="textSecondary">
        Choose a league
      </Typography>

      {leagues.map((league, leagueIdx) => (
        <Paper
          style={{
            margin: "20px",
            maxWidth: "500",
            display: "inline-block",
          }}
          elevation={0}
          key={leagueIdx}
          component={Link}
          to={`/leagues/${league.shortHand}/${season[league.id]}`}
        >
          <img
            src={league.logo}
            height="200"
            title={league.name}
            alt={league.name}
          />
        </Paper>
      ))}
    </Container>
  )
}
