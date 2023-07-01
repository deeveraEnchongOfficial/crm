import { useState } from 'react';
// import axios from 'axios';
import appNext from '../../axiosConfig';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await appNext.post(`/api/auth/login`, { email, password });
      // Handle successful login
      router.push('/dashboard'); // Replace '/dashboard' with your desired route
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-8 text-4xl font-bold">Login</h1>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <form className="flex flex-col items-center" onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="mr-2">Email:</label>
          <input
            type="email"
            id="email"
            className="px-2 py-1 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="mr-2">Password:</label>
          <input
            type="password"
            id="password"
            className="px-2 py-1 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
