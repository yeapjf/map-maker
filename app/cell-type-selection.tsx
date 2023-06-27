import CellTypeOption from './cell-type-option'

export default function CellTypeSelection({
  cellType,
  setCellType,
} : {
  cellType: string,
  setCellType: Function,
}) {
  return(
      <div className='grid my-4 w-[450px]' style={{ gridTemplateColumns: '1fr 5fr' }}>
        <div className='flex'>
          <label className='my-auto'>Cell Type: </label>
        </div>
        <div className='flex'>
          <CellTypeOption cellType={cellType} setCellType={setCellType} option='ground'></CellTypeOption>
          <CellTypeOption cellType={cellType} setCellType={setCellType} option='lane'></CellTypeOption>
          <CellTypeOption cellType={cellType} setCellType={setCellType} option='tower'></CellTypeOption>
        </div>
      </div>
  );
}
