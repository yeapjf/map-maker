export default function Input({
  name,
  defaultValue,
} : {
  name: string,
  defaultValue: number,
}) {
  return(
    <input
      className='border border-black w-12 mr-2 px-1 rounded'
      type='text'
      autoComplete='off'
      name={name}
      defaultValue={defaultValue}
    ></input>
  )
}
