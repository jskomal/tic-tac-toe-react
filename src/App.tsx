import { useState, useEffect } from 'react'

import { WINNING_COMBINATIONS } from './data/utils'

import Header from './components/Header'
import GameBoard from './components/GameBoard'
import GameOverScreen from './components/GameOverScreen'
import PreviousBoards from './components/PreviousBoards'

const App = () => {
  const [score, setScore] = useState([0, 0])
  const [gameCount, setGameCount] = useState(0)
  const [isGameEnded, setIsGameEnded] = useState(true)
  const [gameEndText, setGameEndText] = useState('')
  const [isFirstPlayerTurn, setIsFirstPlayerTurn] = useState(true)
  const [firstPlayerPositions, setFirstPlayerPositions] = useState<number[]>([])
  const [secondPlayerPositions, setSecondPlayerPositions] = useState<number[]>([])
  const [board, setBoard] = useState<string[]>(['', '', '', '', '', '', '', '', ''])
  const [prevBoards, setPrevBoards] = useState<string[][]>([])

  useEffect(() => {
    checkForEnd()
  }, [board])

  const changeTurn = () => {
    setIsFirstPlayerTurn((prev) => !prev)
  }

  const endGame = () => {
    setIsGameEnded(true)
    setGameCount((prev) => prev + 1)
    setPrevBoards((prev) => [...prev, [...board]])
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
    let shouldEnd = false
    if (board.every((position) => position)) {
      setGameEndText('Draw!')
      shouldEnd = true
    }
    WINNING_COMBINATIONS.forEach((combination) => {
      if (combination.every((number: number) => firstPlayerPositions.includes(number))) {
        setScore((prev) => {
          prev[0]++
          return [...prev]
        })
        setGameEndText('Player 1 wins!')
        shouldEnd = true
      } else if (
        combination.every((number: number) => secondPlayerPositions.includes(number))
      ) {
        setScore((prev) => {
          prev[1]++
          return [...prev]
        })
        setGameEndText('Player 2 wins!')
        shouldEnd = true
      }
    })
    if (shouldEnd) endGame()
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
      <Header score={score} isFirstPlayerTurn={isFirstPlayerTurn} />
      <GameBoard placeToken={placeToken} board={board} />
      {isGameEnded && (
        <GameOverScreen
          gameCount={gameCount}
          startGame={startGame}
          gameEndText={gameEndText}
        />
      )}
      {prevBoards.length > 0 && <PreviousBoards prevBoards={prevBoards} />}
    </div>
  )
}

export default App
