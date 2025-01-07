function Button({ type = "submit", name }) {
  return (
    <button
      type={type}
      className="w-full bg-main-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {name}
    </button>
  );
}

export default Button;
