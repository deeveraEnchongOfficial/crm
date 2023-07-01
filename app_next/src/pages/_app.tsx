import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { getToken } from '../../utils/auth';
import DefaultLayout from '../../layout/DefaultLayout';
import '../../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [layout, setLayout] = useState<boolean>(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setLayout(true);
    }
  }, []);

  return (
    <DefaultLayout show={layout}>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;