import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { login } from '../../utils/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  useEffect(() => {
    // Check if user is already authenticated
    const token = localStorage.getItem('token');
    if (token) {
      router.replace('/'); // Redirect to dashboard if authenticated
    }
  }, [router]);

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
    // <div className="flex flex-col items-center justify-center min-h-screen">
    //   <h1 className="mb-8 text-4xl font-bold">Login</h1>
    //   {error && <p className="mb-4 text-red-500">{error}</p>}
    //   <form className="flex flex-col items-center" onSubmit={handleLogin}>
    //     <div className="mb-4">
    //       <label htmlFor="email" className="mr-2">Email:</label>
    //       <input
    //         type="email"
    //         id="email"
    //         className="px-2 py-1 border border-gray-300 rounded"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label htmlFor="password" className="mr-2">Password:</label>
    //       <input
    //         type="password"
    //         id="password"
    //         className="px-2 py-1 border border-gray-300 rounded"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
    //     >
    //       Login
    //     </button>
    //   </form>
    // </div>
    <>
    <div className="grid grid-cols-2 mt-20 bg-">
      <div className='w-3/7 border-2 mt-10 ml-auto mr-auto justify-center text-center'>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <h1>suspendisse.</h1>
      </div>
      <div className='w-4/5 border-2 ml-auto mr-auto'>
        <h1>Start for free</h1>
        <h1>Sign in to AppNext</h1>
        <label>Email</label><br/>
        <input placeholder='Enter your email'></input><br/>
        <label>Re-type Password</label><br/>
        <input placeholder='6+ Characters, 1 Capital letter'></input><br/>
        <button>Sign in</button><br/>
        <button>Sign in with Google</button>
        <h3>Dont have any account? <a href="">Sign Up</a></h3>
      </div>
    </div>
    
    </>
  );
}
