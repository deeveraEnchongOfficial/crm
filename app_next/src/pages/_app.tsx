import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { getToken } from "../../utils/auth";
import DefaultLayout from "../../layout/DefaultLayout";
import "../../styles/tailwind.css";
import Loader from "../common/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [layout, setLayout] = useState(false);
  const [loading, setLoading] = useState(true);

  const currentRoute = router.pathname;

  useEffect(() => {
    const fetchToken = async () => {
      setLoading(true); // Set the loading state to true

      const token = await getToken();

      if (token) {
        setLayout(true);
      }

      setLoading(false); // Set the loading state back to false
    };

    fetchToken();
  }, [currentRoute]);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout show={layout}>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
