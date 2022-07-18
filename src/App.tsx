import { useState, useEffect } from 'react'

import Header from './components/Header'
import GameBoard from './components/GameBoard'
import GameOverScreen from './components/GameOverScreen'

import { WINNING_COMBINATIONS } from './data/utils'

const App = () => {
  const [score, setScore] = useState([0, 0])
  const [isFirstPlayerTurn, setIsFirstPlayerTurn] = useState(true)
  const [firstPlayerPositions, setFirstPlayerPositions] = useState<number[]>([])
  const [secondPlayerPositions, setSecondPlayerPositions] = useState<number[]>([])
  const [isGameEnded, setIsGameEnded] = useState(true)
  const [gameCount, setGameCount] = useState(0)
  const [board, setBoard] = useState<string[]>(['', '', '', '', '', '', '', '', ''])
  const [gameEndText, setGameEndText] = useState('')

  useEffect(() => {
    checkForEnd()
  }, [board])

  const changeTurn = () => {
    setIsFirstPlayerTurn((prev) => !prev)
  }

  const startGame = () => {
    setGameEndText('')
    setIsFirstPlayerTurn(true)
    setFirstPlayerPositions([])
    setSecondPlayerPositions([])
    setIsGameEnded(false)
    setBoard(['', '', '', '', '', '', '', '', ''])
  }

  const checkForEnd = () => {
    WINNING_COMBINATIONS.forEach((combination) => {
      if (combination.every((number: number) => firstPlayerPositions.includes(number))) {
        setScore((prev) => {
          prev[0]++
          return [...prev]
        })
        setGameEndText('Player 1 wins!')
        setIsGameEnded(true)
        setGameCount((prev) => prev + 1)
      } else if (
        combination.every((number: number) => secondPlayerPositions.includes(number))
      ) {
        setScore((prev) => {
          prev[1]++
          return [...prev]
        })
        setGameEndText('Player 2 wins!')
        setIsGameEnded(true)
        setGameCount((prev) => prev + 1)
      } else if (board.every((position) => position)) {
        setGameEndText('Draw!')
        setIsGameEnded(true)
      }
    })
  }

  const placeToken = (position: number) => {
    if (
      firstPlayerPositions.includes(position) ||
      secondPlayerPositions.includes(position)
    )
      return
    if (isFirstPlayerTurn) {
      setFirstPlayerPositions((prev) => [...prev, position])
    } else {
      setSecondPlayerPositions((prev) => [...prev, position])
    }
    setBoard((prev) => {
      prev[position] = isFirstPlayerTurn ? '🐨' : '🐰'
      return [...prev]
    })
    changeTurn()
  }

  return (
    <div className='App'>
      <Header score={score} />
      <GameBoard placeToken={placeToken} board={board} />
      {isGameEnded && (
        <GameOverScreen
          gameCount={gameCount}
          startGame={startGame}
          gameEndText={gameEndText}
        />
      )}
    </div>
  )
}

export default App
