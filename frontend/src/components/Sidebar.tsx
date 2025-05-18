import { FaCog, FaLock, FaTh } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-20 bg-[#13294B] py-6 flex flex-col items-center space-y-8 border-r border-white">
      {/* Icons */}
      <FaTh className="text-xl text-gray-400 hover:text-white cursor-pointer" />
      <FaLock className="text-xl text-gray-400 hover:text-white cursor-pointer" />
      <FaCog className="text-xl text-gray-400 hover:text-white cursor-pointer" />
    </div>
  );
};

export default Sidebar;
