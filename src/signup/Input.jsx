function Input({
  id,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  label = "",
  disabled = false,
}) {
  return (
    <div className="mb-[30px] w-full">
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
        className="appearance-none border rounded-xl w-full py-[18px] px-[16px] text-gray-700"
        disabled={disabled}
      />
    </div>
  );
}

export default Input;
