type GameOverScreenProps = {
  gameCount: number
  startGame: () => void
  gameEndText: string
}

const GameOverScreen = ({ gameCount, startGame, gameEndText }: GameOverScreenProps) => {
  return (
    <div className='game-over'>
      {!gameCount ? (
        <div className='game-over-pop-up'>
          <h1>Welcome to Tic-Tac-Toe</h1>
          <button onClick={() => startGame()}>Start Game</button>
        </div>
      ) : (
        <div className='game-over-pop-up'>
          <h1>{gameEndText}</h1>
          <button onClick={() => startGame()}>Start Game</button>
        </div>
      )}
    </div>
  )
}

export default GameOverScreen
