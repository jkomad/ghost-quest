import Head from "next/head";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

// HOME VIEW/ROOT

// Main Nav component - include this in Layout component
// User Icon Component - link to user-profile page
// Search Icon component - filter component
// Favorites Icon component - link to favorites page

// Displays pins of nearby locations (if there are any)

export default function Home({ locations }) {
  return (
    <>
      <Head>
        <title>GHOST QUEST</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black text-white flex flex-col">
        Welcome to Ghost Quest!
        <Link href={"/locations"}>Click Here</Link>
      </div>
    </>
  );
}
