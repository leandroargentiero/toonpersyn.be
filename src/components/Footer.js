import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 flex flex-col justify-center pb-12 text-center font-primary">
      <p className="mb-2 text-xs">{`©Toon Persyn ${currentYear} - All Rights Reserved`}</p>
      <p className="text-xs text-gray-400">
        website by{' '}
        <Link href="mailto:leandro@maremoto.be">
          <a className="hover:text-yellow-500">MAREMOTO</a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
