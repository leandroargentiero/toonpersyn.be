import { useState } from 'react';
import { motion } from 'framer-motion';

const FilterButtons = ({ categories, handleOnClick, filter }) => {
  const [focused, setFocused] = useState(null);

  return (
    <ul
      className="mt-4 mb-8 flex w-full justify-between sm:w-fit sm:justify-start md:gap-x-5"
      onMouseLeave={() => setFocused(null)}
    >
      {categories &&
        categories.map((category) => {
          return (
            <li
              tabIndex={0}
              key={category}
              value={category}
              className={`group relative cursor-pointer py-2 px-4 leading-none`}
              onKeyDown={(event) =>
                event.key === 'Enter' ? handleOnClick(category) : null
              }
              onFocus={() => setFocused(category)}
              onMouseEnter={() => setFocused(category)}
              onClick={() => handleOnClick(category)}
            >
              <span className="relative z-10 font-primary text-xs text-gray-800 dark:text-neutral-200">
                {category}
              </span>
              {focused === category || filter === category ? (
                <motion.div
                  transition={{
                    layout: {
                      duration: 0.2,
                      ease: 'easeOut',
                    },
                  }}
                  className="absolute top-0 left-0 right-0 bottom-0 z-0 rounded-md bg-gray-100 group-active:bg-gray-200"
                  layoutId="highlight"
                />
              ) : null}
            </li>
          );
        })}
    </ul>
  );
};

export default FilterButtons;
