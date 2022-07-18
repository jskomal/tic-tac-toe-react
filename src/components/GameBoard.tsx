type GameBoardProps = {
  placeToken: (position: number) => void
  board: string[]
}

const GameBoard = ({ placeToken, board }: GameBoardProps) => {
  return (
    <div className='game-view'>
      <section
        onClick={(e) => placeToken(parseInt((e.target as Element).id))}
        className='board'
      >
        <div className='tic' id='0'>
          {board[0]}
        </div>
        <div className='tic' id='1'>
          {board[1]}
        </div>
        <div className='tic' id='2'>
          {board[2]}
        </div>
        <div className='tic' id='3'>
          {board[3]}
        </div>
        <div className='tic' id='4'>
          {board[4]}
        </div>
        <div className='tic' id='5'>
          {board[5]}
        </div>
        <div className='tic' id='6'>
          {board[6]}
        </div>
        <div className='tic' id='7'>
          {board[7]}
        </div>
        <div className='tic' id='8'>
          {board[8]}
        </div>
      </section>
    </div>
  )
}

export default GameBoard
