const FilterButtons = ({ categories, handleFilterClick, filter }) => {
  return (
    <section className="mt-4 mb-8 grid w-full auto-cols-auto grid-flow-col justify-between md:justify-center md:gap-x-4">
      {categories &&
        categories.map((category) => {
          return (
            <button
              key={category}
              value={category}
              className={`rounded border-[1px] border-slate-200 py-1 px-3 text-sm active:bg-slate-200 ${
                category === filter
                  ? 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
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
