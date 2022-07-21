import React from 'react'

type HeaderProps = {
  score: number[]
  isFirstPlayerTurn: boolean
}

const Header = ({ score, isFirstPlayerTurn }: HeaderProps) => {
  return (
    <div>
      <h1>TIC TAC TOE</h1>
      <span>Player 1: {score[0]} | </span>
      <span>Player 2: {score[1]}</span>
      <p>Player {isFirstPlayerTurn ? '1' : '2'}, it's your turn!</p>
    </div>
  )
}

export default Header
