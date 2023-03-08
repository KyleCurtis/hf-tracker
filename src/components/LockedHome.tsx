import Head from "next/head";
import TopNav from "./TopNav";
import { signIn } from "next-auth/react";
import Hero from "./Hero";
import { IoMdFitness } from "react-icons/io";
import { Card, Title, AreaChart, Flex, Text } from "@tremor/react";

const chartdata = [
  {
    date: "Mon",
    "Distance (mi)": 2,
  },
  {
    date: "Tue",
    "Distance (mi)": 5,
  },
  {
    date: "Wed",
    "Distance (mi)": 1,
  },
  {
    date: "Thu",
    "Distance (mi)": 0,
  },
  {
    date: "Fri",
    "Distance (mi)": 3,
  },
  {
    date: "Sat",
    "Distance (mi)": 4,
  },
  {
    date: "Sun",
    "Distance (mi)": 2,
  },
];

const dataFormatter = (number: number) => {
  return Intl.NumberFormat("us").format(number).toString() + " mile(s)";
};

const LockedHome = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>HF-Tracker</title>
        <meta
          name="description"
          content="Health and Fitness Tracker Dashboard"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <TopNav />

        <div className="p-[50px]" />

        <Hero
          Heading={"HF-Tracking"}
          HeroBody={"Visualized Health and Fitness Analytics"}
          Window={
            <IoMdFitness className="text-black dark:text-white text-[60px] m-5" />
          }
        />

        <br />

        <button
          className="block p-2 border-2 border-black border-solid rounded-lg bg-blue-800 text-white font-bold w-[130px] m-auto"
          onClick={() => signIn()}
        >
          My Dashboard
        </button>

        <div className="p-[50px]" />

        <div className="max-w-6xl m-auto">
          <Card>
            <Title>Weekly Running Data (Example)</Title>
            <AreaChart
              data={chartdata}
              categories={["Distance (mi)"]}
              dataKey="date"
              height="h-72"
              colors={["indigo"]}
              valueFormatter={dataFormatter}
              marginTop="mt-4"
            />
          </Card>
        </div>

        {children}
      </div>
    </>
  );
};

export default LockedHome;