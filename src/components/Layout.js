const Layout = ({ children }) => {
  return (
    <>
      {/* <Meta /> */}
      {/* <Header /> */}
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
