import { useRouter } from 'next/router';
import Link from 'next/link';

const NavItem = ({ href, text }) => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <Link href={href}>
      <a>
        <li
          className={`${
            currentPath === href ? 'underline' : ''
          } py-6 font-primary text-xs uppercase hover:text-yellow-500 active:text-yellow-600 md:p-0`}
        >
          {text}
        </li>
      </a>
    </Link>
  );
};

const Navigation = ({ menuOpen }) => {
  return (
    <nav className="w-full md:w-auto">
      <ul
        className={`${
          menuOpen ? '' : 'hidden'
        } h-full gap-x-9 text-center md:grid md:grid-flow-col md:items-end`}
      >
        <NavItem href="/" text="selected work" />
        <NavItem href="/contact" text="contact" />
      </ul>
    </nav>
  );
};

export default Navigation;
