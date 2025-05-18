import GeneralPanel from './components/GeneralPanel';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="min-h-screen bg-[#0C1E3C] text-white flex flex-col">
      {/* Topbar on top */}
      <Topbar />

      {/* Row layout below Topbar */}
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
        <GeneralPanel />
      </div>
    </div>
  );
}

export default App;





