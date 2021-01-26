const TextError = (props) => {
  return(
    <>
      <div className="text-red-500 text-xs font-bold mt-2">{props.errorMessage}</div>
    </>
  )
}

export default TextError