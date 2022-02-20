import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Meta /> */}
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
