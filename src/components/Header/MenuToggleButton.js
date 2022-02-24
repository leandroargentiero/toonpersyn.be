const MenuToggleButton = ({ menuOpen, handleClick }) => {
  return (
    <button
      role="button"
      className="ml-auto inline-flex rounded p-3 outline-none md:hidden"
      onClick={handleClick}
    >
      {menuOpen ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.05025 5.63603C6.65972 5.24551 6.02656 5.24551 5.63603 5.63603C5.24551 6.02656 5.24551 6.65972 5.63603 7.05025L10.5858 12L5.63603 16.9498C5.24551 17.3403 5.24551 17.9734 5.63603 18.364C6.02656 18.7545 6.65972 18.7545 7.05025 18.364L12 13.4142L16.9497 18.364C17.3403 18.7545 17.9734 18.7545 18.364 18.364C18.7545 17.9734 18.7545 17.3403 18.364 16.9497L13.4142 12L18.364 7.05026C18.7545 6.65973 18.7545 6.02657 18.364 5.63605C17.9734 5.24552 17.3403 5.24552 16.9497 5.63605L12 10.5858L7.05025 5.63603Z"
            fill="currentColor"
          />
        </svg>
      ) : (
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
      )}
    </button>
  );
};

export default MenuToggleButton;
