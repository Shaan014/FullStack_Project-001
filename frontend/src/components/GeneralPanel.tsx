import downarrow from "../assets/icons/down.png";

const GeneralPanel = () => {
  return (
    <div className="w-80 bg-[#13294B] p-4 flex flex-col gap-6 text-white rounded-lg">
      {/* General Commands Header */}
      <div>
        <h3 className="text-lg font-bold mb-2">General commands</h3>
        <hr className="border-white opacity-30 mb-4" />

        {/* THERMOSTAT Section */}
        <p className="text-sm text-gray-300">THERMOSTAT</p>

        <div className="flex items-start gap-x-3 mt-3">
          {/* Temperature Box */}
          <div className="border border-white rounded-md px-5 py-3 text-center">
            <div className="text-white text-xl font-semibold">25 ºC</div>
            <div className="text-gray-300 text-sm">19 ºC</div>
          </div>

          {/* Controls: + - and Toggle */}
          <div className="flex flex-col items-start gap-2">
            {/* + and - Buttons */}
            <div className="flex gap-2">
              <button className="border border-white text-white w-8 h-8 rounded text-lg font-semibold">
                +
              </button>
              <button className="border border-white text-white w-8 h-8 rounded text-lg font-semibold">
                −
              </button>
            </div>

            {/* Toggle Switch */}
            <label className="flex items-center gap-2 mt-1">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-10 h-5 bg-gray-600 rounded-full peer-checked:bg-cyan-400 transition duration-300" />
                <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition duration-300" />
              </div>
              <span className="text-xs text-white leading-tight">
                Automatic
                <br />
                regulation
              </span>
            </label>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white opacity-30 my-5" />

        {/* ENERGY Section */}
        <p className="text-sm text-gray-300">ENERGY</p>
        <p className="text-xs text-cyan-300 mb-2">
          CURRENT CONSUMPTION - 12,4 kWh
        </p>

        <div className="flex items-center justify-between mb-2">
          <span>Solar panels</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-10 h-5 bg-gray-600 rounded-full peer peer-checked:bg-cyan-400 transition duration-300"></div>
            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition duration-300" />
          </label>
        </div>

        <div className="flex items-center justify-between">
          <span>Power reserve</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-10 h-5 bg-gray-600 rounded-full peer peer-checked:bg-cyan-400 transition duration-300"></div>
            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition duration-300" />
          </label>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white opacity-30" />

      {/* STAYS Section */}
      <div>
        <p className="text-sm text-gray-300 mb-2">STAYS</p>
        {["Kitchen", "Living room", "Bedrooms", "Bath", "Garden"].map(
          (room) => (
            <div
              key={room}
              className="flex justify-between items-center py-2 border-b border-white"
            >
              <span>{room}</span>
              <img src={downarrow} alt="Down Arrow" className="w-3 h-3" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default GeneralPanel;
