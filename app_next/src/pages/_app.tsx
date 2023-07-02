import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { getToken } from '../../utils/auth';
import DefaultLayout from '../../layout/DefaultLayout';
import '../../styles/tailwind.css';
import Loader from '../common/Loader';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [layout, setLayout] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = getToken();
    
    setTimeout(() => setLoading(false), 1000);

    if (token) {
      setLayout(true);
    }
  }, []);

  return loading ? (
    <Loader />
    ) : (
    <>
      <DefaultLayout show={layout}>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default MyApp;