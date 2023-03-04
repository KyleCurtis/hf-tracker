/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import {useSession, signIn, signOut} from "next-auth/react"
import Link from 'next/link'

export default function Home() {

  const {data: session} = useSession();
  if (session) {
    return (
      <>
        <Head>
          <title>HF-Tracker</title>
          <meta name="description" content="Health and Fitness Tracker Dashboard" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <img src={session.user?.image} alt="" />
        Welcome, {session.user?.name} 
        <br /> <br/>
        <Link href="/dashboard">
        <button className="p-2 border-2 border-black border-solid rounded-lg bg-blue-500 text-white font-bold">My Dashboard</button>
        </Link>
        <br /> <br />
        <button className="p-2 border-2 border-black border-solid rounded-lg bg-red-800 text-white font-bold" onClick={() => signOut({ callbackUrl: '/' })}>SignOut</button>
        </main>
      </>
    )
  }
  else {
    return (
      <div>You are not signed in 
        <br /> <br/>
        <button className="p-2 border-2 border-black border-solid rounded-lg bg-green-600 text-white font-bold" onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>My Dashboard</button></div>
    )
  }
  
}
