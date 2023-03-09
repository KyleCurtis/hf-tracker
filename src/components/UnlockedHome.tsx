import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import TopNav from "./TopNav";
import Hero from "./Hero";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Card, Title, AreaChart, Flex, Text } from "@tremor/react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
                <p>{"Email: " + session?.user?.email}</p>

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
                src={session?.user?.image ?? "../../public/favicon.ico"}
                alt="user image"
                width={90}
                height={90}
                className="m-auto"
              />
            }
          />

          <div className="p-[50px]" />

          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            Enter Running Data
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              {
                <div>
                  <form className="p-3">
                    date: <input type="date" name="week_date" />
                    <br />
                    <br />
                    Distance (mi):{" "}
                    <input
                      type="text"
                      name="distance"
                      className="border-2 border-solid border-black"
                    />
                  </form>

                  <br />

                  <button className="bg-green-600 p-1 text-[#ffffff] font-bold border-2 border-solid border-black rounded-md">
                    Submit
                  </button>
                </div>
              }
            </Typography>
          </Popover>

          <div className="p-[50px]" />

          <div className="max-w-6xl m-auto">
            <Card>
              <Title>Weekly Running Data</Title>
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
