import React, { useState } from 'react';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        setMessage('✅ Login successful!');
        onLoginSuccess();
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setMessage('Error connecting to server.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
      <div className="w-80 bg-[#13294B] p-5 flex flex-col gap-6 text-white rounded-lg shadow-2xl">
        <div>
          <h3 className="text-lg font-bold mb-2">User Login</h3>
          <hr className="border-white opacity-30 mb-4" />
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded bg-[#1E3A5F] text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded bg-[#1E3A5F] text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-cyan-400 text-[#13294B] font-semibold rounded hover:bg-cyan-300 transition duration-200"
          >
            Login
          </button>
        </form>

        {message && <p className="text-sm text-center text-cyan-300">{message}</p>}

        <hr className="border-white opacity-30" />

        <div className="text-xs text-center text-gray-300">
          <p>
            Don't have an account?{' '}
            <span className="text-cyan-300 cursor-pointer">Sign up</span>
          </p>
          <p>
            <span className="text-cyan-300 cursor-pointer">Forgot Password?</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

