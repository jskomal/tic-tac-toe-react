import React from 'react'

type HeaderProps = {
  score: number[]
  isFirstPlayerTurn: boolean
}

const Header = ({ score, isFirstPlayerTurn }: HeaderProps) => {
  return (
    <div>
      <h1>TIC TAC TOE</h1>
      <span>{score[0]} to </span>
      <span>{score[1]} with </span>
      <span>
        {score[2]} {score[2] > 1 || score[2] === 0 ? 'draws' : 'draw'}
      </span>
      <p>Player {isFirstPlayerTurn ? '🐨' : '🐰'}, it's your turn!</p>
    </div>
  )
}

export default Header
