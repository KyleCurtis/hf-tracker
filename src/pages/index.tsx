import { useSession, signIn, signOut } from "next-auth/react";

import Header from "@/components/Header";

import TopNav from "@/components/TopNav";

export default function Home() {
  const { data: session }: any = useSession();

  if (session) {
    return (
      <main className="p-[1%] bg-white dark:bg-[var(--dark-bg)]">
        <div className="h-screen">
          <TopNav />
          <Header />
          Welcome, {session.user.email};
          <button onClick={() => signOut()}>Sign-out</button>
        </div>
      </main>
    );
  } else {
    return (
      <div>
        <main className="p-[1%] bg-white dark:bg-[var(--dark-bg)]">
        <div className="h-screen">
          <TopNav />
          <Header />
          <button onClick={() => signIn()}>sign in</button>
        </div>
      </main>
    
      </div>
    );
  }
}
