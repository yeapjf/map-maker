import Cell from './cell'

import { useState } from 'react'

export default function Grid({
  rows,
  cols,
  cellType,
  cellData,
  setCellData,
} : {
  rows: number,
  cols: number,
  cellType: string,
  cellData: {
    [key: string]: string,
  },
  setCellData: Function,
}) {
  const [isMouseDown, setIsMouseDown] = useState(false)
  const cells: React.ReactNode[] = []

  function handleMouseDown() {
    setIsMouseDown(true)
  }

  function handleMouseUp() {
    setIsMouseDown(false)
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cellIndex = `${i},${j}`
      cells.push(
        <Cell
          key={cellIndex}
          cellIndex={cellIndex}
          cellType={cellType}
          cellData={cellData}
          setCellData={setCellData}
          isMouseDown={isMouseDown}
        ></Cell>
      );
    }
  }

  return(
    <div className='flex'>
      <div
        className='grid mt-8 mx-auto'
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{ gridTemplateRows: `repeat(${rows}, 25px)`, gridTemplateColumns: `repeat(${cols}, 25px)` }}
      >
        {cells.map(cell => cell)}
      </div>
    </div>
  )
}
