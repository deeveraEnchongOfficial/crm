import { Suspense, lazy, useEffect, useState } from 'react';
import Head from 'next/head'
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { useAuth } from "@/hooks/useAuth";
import DefaultLayout from "@/../layout/DefaultLayout";
import "../../styles/tailwind.css";
import Loader from "@/common/Loader";

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
  const currentPath = router.pathname;
  const [layout, setLayout] = useState(false);
  const [loading, setLoading] = useState(true);

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    console.log("running effect");
    if(!isAuthenticated && (currentPath == '/auth/login' || currentPath == '/auth/signup')){
      setLoading(false);
      setLayout(false);
    }

    if(isAuthenticated){
      setLoading(false);
      setLayout(true);
    }
  }, [currentPath, isAuthenticated]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Head>
        <title>upNext</title>
        {/* Add the favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* Add other meta tags, styles, or scripts here if needed */}
      </Head>
      <DefaultLayout show={layout}>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default MyApp;
