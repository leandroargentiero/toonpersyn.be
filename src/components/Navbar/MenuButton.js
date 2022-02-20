const MenuButton = ({ active, handleClick }) => {
  return (
    <button
      className={`${
        active ? 'bg-slate-100' : ''
      } ml-auto inline-flex rounded p-3 text-slate-400 outline-none hover:text-slate-500 lg:hidden`}
      onClick={handleClick}
    >
      <svg
        className="h-6 w-6"
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
