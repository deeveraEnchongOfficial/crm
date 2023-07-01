<!-- import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getToken } from '../utils/auth';

export default function ProtectedPage() {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push('/login'); // Redirect to the login page if the token is not present
    }
  }, []);

  // Rest of the component code...
} -->