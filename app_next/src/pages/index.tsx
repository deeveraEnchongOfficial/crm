import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { getToken } from '../../utils/auth';
import CardFour from '../components/CardFour';
import CardOne from '../components/CardOne';
import CardThree from '../components/CardThree';
import CardTwo from '../components/CardTwo';
import ChartOne from '../components/ChartOne';
// import ChartThree from '../components/ChartThree';
// import ChartTwo from '../components/ChartTwo';
// import ChatCard from '../components/ChatCard';
// import MapOne from '../components/MapOne';
// import TableOne from '../components/TableOne';
import Loader from "../common/Loader";

export default function Dashboard() {

  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push('/auth/login'); // Redirect to the login page if the token is not present
    } else {
      setLoading(false);
    }
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        {/* <ChartTwo />
        <ChartThree />
        <MapOne /> */}
        <div className="col-span-12 xl:col-span-8">
          {/* <TableOne /> */}
        </div>
        {/* <ChatCard /> */}
      </div>
    </>
  );
}
