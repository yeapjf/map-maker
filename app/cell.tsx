export default function Cell({
  cellIndex,
  cellType,
  cellData,
  setCellData,
  isMouseDown,
} : {
  cellIndex: string,
  cellType: string,
  cellData: {
    [key: string]: string,
  }
  setCellData: Function,
  isMouseDown: boolean,
}) {
  const cellTypeMapping: {
    [key: string]: {
      title: string,
      color: string,
      hoverColor: string,
    },
  } = {
    ground: {
      title: 'Ground',
      color: 'bg-green-300',
      hoverColor: 'hover:bg-green-200',
    },
    lane: {
      title: 'Lane',
      color: 'bg-orange-300',
      hoverColor: 'hover:bg-orange-200',
    },
    tower: {
      title: 'Tower Slot',
      color: 'bg-blue-300',
      hoverColor: 'hover:bg-blue-200',
    }
  }

  const currentCellType = cellData[cellIndex] || 'ground'

  function updateCell() {
    setCellData({ ...cellData, [cellIndex]: cellType })
  }

  function handleMouseEnter() {
    if (isMouseDown) updateCell()
  }

  return(
    <div
      className={`border border-white ${cellTypeMapping[currentCellType].color} ${cellTypeMapping[currentCellType].hoverColor}`}
      onMouseDown={updateCell}
      onMouseEnter={handleMouseEnter}
    ></div>
  )
}
