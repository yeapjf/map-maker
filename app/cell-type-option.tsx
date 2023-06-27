export default function CellTypeOption({
  cellType,
  setCellType,
  option,
} : {
  cellType: string,
  setCellType: Function,
  option: string,
}) {
  const cellTypeMapping : {
    [key: string]: {
      title: string,
      color: string,
    },
  } = {
    ground: {
      title: 'Ground',
      color: 'bg-green-300',
    },
    lane: {
      title: 'Lane',
      color: 'bg-orange-300',
    },
    tower: {
      title: 'Tower Slot',
      color: 'bg-blue-300',
    }
  }

  function isSelected() {
    return option === cellType ? 'bg-gray-200' : '';
  }

  function handleCellTypeChange() {
    setCellType(option)
  }

  return(
    <div
      className={`flex float-left ml-2 px-2 py-1 hover:bg-gray-100 cursor-pointer rounded ${isSelected()}`}
      onClick={handleCellTypeChange}
    >
      <div
        className={`w-5 h-5 mr-2 my-auto cursor-pointer ${cellTypeMapping[option].color}`}
        onClick={handleCellTypeChange}
      ></div>
      <label
        className='cursor-pointer'
        onClick={handleCellTypeChange}
      >
        {cellTypeMapping[option].title}
      </label>
    </div>
  )
}
