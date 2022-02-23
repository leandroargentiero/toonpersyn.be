import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
