const FilterButtons = ({ categories, handleFilterClick, filter }) => {
  return (
    <section className="mt-4 mb-8 grid w-full auto-cols-auto grid-flow-col justify-between md:justify-center md:gap-x-4">
      {categories &&
        categories.map((category) => {
          return (
            <button
              key={category}
              value={category}
              className={`rounded py-2 px-3 font-primary text-xs text-gray-800 dark:text-neutral-200 ${
                category === filter
                  ? 'bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700'
                  : 'bg-white hover:bg-gray-100 active:bg-gray-200 dark:bg-neutral-900 dark:hover:bg-neutral-800'
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
