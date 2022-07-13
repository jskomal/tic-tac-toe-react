import React, { useState, useRef } from 'react'

type GameBoardProps = {}

const GameBoard = (props: GameBoardProps) => {
  return (
    <div className='game-view'>
      <section className='board'>
        <div className='tic'>1</div>
        <div className='tic'>2</div>
        <div className='tic'>3</div>
        <div className='tic'>4</div>
        <div className='tic'>5</div>
        <div className='tic'>6</div>
        <div className='tic'>7</div>
        <div className='tic'>8</div>
        <div className='tic'>9</div>
      </section>
    </div>
  )
}

export default GameBoard
