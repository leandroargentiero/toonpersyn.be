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
    <nav className="flex flex-wrap items-end p-3 lg:mt-16 lg:mb-24 lg:p-0">
      <Logo />
      <MenuButton active={active} handleClick={handleClick} />
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
      >
        <div className="lgw:h-auto grid gap-x-9 font-primary text-xs uppercase lg:ml-auto lg:inline-flex lg:w-auto lg:flex-row lg:items-center">
          <Link href="/">
            <a className="w-full items-center justify-center text-slate-600 underline hover:text-yellow-500 active:text-yellow-600 lg:inline-flex lg:w-auto">
              selected work
            </a>
          </Link>
          <Link href="/contact">
            <a className="w-full items-center justify-center text-slate-600 hover:text-yellow-500 active:text-yellow-600 lg:inline-flex lg:w-auto">
              contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
