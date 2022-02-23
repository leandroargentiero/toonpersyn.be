const FilterButtons = ({ categories, handleFilterClick, filter }) => {
  return (
    <section className="mt-4 mb-8 grid w-full auto-cols-auto grid-flow-col justify-between md:justify-center md:gap-x-4">
      {categories &&
        categories.map((category) => {
          return (
            <button
              key={category}
              value={category}
              className={`rounded border-[1px] border-gray-100 py-1 px-3 font-primary text-xs text-gray-800 ${
                category === filter
                  ? 'bg-gray-100 hover:bg-gray-200'
                  : 'bg-white hover:bg-gray-100 active:bg-gray-200 '
              }`}
              onClick={handleFilterClick}
            >
              {category}
            </button>
          );
        })}
    </section>
  );
};

export default FilterButtons;
