

export default function Input({ type, placeholder, value, setValue }) {
  return (
    <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="grow px-3 py-2 border rounded-lg focus:outline-none"
    />
  )
}
