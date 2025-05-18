import type { ReactNode } from "react";

interface DeviceCardProps {
  name: string;
  status: string;
  icon: ReactNode;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ name, status, icon }) => {
  const isActive = status.toLowerCase().includes('active');

  return (
    <div
      className={`rounded-xl p-3 text-center border-2 transition-all duration-200 ${
        isActive
          ? 'border-cyan-400 bg-[#1F3B63] text-white'
          : 'border-[#2F4B71] bg-[#1F3B63] text-gray-400'
      }`}
    >
      <div className="flex justify-center items-center text-2xl mb-2">
        {icon}
      </div>
      <h3 className="text-sm font-semibold mb-1">{name}</h3>
      <p className={`text-xs ${isActive ? 'text-cyan-400' : 'text-gray-500'}`}>
        {status}
      </p>
    </div>
  );
};

export default DeviceCard;


  
  
  