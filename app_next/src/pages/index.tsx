import { useState, useEffect } from "react";
import CardFour from '@/components/Cards/CardFour';
import CardOne from '@/components/Cards/CardOne';
import CardThree from '@/components/Cards/CardThree';
import CardTwo from '@/components/Cards/CardTwo';
import ChartOne from '@/components/Charts/ChartOne';
import ChartThree from '@/components/Charts/ChartThree';
import ChartTwo from '@/components/Charts/ChartTwo';
import ChatCard from '@/components/Cards/ChatCard';
import ChartFour from '@/components/Charts/ChartFour';
import TableOne from '@/components/Tables/TableOne';
import ChartApex from '@/components/Charts/ChartApex';
import DataStats from '@/components/Cards/DataStats';

export default function Dashboard() {


  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <DataStats />
        <ChartOne />
        <ChartTwo />
        <ChartFour />
        <ChartThree />
        <ChartApex />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
}
