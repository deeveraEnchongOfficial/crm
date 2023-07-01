import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { getToken } from '../../utils/auth';
import Layout from '../../components/Layout';
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
    <Layout show={layout}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;