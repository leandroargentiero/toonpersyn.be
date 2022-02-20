const Container = ({ children }) => {
  return (
    <div className="container mx-auto max-w-[1024px] px-3 xl:px-0">
      {children}
    </div>
  );
};

export default Container;
