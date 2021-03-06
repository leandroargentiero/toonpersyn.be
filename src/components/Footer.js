import Container from './Container';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 pb-12 font-primary">
      <Container>
        <p className="mb-2 text-xs">{`©Toon Persyn ${currentYear} - All Rights Reserved`}</p>
        <p className="text-xs text-gray-400">
          website by{' '}
          <a
            href="https://www.leandroargentiero.com"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Leandro Argentiero
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
