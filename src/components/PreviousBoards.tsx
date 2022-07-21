import MiniBoard from './MiniBoard'

type PreviousBoardProps = {
  prevBoards: string[][]
}

const PreviousBoards = ({ prevBoards }: PreviousBoardProps) => {
  let boards
  if (prevBoards) {
    boards = prevBoards.map((board, index) => <MiniBoard key={index} board={board} />)
  }
  return (
    <div>
      <p>Previous Boards</p>
      <div className='prev-board-view'>{boards}</div>
    </div>
  )
}

export default PreviousBoards
