import ClipLoader from 'react-spinners/SquareLoader';

const Loader = ({ bgColor = 'bg-gray-50', iconColor = '#e5e7eb', size }) => {
  return (
    <div className={`relative z-10 h-full w-full ${bgColor}`}>
      <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
        <ClipLoader color={iconColor} size={size} />
      </div>
    </div>
  );
};

export default Loader;
