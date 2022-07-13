import { useState } from 'react'

import Header from './components/Header'
import GameBoard from './components/GameBoard'

import { WINNING_COMBINATIONS } from './data/utils'

const App = () => {
  const [score, setScore] = useState([0, 0])
  const [isFirstPlayerTurn, setIsFirstPlayerTurn] = useState(true)
  const [firstPlayerPositions, setFirstPlayerPositions] = useState<Number[]>([])
  const [secondPlayerPositions, setSecondPlayerPositions] = useState<Number[]>([])
  const [isGameEnded, setIsGameEnded] = useState(false)

  const changeTurn = () => {
    setIsFirstPlayerTurn((prev) => !prev)
  }

  const checkForEnd = () => {
    WINNING_COMBINATIONS.forEach((combination) => {
      if (combination.every((number) => firstPlayerPositions.includes(number))) {
        setScore((prev) => {
          prev[0]++
          return [...prev]
        })
      } else if (combination.every((number) => secondPlayerPositions.includes(number))) {
        setScore((prev) => {
          prev[1]++
          return [...prev]
        })
      }
    })
  }

  return (
    <div className='App'>
      <Header />
      <GameBoard />
    </div>
  )
}

export default App
