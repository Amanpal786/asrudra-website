type Props = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const TableSearch = ({ value, onChange, placeholder }: Props) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || "Search..."}
      className="border px-4 py-2 rounded-lg w-80 text-gray-800 placeholder-gray-400"
    />
  )
}

export default TableSearch