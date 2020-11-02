const path = require("path")
const { leagues } = require("./static/leagues")
const { seasons } = require("./static/seasons")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  leagues.forEach(league => {
    seasons.forEach(season => {
      createPage({
        path: `/leagues/${league.shortHand}/${season}`,
        component: path.resolve("./src/templates/League.js"),
        context: {
          div: league.div,
          season,
        },
      })
    })
  })
}
