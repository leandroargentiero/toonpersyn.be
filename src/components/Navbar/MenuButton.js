const MenuButton = ({ active, handleClick }) => {
  return (
    <button
      className={`${
        active ? 'bg-slate-100' : ''
      } inline-flex p-3 rounded lg:hidden text-slate-400 ml-auto hover:text-slate-500 outline-none`}
      onClick={handleClick}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

export default MenuButton;
