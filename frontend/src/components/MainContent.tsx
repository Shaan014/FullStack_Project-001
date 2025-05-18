import {
  FaCamera,
  FaDoorOpen,
  FaHome,
  FaLightbulb,
  FaShieldAlt,
  FaSnowflake,
  FaUmbrella,
  FaVideo,
  FaWifi
} from 'react-icons/fa';
import DeviceCard from './DeviceCard';

const exteriorDevices = [
  { name: 'Entrance camera', status: 'Active', icon: <FaVideo /> },
  { name: 'Stairs camera', status: 'Deactivated at 22:47', icon: <FaVideo /> },
  { name: 'Canopies', status: 'Deactivated at 21:00', icon: <FaShieldAlt /> },
  { name: 'Garage door', status: 'Deactivated at 23:51', icon: <FaDoorOpen /> },
  { name: 'Parasols', status: 'Deactivated at 21:00', icon: <FaUmbrella /> },
  { name: 'Garden lights', status: 'Active', icon: <FaLightbulb /> },
];

const devices = [
  { name: 'House exterior', icon: <FaHome />, active: true },
  { name: 'Lights', icon: <FaLightbulb /> },
  { name: 'Cams', icon: <FaCamera /> },
  { name: 'Router', icon: <FaWifi /> },
  { name: 'Home appliances', icon: <FaHome /> },
  { name: 'Air conditioning', icon: <FaSnowflake /> },
];

const MainContent = () => {
  return (
    <div className="flex-1 p-6 font-sans bg-[#0B1E39] min-h-screen text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold">Domotic assistant</h1>
          <button className="bg-[#3FC4FF] text-black text-sm font-medium px-4 py-1.5 rounded hover:bg-cyan-400">
            + Add Device
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex gap-6">
        {/* Devices Sidebar */}
        <div className="bg-[#152C4A] p-4 rounded-xl w-1/4 h-[500px] flex flex-col">
          <h2 className="text-sm uppercase mb-4 tracking-wide text-gray-300">Devices</h2>
          <div className="flex flex-col gap-3 overflow-auto">
            {devices.map((item) => (
              <div
                key={item.name}
                className={`flex items-center gap-3 p-3 rounded-md border ${
                  item.active
                    ? 'bg-cyan-400 bg-opacity-20 border-cyan-400 text-white'
                    : 'border-[#3C5A78] text-gray-300'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* House Exterior Devices */}
        <div className="bg-[#152C4A] p-4 rounded-xl w-3/4 h-[500px] flex flex-col">
          <h2 className="text-sm uppercase mb-4 tracking-wide text-gray-300">House Exterior Devices</h2>
          <div className="grid grid-cols-2 gap-4 flex-1 overflow-auto">
            {exteriorDevices.map((device) => (
              <DeviceCard key={device.name} {...device} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;


