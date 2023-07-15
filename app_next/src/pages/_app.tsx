import { Suspense, lazy, useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { getToken } from "../../utils/auth";
import DefaultLayout from "../../layout/DefaultLayout";
import "../../styles/tailwind.css";
import Loader from "../common/Loader";

// const Calendar = lazy(() => import('../'));
// const Chart = lazy(() => import('./pages/Chart'));
// const FormElements = lazy(() => import('./pages/Form/FormElements'));
// const FormLayout = lazy(() => import('./pages/Form/FormLayout'));
// const Profile = lazy(() => import('./pages/Profile'));
// const Settings = lazy(() => import('./pages/Settings'));
// const Tables = lazy(() => import('./pages/Tables'));
// const Alerts = lazy(() => import('./pages/UiElements/Alerts'));
// const Buttons = lazy(() => import('./pages/UiElements/Buttons'));
// const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));


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
      }else{
        setLayout(false);
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
