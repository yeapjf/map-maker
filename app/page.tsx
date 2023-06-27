'use client'

import Banner from './banner'
import CellTypeSelection from './cell-type-selection'
import Grid from './grid'
import Input from './input'

import { useState } from 'react'

export default function Home() {
  const [rows, setRows] = useState(30)
  const [cols, setCols] = useState(45)

  const [cellType, setCellType] = useState('lane')
  const [cellData, setcellData] = useState({})

  const [warning, setWarning] = useState('')

  function updateGridDimensions(e: any) {
    e.preventDefault()
    e.target.rows.blur()
    e.target.cols.blur()

    const newRows = e.target.rows.value
    const newCols = e.target.cols.value

    if (newRows > 100 || newCols > 100) {
      setWarning('Too many rows or columns!')
      return
    } else {
      setWarning('')
      setRows(newRows)
      setCols(newCols)
    }
  }

  function clearCells() {
    setcellData({})
  }

  return (
    <main className='py-16'>
      <div className='px-64'>
        <p className='text-4xl'>Map Maker</p>

        <form className='my-4' onSubmit={updateGridDimensions}>
          <label>Rows: </label>
          <Input name='rows' defaultValue={rows}></Input>
          <label>Columns: </label>
          <Input name='cols' defaultValue={cols}></Input>

          <button className='bg-white hover:bg-gray-100 text-gray-800 ml-2 px-2 border border-black rounded'>
            Update
          </button>

          <Banner type='warning' message={warning}></Banner>
        </form>

        <CellTypeSelection cellType={cellType} setCellType={setCellType}></CellTypeSelection>

        <div>
          <p className='italic'>Click and drag on grid to change cell type to the currently selected type.</p>
          <button
            className='bg-white hover:bg-gray-100 text-gray-800 mt-4 px-2 border border-black rounded'
            onClick={clearCells}
          >
            Clear Cells
          </button>
        </div>
      </div>

      <Grid rows={rows} cols={cols} cellType={cellType} cellData={cellData} setCellData={setcellData}></Grid>
    </main>
  )
};
