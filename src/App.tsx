import { useState } from 'react'

import Header from './components/Header'
import GameBoard from './components/GameBoard'

const App = () => {
  const [score, setScore] = useState([0, 0])

  return (
    <div className='App'>
      <Header />
      <GameBoard />
    </div>
  )
}

export default App
