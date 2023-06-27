export default function Banner({
  type,
  message,
} : {
  type: string,
  message: string,
}) {
  const hidden = message === '' ? 'hidden' : ''
  return(
    <div className={`mt-4 ${hidden}`}>
      <div className='bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4' role={type}>
        <p className='font-bold'>Warning</p>
        <p>{message}</p>
      </div>
    </div>
  )
}
