import React from 'react'

type HeaderProps = {
  score: TScore
  isFirstPlayerTurn: boolean
}

type TScore = {
  player1Wins: number
  player2Wins: number
  draws: number
}

const Header = ({ score, isFirstPlayerTurn }: HeaderProps) => {
  const { player1Wins, player2Wins, draws } = score
  return (
    <div>
      <h1>TIC TAC TOE</h1>
      <span>{player1Wins} to </span>
      <span>{player2Wins} with </span>
      <span>
        {draws} {draws > 1 || draws === 0 ? 'draws' : 'draw'}
      </span>
      <p>Player {isFirstPlayerTurn ? '🐨' : '🐰'}, it's your turn!</p>
    </div>
  )
}

export default Header
