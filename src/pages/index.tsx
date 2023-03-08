<<<<<<< HEAD
import { getSession, signOut } from "next-auth/react";
import UnlockedHome from "@/components/UnlockedHome";
import LockedHome from "@/components/LockedHome";
import Hero from "@/components/Hero";
import Image from "next/image";


export default function Home({ data }: any) {
  if (data) {
=======
import { useSession } from "next-auth/react";
import UnlockedHome from "@/components/UnlockedHome";
import LockedHome from "@/components/LockedHome";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <h1>Loading Dashboard...</h1>;
  }
  if (session) {
>>>>>>> c585eaca95a86df794aa225c627fb86fd7ed0b9a
    return <UnlockedHome />;
  } else {
    return <LockedHome />;
  }
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
    
  return {
    props: {
      data: session,
    },
  };
}