

export default function Textarea({ id, placeholder, value, setValue }) {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        id={id}
        value={value}
        setValue={setValue}
        onChange={(e) => setValue(e.target.value)}
        className="resize-none p-1 border rounded-lg w-96 h-40"
      >
      </textarea>
    </div>
  )
}
