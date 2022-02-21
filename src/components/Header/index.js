import { useState } from 'react';
import Logo from './Logo';
import Container from '../Container';
import Navigation from './Navigation';
import MenuToggleButton from './MenuToggleButton';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-30  bg-white/80 py-4 saturate-100 backdrop-blur-md md:mb-8 md:py-8">
      <Container>
        <div className="flex w-full flex-wrap justify-between">
          <Logo />
          <MenuToggleButton menuOpen={menuOpen} handleClick={toggleMenu} />
          <Navigation menuOpen={menuOpen} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
