import TopNav from "@/components/TopNav";
import { getSession, signOut } from "next-auth/react";
import Image from "next/image"

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

export default function Dashboard({ session }: any) {
  return (
    <div>
      <TopNav />
      <div className="p-[50px]"></div>
      <h1 className="text-center">Dashboard</h1>
      <br />
      <div className="border-black border-2 border-solid rounded-lg p-5 max-w-2xl m-auto">
        <div className="w-[90px] h-[90px] rounded-[50%] overflow-hidden border-2 border-black border-solid">
        <Image 
          src={session.user?.image ?? "../../public/favicon.ico"}
          alt="user image"
          width={90}
          height={90}
          />
        </div>
        <br />
        <p>User: {session.user.name}</p>
        <p>Email: {session.user.email}</p>
        <br />
        <button className="p-2 border-2 border-black border-solid rounded-lg bg-red-800 text-white font-bold" onClick={() => signOut({ callbackUrl: '/' })}>SignOut</button>
      </div>
    </div>
  );
}
