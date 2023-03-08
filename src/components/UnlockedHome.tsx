import Head from "next/head";
import Image from "next/image";
import TopNav from "./TopNav";
import Hero from "./Hero";
import { useSession, signOut } from "next-auth/react";
import { Card, Title, AreaChart, Flex, Text } from "@tremor/react";
import Link from "next/link";

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

const UnlockedHome = ({ children }: any) => {
  const { data: session } = useSession();

  const banner = () => {
    return (
      <div className="h-screen w-screen">
        <h1>test</h1>
      </div>
    );
  };
 
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
        <main>
          <TopNav />

          <div className="p-[50px]" />

          <Hero
            Heading={session?.user?.name + "'s Dashboard"}
            HeroBody={
              <div>
                <div>{"Email: " + session?.user?.email}</div>

                <br />

                <button
                  className="p-2 border-2 border-black border-solid rounded-lg bg-red-800 text-white font-bold"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Sign Out
                </button>
              </div>
            }
            Window={
              <Image
                src={session?.user?.image ?? "/favicon.ico"}
                alt="user image"
                width={90}
                height={90}
                className="m-auto"
              />
            }
          />

          <br/><br/>

          <div className="max-w-6xl m-auto">
            <Card>
              <Title>{session?.user?.name + "'s Weekly Running Data"}</Title>
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

          <br />
        </main>

        {children}
      </div>
    </>
  );
};

export default UnlockedHome;
