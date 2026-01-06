interface DropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
}

function Dropdown ({ label, value, options, onChange }: DropdownProps) {
  return (
    <label className="flex items-center gap-2 border border-neutral-700 px-3 py-1.5 rounded-md bg-neutral-800">
      <span className="text-neutral-400">{label}:</span>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-neutral-800 text-neutral-200 focus:outline-none cursor-pointer"
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown