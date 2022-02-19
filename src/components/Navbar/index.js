import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import MenuButton from './MenuButton';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-end flex-wrap p-3 lg:p-0 lg:mt-16 lg:mb-24">
      <Logo />
      <MenuButton active={active} handleClick={handleClick} />
      <div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto font-primary text-sm uppercase">
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full mr-12 text-slate-600 items-center justify-center hover:text-yellow-500 active:text-yellow-600 transition-colors ease-in duration-75">
              home
            </a>
          </Link>
          <Link href="/contact">
            <a className="lg:inline-flex lg:w-auto w-full text-slate-600 items-center justify-center hover:text-yellow-500 active:text-yellow-600">
              contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
