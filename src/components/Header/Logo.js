import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a className="inline-block">
        <h1 className="flex flex-col font-primary text-gray-800 hover:text-gray-600">
          <span className="text-xl font-semibold uppercase tracking-[.17em]">
            Toon Persyn
          </span>
          <span className="text-xs uppercase">
            Director Of Photography
          </span>
        </h1>
      </a>
    </Link>
  );
};

export default Logo;
