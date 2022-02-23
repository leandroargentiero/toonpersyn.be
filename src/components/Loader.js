import ClipLoader from 'react-spinners/SquareLoader';

const Loader = ({ bgColor, iconColor, size }) => {
  return (
    <div
      className={`relative z-10 h-full w-full ${
        bgColor ? bgColor : 'bg-gray-100'
      }`}
    >
      <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
        <ClipLoader color={iconColor} size={size} />
      </div>
    </div>
  );
};

export default Loader;
