import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import LoginPage from './pages/LoginPage.tsx'; // make sure this path is correct

function RootComponent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <StrictMode>
      {isAuthenticated ? <App /> : <LoginPage onLoginSuccess={handleLoginSuccess} />}
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<RootComponent />);





