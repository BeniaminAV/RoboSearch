const Input = ({ placeholder, className, onChange }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  )
}

export default Input
