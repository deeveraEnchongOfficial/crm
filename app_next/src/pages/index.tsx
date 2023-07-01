import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { login, getToken } from '../../utils/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push('/login'); // Redirect to the login page if the token is not present
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await login(email, password);
    if (token) {
      router.push('/dashboard'); // Redirect to the dashboard page
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-8 text-4xl font-bold">DashBoard</h1>
    </div>
  );
}
