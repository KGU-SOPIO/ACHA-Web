function Input({
  id,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  label,
}) {
  return (
    <div className="mb-4 w-full">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
      />
    </div>
  );
}

export default Input;
