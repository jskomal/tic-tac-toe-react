import React from 'react'

type HeaderProps = {
  score: number[]
}

const Header = ({ score }: HeaderProps) => {
  return (
    <div>
      <h1>TIC TAC TOE</h1>
      <span>Player 1: {score[0]} | </span>
      <span>Player 2: {score[1]}</span>
    </div>
  )
}

export default Header
