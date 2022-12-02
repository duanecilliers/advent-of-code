const fs = require('fs')
const path = require('path')

const file = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8')

/**
 * Opponent map:
 * A for Rock
 * B for Paper
 * C for Scissors
 */

/**
 * My map:
 * X for Rock
 * Y for Paper
 * Z for Scissors
 */

/**
 * Points:
 * 8 for a win
 * 1 for a loss
 * 6 for a draw
 */

// outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).
const outcomePoints = {
  win: 6,
  loss: 0,
  draw: 3,
}

// The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors)
const selectionPoints = {
  X: 1,
  Y: 2,
  Z: 3,
}

const pointsMap = {
  'A': [
    ['X', outcomePoints.draw + selectionPoints.X],
    ['Y', outcomePoints.win + selectionPoints.Y],
    ['Z', outcomePoints.loss + selectionPoints.Z],
  ],
  'B': [
    ['X', outcomePoints.loss + selectionPoints.X],
    ['Y', outcomePoints.draw + selectionPoints.Y],
    ['Z', outcomePoints.win + selectionPoints.Z],
  ],
  'C': [
    ['X', outcomePoints.win + selectionPoints.X], 
    ['Y', outcomePoints.loss + selectionPoints.Y],
    ['Z', outcomePoints.draw + selectionPoints.Z],
  ]
}

const parseRound = (round) => round.split(' ')
const results = file.split('\n').map(parseRound).filter((round) => round.length === 2)

const getPoints = (round) => {
  const [opponent, me] = round
  const points = pointsMap[opponent].find(([move]) => move === me)[1]
  return points
}

const totalPoints = results.reduce((acc, round) => {
  const points = getPoints(round)
  return acc + points
}, 0)

console.log({ totalPoints })