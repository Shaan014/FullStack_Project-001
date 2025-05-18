import { FaSearch } from 'react-icons/fa';
import userImage from '../assets/images/User.webp';

const Topbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(); // reload to go back to login
  };

  return (
    <div className="w-full flex items-center justify-between px-6 py-4 border-b border-white bg-[#0B1E36]">
      {/* Left: GS + Search Bar */}
      <div className="flex items-center gap-4">
        <div className="text-white text-2xl font-bold">GS</div>

        {/* Search bar with icon on right */}
        <div className="flex items-center bg-[#13294B] rounded-md px-3 py-2 w-80 justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-white w-full pr-2"
          />
          <FaSearch className="text-gray-400 ml-2" />
        </div>
      </div>

      {/* Right: Logo + Logout */}
      <div className="flex items-center gap-4">
        <img
          src={userImage}// Update this path if needed
          alt='logo'
          className="w-10 h-10 rounded-full object-cover"
        />
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;


